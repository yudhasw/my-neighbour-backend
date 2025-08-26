import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateMaintananceRequestManageDto } from '../../../dtos/requests/create/create-maintanance-request-manage.dto';
import { UpdateMaintananceRequestManageDto } from '../../../dtos/requests/update/update-maintanance-request-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
import { PrismaClientKnownRequestError } from 'src/common/database/generated/prisma/runtime/library';

@Injectable()
export class MaintananceRequestManageService {
  constructor(private readonly prisma: DatabaseService) {}
  async create(createRequest: CreateMaintananceRequestManageDto) {
    try {
      return await this.prisma.maintenanceRequests.create({
        data: {
          title: createRequest.title,
          description: createRequest.description,
          priority: createRequest.priority ?? null,
          status: createRequest.status,
          assignedToEmployeeId: createRequest.assignedToEmployeeId ?? null,
          residentId: createRequest.residentId,
          unitId: createRequest.unitId,
          requestDate: createRequest.requestDate,
        },
      });
    } catch (error) {
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Membuat Data Keluhan',
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.maintenanceRequests.findMany({
        orderBy: {
          requestDate: 'asc',
        },
      });
    } catch (error) {
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Data Keluhan',
      );
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.maintenanceRequests.findUniqueOrThrow({
        where: { id: id },
        include: {
          assignedTo: {
            select: {
              employeeNumberId: true,
              employeePosition: true,
            },
            include: {
              user: {
                select: {
                  id: true,
                  fullName: true,
                  firstName: true,
                  lastName: true,
                  username: true,
                },
              },
            },
          },
          resident: {
            include: {
              user: {
                select: {
                  id: true,
                  fullName: true,
                  firstName: true,
                  lastName: true,
                  username: true,
                },
              },
              unit: {
                select: {
                  buildingName: true,
                  location: true,
                  unitNumber: true,
                  status: true,
                },
              },
            },
          },
        },
      });
    } catch (error) {
      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Data Keluhan',
      );
    }
  }

  async update(id: string, updateRequest: UpdateMaintananceRequestManageDto) {
    try {
      const existData = await this.prisma.maintenanceRequests.findUniqueOrThrow(
        {
          where: { id: id },
        },
      );

      if (!existData) {
        throw new NotFoundException(
          `Data Keluhan dengan id: ${id} tidak ditemukan`,
        );
      }

      return await this.prisma.maintenanceRequests.update({
        where: { id: id },
        data: {
          title: updateRequest.title ?? existData.title,
          description: updateRequest.description ?? existData.description,
          priority: updateRequest.priority ?? existData.priority,
          status: updateRequest.status ?? existData.status,
          assignedToEmployeeId:
            updateRequest.assignedToEmployeeId ??
            existData.assignedToEmployeeId,
          residentId: updateRequest.residentId ?? existData.residentId,
          unitId: updateRequest.unitId ?? existData.unitId,
          requestDate: updateRequest.requestDate ?? existData.requestDate,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      if ((error as Error).name === 'NotFoundError') {
        throw new NotFoundException(`Keluhan dengan id: ${id} tidak ditemukan`);
      }

      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Keluhan dengan id: ${id} tidak ditemukan`,
          );
        }
      }

      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Keluhan',
      );
    }
  }

  async remove(id: string) {
    try {
      const existData = await this.prisma.maintenanceRequests.findUniqueOrThrow(
        {
          where: { id: id },
        },
      );

      if (!existData) {
        throw new NotFoundException(
          `Data Keluhan dengan id: ${id} tidak ditemukan`,
        );
      }

      return await this.prisma.maintenanceRequests.delete({
        where: { id: id },
      });
    } catch (error) {
      if ((error as Error).name === 'NotFoundError') {
        throw new NotFoundException(`Keluhan dengan id: ${id} tidak ditemukan`);
      }

      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Keluhan dengan id: ${id} tidak ditemukan`,
          );
        }
      }

      console.error((error as Error).message);
      throw new InternalServerErrorException(
        'Terjadi Kesalahan Saat Mendapatkan Keluhan',
      );
    }
  }
}
