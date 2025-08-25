import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAnnouncementManageDto } from '../../../dtos/requests/create/create-announcement-manage.dto';
import { UpdateAnnouncementManageDto } from '../../../dtos/requests/update/update-announcement-manage.dto';
import { DatabaseService } from 'src/common/database/database.service';
import { PrismaClientKnownRequestError } from '../../../common/database/generated/prisma/runtime/library';
@Injectable()
export class AnnouncementManageService {
  constructor(private readonly prisma: DatabaseService) {}
  async create(createRequest: CreateAnnouncementManageDto) {
    try {
      return await this.prisma.announcements.create({
        data: {
          title: createRequest.title,
          content: createRequest.content,
          attachments: createRequest.attachments,
          employee: { connect: { employeeId: createRequest.employeeId } },
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
      return await this.prisma.announcements.findMany({
        orderBy: {
          title: 'asc',
        },
      });
    } catch (error) {
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Data Pengumuman',
      );
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.announcements.findUniqueOrThrow({
        where: { id: id },
        include: {
          employee: {
            select: {
              employeeNumberId: true,
              employeePosition: true,
            },
            include: {
              user: {
                select: {
                  fullName: true,
                  firstName: true,
                  lastName: true,
                  contactNumber: true,
                  username: true,
                },
              },
            },
          },
        },
      });
    } catch (error) {
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Data Pengumuman',
      );
    }
  }

  async update(id: string, updateRequest: UpdateAnnouncementManageDto) {
    try {
      const existData = await this.prisma.announcements.findUniqueOrThrow({
        where: { id: id },
      });

      if (!existData) {
        throw new NotFoundException(
          `Data Pengumuman dengan id: ${id} tidak ditemukan`,
        );
      }

      return await this.prisma.announcements.update({
        where: { id: id },
        data: {
          title: updateRequest.title ?? existData.title,
          content: updateRequest.content ?? existData.content,
          attachments: updateRequest.attachments ?? existData.attachments,
          employee: {
            connect: {
              employeeId: updateRequest.employeeId ?? existData.employeeId,
            },
          },
          expiryDate: updateRequest.expiryDate ?? existData.expiryDate,
          publishDate: updateRequest.publishDate ?? existData.publishDate,
        },
      });
    } catch (error) {
      if ((error as Error).name === 'NotFoundError') {
        throw new NotFoundException(
          `Pengumuman dengan id: ${id} tidak ditemukan`,
        );
      }

      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Pengumuman dengan id: ${id} tidak ditemukan`,
          );
        }
      }

      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Pengumuman',
      );
    }
  }

  async remove(id: string) {
    try {
      const existData = await this.prisma.announcements.findUniqueOrThrow({
        where: { id: id },
      });

      if (!existData) {
        throw new NotFoundException(
          `Data Pengumuman dengan id: ${id} tidak ditemukan`,
        );
      }

      return await this.prisma.announcements.delete({
        where: { id: id },
      });
    } catch (error) {
      if ((error as Error).name === 'NotFoundError') {
        throw new NotFoundException(
          `Pengumuman dengan id: ${id} tidak ditemukan`,
        );
      }

      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Pengumuman dengan id: ${id} tidak ditemukan`,
          );
        }
      }

      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Menghapus Data Pengumuman',
      );
    }
  }
}
