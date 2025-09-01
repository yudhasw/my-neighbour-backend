/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAnnouncementManageDto } from '../../../dtos/requests/create/create-announcement-manage.dto';
import { UpdateAnnouncementManageDto } from '../../../dtos/requests/update/update-announcement-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
import { PrismaClientKnownRequestError } from '../../../common/database/generated/prisma/runtime/library';
import { GeneralHelper } from '../../../common/helper/generalHelper';

interface FileAttachment {
  path: string;
  originalName?: string;
  size?: number;
  mimetype?: string;
  uploadedAt?: Date;
}

interface AnnouncementWithAttachments {
  attachments: string[] | FileAttachment[] | null;
  [key: string]: any;
}

@Injectable()
export class AnnouncementManageService {
  constructor(private readonly prisma: DatabaseService) {}

  private processFiles(files?: Express.Multer.File[]): string[] {
    if (!files || files.length === 0) return [];

    return files.map((file) => {
      const folderPath = GeneralHelper.getFolderExtension(file.mimetype);
      return `${folderPath}/${file.filename}`;
    });
  }

  private safeParseAttachments(attachments: unknown): string[] {
    if (!attachments) return [];

    if (Array.isArray(attachments)) {
      return attachments
        .map((item) => (typeof item === 'string' ? item : item.path || ''))
        .filter(Boolean);
    }

    if (typeof attachments === 'string') {
      try {
        const parsed: unknown = JSON.parse(attachments);
        if (Array.isArray(parsed)) {
          return parsed
            .map((item) => (typeof item === 'string' ? item : item.path || ''))
            .filter(Boolean);
        }
      } catch (error) {
        console.error('Error parsing attachments JSON:', error);
      }
    }

    return [];
  }

  async create(
    createRequest: CreateAnnouncementManageDto,
    files?: Express.Multer.File[],
  ) {
    try {
      const attachmentPaths = this.processFiles(files);

      return await this.prisma.announcements.create({
        data: {
          title: createRequest.title,
          content: createRequest.content,
          attachments: attachmentPaths,
          employee: { connect: { id: createRequest.employeeId } },
          expiryDate: createRequest.expiryDate,
          publishDate: createRequest.publishDate,
        },
      });
    } catch (error) {
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Membuat Data Pengumuman',
      );
    }
  }

  async findAll() {
    try {
      const announcements = await this.prisma.announcements.findMany({
        orderBy: {
          title: 'asc',
        },
        include: {
          employee: {
            include: {
              user: {
                select: {
                  fullName: true,
                  firstName: true,
                  lastName: true,
                },
              },
            },
          },
        },
      });

      return announcements.map((announcement) => ({
        ...announcement,
        attachments: this.safeParseAttachments(announcement.attachments),
      }));
    } catch (error) {
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Data Pengumuman',
      );
    }
  }

  async findOne(id: string) {
    try {
      const announcement = await this.prisma.announcements.findUniqueOrThrow({
        where: { id: id },
        include: {
          employee: {
            include: {
              user: {
                select: {
                  fullName: true,
                  firstName: true,
                  lastName: true,
                },
              },
            },
          },
        },
      });

      return {
        ...announcement,
        attachments: this.safeParseAttachments(announcement.attachments),
      };
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(
          `Pengumuman dengan id: ${id} tidak ditemukan`,
        );
      }
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Data Pengumuman',
      );
    }
  }

  async update(
    id: string,
    updateRequest: UpdateAnnouncementManageDto,
    files?: Express.Multer.File[],
  ) {
    try {
      const existData = await this.prisma.announcements.findUniqueOrThrow({
        where: { id: id },
      });

      let attachmentPaths: string[] = [];

      if (files && files.length > 0) {
        attachmentPaths = this.processFiles(files);

        const oldAttachments = this.safeParseAttachments(existData.attachments);
        for (const oldPath of oldAttachments) {
          GeneralHelper.deleteFile(oldPath);
        }
      } else {
        attachmentPaths = this.safeParseAttachments(existData.attachments);
      }

      return await this.prisma.announcements.update({
        where: { id: id },
        data: {
          title: updateRequest.title ?? existData.title,
          content: updateRequest.content ?? existData.content,
          attachments: attachmentPaths,
          employee: updateRequest.employeeId
            ? {
                connect: { id: updateRequest.employeeId },
              }
            : undefined,
          expiryDate: updateRequest.expiryDate ?? existData.expiryDate,
          publishDate: updateRequest.publishDate ?? existData.publishDate,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(
          `Pengumuman dengan id: ${id} tidak ditemukan`,
        );
      }
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Update Pengumuman',
      );
    }
  }

  async remove(id: string) {
    try {
      const existData = await this.prisma.announcements.findUniqueOrThrow({
        where: { id: id },
      });

      const attachmentPaths = this.safeParseAttachments(existData.attachments);
      for (const filePath of attachmentPaths) {
        GeneralHelper.deleteFile(filePath);
      }

      return await this.prisma.announcements.delete({
        where: { id: id },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(
          `Pengumuman dengan id: ${id} tidak ditemukan`,
        );
      }
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Menghapus Data Pengumuman',
      );
    }
  }

  async getAnnouncementFiles(
    id: string,
  ): Promise<{ path: string; exists: boolean; size: number }[]> {
    try {
      const announcement = await this.prisma.announcements.findUniqueOrThrow({
        where: { id },
        select: { attachments: true },
      });

      const attachmentPaths = this.safeParseAttachments(
        announcement.attachments,
      );

      return attachmentPaths.map((path) => ({
        path,
        exists: GeneralHelper.fileExists(path),
        size: GeneralHelper.getFileSize(path),
      }));
    } catch (error) {
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Info File',
      );
    }
  }
}
