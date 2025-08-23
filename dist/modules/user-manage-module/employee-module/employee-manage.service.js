"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManageService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../../common/database/database.service");
const generalHelper_1 = require("../../../common/helper/generalHelper");
const library_1 = require("../../../common/database/generated/prisma/runtime/library");
let EmployeeManageService = class EmployeeManageService {
    prisma;
    helper;
    constructor(prisma, helper) {
        this.prisma = prisma;
        this.helper = helper;
    }
    async create(createRequest) {
        try {
            return await this.prisma.employees.create({
                data: {
                    employeeId: createRequest.employeeId,
                    employeeNumberId: createRequest.employeeNumberId,
                    hireDate: createRequest.hireDate,
                    salary: this.helper.twoDecimal(createRequest.salary),
                    workingHours: createRequest.workingHours,
                    employeePosition: createRequest.employeePosition,
                    bonus: this.helper.twoDecimal(createRequest.bonus) ?? null,
                },
            });
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Membuat Data Pegawai');
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
                    employeeNumberId: 'asc',
                },
            });
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Pegawai');
        }
    }
    async findOne(id) {
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
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Pegawai');
        }
    }
    async update(id, updateRequest) {
        try {
            const existData = await this.prisma.employees.findUnique({
                where: { employeeId: id },
            });
            if (!existData) {
                throw new common_1.NotFoundException(`Pegawai dengan id: ${id} tidak ditemukan`);
            }
            const updatedData = this.prisma.employees.update({
                where: { employeeId: id },
                data: {
                    employeeNumberId: updateRequest.employeeNumberId ?? existData?.employeeNumberId,
                    hireDate: updateRequest.hireDate,
                    salary: this.helper.twoDecimal(updateRequest.salary) ?? existData?.salary,
                    workingHours: updateRequest.workingHours ?? existData?.workingHours,
                    employeePosition: updateRequest.employeePosition ?? existData?.employeePosition,
                    bonus: this.helper.twoDecimal(updateRequest.bonus) ?? existData?.bonus,
                    updatedAt: new Date(),
                },
            });
            return updatedData;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Pegawai dengan id: ${id} tidak ditemukan`);
                }
            }
            console.error(error.message, error.cause);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Pegawai');
        }
    }
    async remove(id) {
        try {
            const existData = await this.prisma.employees.findUnique({
                where: { employeeId: id },
            });
            if (!existData) {
                throw new common_1.NotFoundException(`Pegawai dengan id: ${id} tidak ditemukan`);
            }
            return await this.prisma.employees.delete({
                where: { employeeId: id },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Pegawai dengan id: ${id} tidak ditemukan`);
                }
            }
            console.error(error.message, error.cause);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Pegawai');
        }
    }
};
exports.EmployeeManageService = EmployeeManageService;
exports.EmployeeManageService = EmployeeManageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        generalHelper_1.GeneralHelper])
], EmployeeManageService);
//# sourceMappingURL=employee-manage.service.js.map