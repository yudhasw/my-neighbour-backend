import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateResidentManageDto } from '../../../dtos/requests/create/create-resident-manage.dto';
import { UpdateResidentManageDto } from '../../../dtos/requests/update/update-resident-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
import { PrismaClientKnownRequestError } from '../../../common/database/generated/prisma/runtime/library';

@Injectable()
export class ResidentManageService {
  constructor(private readonly prisma: DatabaseService) {}
  async create(createRequest: CreateResidentManageDto) {
    try {
      return await this.prisma.residents.create({
        data: {
          residentId: createRequest.residentId,
          emergencyContactName: createRequest.emergencyContactName,
          emergencyContactNumber: createRequest.emergencyContactNumber,
          movedInDate: createRequest.movedInDate,
          movedOutDate: createRequest.movedOutDate,
          residentStatus: createRequest.residentStatus,
          unitId: createRequest.unitId,
        },
      });
    } catch (error) {
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Membuat Data Pengguna Aplikasi',
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.residents.findMany({
        include: {
          _count: { select: { Complaints: true, payments: true } },
          user: {
            select: {
              fullName: true,
              firstName: true,
              lastName: true,
              contactNumber: true,
              dateOfBirth: true,
              gender: true,
              primaryEmail: true,
            },
          },
        },
        orderBy: { user: { fullName: 'asc' } },
      });
    } catch (error) {
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Data Pengguna Aplikasi',
      );
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.residents.findUniqueOrThrow({
        where: { residentId: id },
        include: {
          _count: { select: { Complaints: true, payments: true } },
          user: {
            select: {
              fullName: true,
              firstName: true,
              lastName: true,
              contactNumber: true,
              dateOfBirth: true,
              gender: true,
              primaryEmail: true,
            },
          },
          payments: {
            select: {
              amount: true,
              paymentFor: true,
              paymentMethod: true,
              paymentDate: true,
              description: true,
            },
            orderBy: {
              paymentDate: 'asc',
            },
          },
        },
      });
    } catch (error) {
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Data Pengguna Aplikasi',
      );
    }
  }

  async update(id: string, updateRequest: UpdateResidentManageDto) {
    try {
      const existData = await this.prisma.residents.findUnique({
        where: { residentId: id },
      });

      if (!existData) {
        throw new NotFoundException(
          `Resident dengan id: ${id} tidak ditemukan`,
        );
      }

      const updatedData = await this.prisma.residents.update({
        where: { residentId: id },
        data: {
          emergencyContactName:
            updateRequest.emergencyContactName ??
            existData.emergencyContactName,
          emergencyContactNumber:
            updateRequest.emergencyContactNumber ??
            existData.emergencyContactNumber,
          movedInDate: updateRequest.movedInDate ?? existData.movedInDate,
          movedOutDate: updateRequest.movedOutDate ?? existData.movedOutDate,
          residentStatus:
            updateRequest.residentStatus ?? existData.residentStatus,
          unitId: updateRequest.unitId ?? existData.unitId,
          updatedAt: new Date(),
        },
      });

      return updatedData;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Resident dengan id: ${id} tidak ditemukan`,
          );
        }
      }
      console.error((error as Error).message, (error as Error).cause);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Data Pengguna Aplikasi', // Perbaiki pesan error
      );
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.residents.findUnique({
        where: { residentId: id },
      });

      return await this.prisma.residents.delete({
        where: { residentId: id },
      });
    } catch (error) {
      if ((error as Error).name === 'NotFoundError') {
        throw new NotFoundException(
          `Pengguna aplikasi dengan id: ${id} tidak ditemukan`,
        );
      }
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Menghapus Data Pengguna Aplikasi',
      );
    }
  }
}
