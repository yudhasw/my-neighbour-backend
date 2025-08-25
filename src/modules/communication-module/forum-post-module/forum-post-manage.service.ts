import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateForumPostManageDto } from '../../../dtos/requests/create/create-forum-post-manage.dto';
import { UpdateForumPostManageDto } from '../../../dtos/requests/update/update-forum-post-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
import { PrismaClientKnownRequestError } from '../../../common/database/generated/prisma/runtime/library';

@Injectable()
export class ForumPostManageService {
  constructor(private readonly prisma: DatabaseService) {}
  async create(createRequest: CreateForumPostManageDto) {
    try {
      return await this.prisma.forumPosts.create({
        data: {
          title: createRequest.title,
          content: createRequest.content,
          authorRole: createRequest.authorRole,
          attachments: createRequest.attachments,
          user: { connect: { id: createRequest.userId } },
          tags: {
            connectOrCreate: {
              create: {
                tagName: createRequest.tagName,
              },
              where: {
                id: createRequest.tagId,
              },
            },
          },
        },
      });
    } catch (error) {
      if ((error as Error).name === 'NotFoundError') {
        throw new NotFoundException(
          `Postingan forum dengan id: ${createRequest.tagId} tidak ditemukan`,
        );
      }

      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Postingan forum dengan id: ${createRequest.tagId} tidak ditemukan`,
          );
        }
      }
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Membuat Data Postingan forum',
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.forumPosts.findMany({
        include: {
          _count: { select: { comments: true, tags: true } },
          user: {
            select: {
              fullName: true,
              firstName: true,
              lastName: true,
              role: true,
              username: true,
            },
          },
        },
        orderBy: {
          title: 'asc',
        },
      });
    } catch (error) {
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Data Postingan forum',
      );
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.forumPosts.findUniqueOrThrow({
        where: { id: id },
        include: {
          comments: true,
          tags: true,
          user: {
            select: {
              fullName: true,
              firstName: true,
              lastName: true,
              role: true,
              username: true,
            },
          },
        },
      });
    } catch (error) {
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Data Postingan forum',
      );
    }
  }

  async update(id: string, updateRequest: UpdateForumPostManageDto) {
    try {
      const existData = await this.prisma.forumPosts.findUnique({
        where: { id: id },
      });

      if (!existData) {
        throw new NotFoundException(
          `Pengguna Aplikasi dengan id: ${id} tidak ditemukan`,
        );
      }

      return await this.prisma.forumPosts.update({
        where: { id: id },
        data: {
          title: updateRequest.title,
          content: updateRequest.content,
          authorRole: updateRequest.authorRole,
          attachments: updateRequest.attachments,
          user: existData.userId
            ? { connect: { id: updateRequest.userId } }
            : undefined,
          tags: { connect: { id: updateRequest.tagId } },
        },
      });
    } catch (error) {
      if ((error as Error).name === 'NotFoundError') {
        throw new NotFoundException(
          `Postingan forum dengan id: ${id} tidak ditemukan`,
        );
      }

      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Postingan forum dengan id: ${id} tidak ditemukan`,
          );
        }
      }

      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Postingan forum',
      );
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.forumPosts.delete({
        where: { id: id },
      });
    } catch (error) {
      if ((error as Error).name === 'NotFoundError') {
        throw new NotFoundException(
          `Postingan forum dengan id: ${id} tidak ditemukan`,
        );
      }

      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Postingan forum dengan id: ${id} tidak ditemukan`,
          );
        }
      }

      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Postingan forum',
      );
    }
  }
}
