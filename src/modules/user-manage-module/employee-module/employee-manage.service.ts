import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmployeeManageDto } from '../../../dtos/requests/create/create-employee-manage.dto';
import { UpdateEmployeeManageDto } from '../../../dtos/requests/update/update-employee-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
import { GeneralHelper } from 'src/common/helper/generalHelper';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class EmployeeManageService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly helper: GeneralHelper,
  ) {}
  async create(createRequest: CreateEmployeeManageDto) {
    try {
      return await this.prisma.employees.create({
        data: {
          employeeId: createRequest.employeeId,
          employeeIdNumber: createRequest.employeeNumberId,
          hireDate: createRequest.hireDate,
          salary: this.helper.twoDecimal(createRequest.salary),
          workingHours: createRequest.workingHours,
          employeePosition: createRequest.employeePosition,
          bonus: this.helper.twoDecimal(createRequest.bonus) ?? null,
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
      return await this.prisma.employees.findMany({
        include: {
          _count: {
            select: {
              Announcements: true,
              MaintenanceRequests: true,
              Payments: true,
            },
          },
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
        orderBy: {
          employeeIdNumber: 'asc',
        },
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
      return await this.prisma.employees.findUniqueOrThrow({
        where: { employeeId: id },
        include: {
          _count: {
            select: {
              Announcements: true,
              MaintenanceRequests: true,
              Payments: true,
            },
          },
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
          Complaint: {
            select: {
              name: true,
              desciption: true,
              status: true,
              submittedAt: true,
              resolvedAt: true,
              resolutionDetails: true,
            },
          },
          MaintenanceRequests: {
            select: {
              title: true,
              priority: true,
              description: true,
              status: true,
            },
          },
          Announcements: {
            select: {
              title: true,
              body: true,
              content: true,
              publishDate: true,
              expiryDate: true,
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

  async update(id: string, updateRequest: UpdateEmployeeManageDto) {
    try {
      const existData = await this.prisma.employees.findUnique({
        where: { employeeId: id },
      });

      if (!existData) {
        throw new NotFoundException(
          `Resident dengan id: ${id} tidak ditemukan`,
        );
      }

      const updatedData = this.prisma.employees.update({
        where: { employeeId: id },
        data: {
          employeeIdNumber:
            updateRequest.employeeNumberId ?? existData?.employeeIdNumber,
          hireDate: updateRequest.hireDate,
          salary:
            this.helper.twoDecimal(updateRequest.salary!) ?? existData?.salary,
          workingHours: updateRequest.workingHours ?? existData?.workingHours,
          employeePosition:
            updateRequest.employeePosition ?? existData?.employeePosition,
          bonus:
            this.helper.twoDecimal(updateRequest.bonus!) ?? existData?.bonus,
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
      const existData = await this.prisma.employees.findUnique({
        where: { employeeId: id },
      });

      if (!existData) {
        throw new NotFoundException(
          `Resident dengan id: ${id} tidak ditemukan`,
        );
      }

      return await this.prisma.employees.delete({
        where: { employeeId: id },
      });
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
}
