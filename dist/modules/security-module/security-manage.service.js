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
exports.SecurityManageService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../common/database/database.service");
const library_1 = require("../../common/database/generated/prisma/runtime/library");
let SecurityManageService = class SecurityManageService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRequest) {
        try {
            return await this.prisma.securityReports.create({
                data: {
                    title: createRequest.title,
                    description: createRequest.description,
                    incidentDate: createRequest.incidentDate,
                    location: createRequest.location,
                    status: createRequest.status,
                    employee: { connect: { id: createRequest.employeeId } },
                },
            });
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Membuat Data Laporan Keamanan');
        }
    }
    async findAll() {
        try {
            return await this.prisma.securityReports.findMany({
                include: {
                    employee: {
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
                orderBy: {
                    title: 'asc',
                },
            });
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Laporan Keamanan');
        }
    }
    async findOne(id) {
        try {
            return await this.prisma.securityReports.findUniqueOrThrow({
                where: { id: id },
                include: {
                    employee: {
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
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Laporan Keamanan');
        }
    }
    async update(id, updateRequest) {
        try {
            const existData = await this.prisma.securityReports.findUniqueOrThrow({
                where: { id: id },
            });
            if (!existData) {
                throw new common_1.NotFoundException(`Data Laporan Keamanan dengan id: ${id} tidak ditemukan`);
            }
            return await this.prisma.securityReports.update({
                where: { id: id },
                data: {
                    title: updateRequest.title,
                    description: updateRequest.description,
                    incidentDate: updateRequest.incidentDate,
                    location: updateRequest.location,
                    status: updateRequest.status,
                    employee: { connect: { id: updateRequest.employeeId } },
                },
            });
        }
        catch (error) {
            if (error.name === 'NotFoundError') {
                throw new common_1.NotFoundException(`Laporan Keamanan dengan id: ${id} tidak ditemukan`);
            }
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Laporan Keamanan dengan id: ${id} tidak ditemukan`);
                }
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Laporan Keamanan');
        }
    }
    async remove(id) {
        try {
            return await this.prisma.securityReports.delete({
                where: { id: id },
            });
        }
        catch (error) {
            if (error.name === 'NotFoundError') {
                throw new common_1.NotFoundException(`Laporan Keamanan dengan id: ${id} tidak ditemukan`);
            }
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Laporan Keamanan dengan id: ${id} tidak ditemukan`);
                }
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Laporan Keamanan');
        }
    }
};
exports.SecurityManageService = SecurityManageService;
exports.SecurityManageService = SecurityManageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], SecurityManageService);
//# sourceMappingURL=security-manage.service.js.map