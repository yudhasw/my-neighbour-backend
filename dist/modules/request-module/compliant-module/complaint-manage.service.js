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
exports.ComplaintManageService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../../common/database/database.service");
const library_1 = require("../../../common/database/generated/prisma/runtime/library");
let ComplaintManageService = class ComplaintManageService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRequest) {
        try {
            return await this.prisma.complaints.create({
                data: {
                    title: createRequest.title,
                    description: createRequest.description,
                    category: createRequest.category,
                    employeeId: createRequest.employeeId ?? null,
                    residentId: createRequest.residentId,
                    images: createRequest.images ?? [],
                    resolutionDetails: createRequest.resolutionDetails ?? null,
                    resolvedAt: createRequest.resolvedAt ?? null,
                    unitId: createRequest.unitId ?? null,
                },
            });
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Membuat Data Keluhan');
        }
    }
    async findAll() {
        try {
            return await this.prisma.complaints.findMany({
                orderBy: { submittedAt: 'asc' },
            });
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Keluhan');
        }
    }
    async findOne(id) {
        try {
            return await this.prisma.complaints.findUniqueOrThrow({
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
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Keluhan');
        }
    }
    async update(id, updateRequest) {
        try {
            const existData = await this.prisma.complaints.findUniqueOrThrow({
                where: { id: id },
            });
            if (!existData) {
                throw new common_1.NotFoundException(`Data Keluhan dengan id: ${id} tidak ditemukan`);
            }
            return await this.prisma.complaints.update({
                where: { id: id },
                data: {
                    title: updateRequest.title ?? existData.title,
                    description: updateRequest.description ?? existData.description,
                    category: updateRequest.category ?? existData.category,
                    employeeId: updateRequest.employeeId ?? existData.employeeId,
                    residentId: updateRequest.residentId ?? existData.residentId,
                    images: updateRequest.images ?? [],
                    resolutionDetails: updateRequest.resolutionDetails ?? existData.resolutionDetails,
                    resolvedAt: updateRequest.resolvedAt ?? existData.resolvedAt,
                    unitId: updateRequest.unitId ?? existData.unitId,
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            if (error.name === 'NotFoundError') {
                throw new common_1.NotFoundException(`Keluhan dengan id: ${id} tidak ditemukan`);
            }
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Keluhan dengan id: ${id} tidak ditemukan`);
                }
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Keluhan');
        }
    }
    async remove(id) {
        try {
            const existData = await this.prisma.complaints.findUniqueOrThrow({
                where: { id: id },
            });
            if (!existData) {
                throw new common_1.NotFoundException(`Data Keluhan dengan id: ${id} tidak ditemukan`);
            }
            return await this.prisma.complaints.delete({
                where: { id: id },
            });
        }
        catch (error) {
            if (error.name === 'NotFoundError') {
                throw new common_1.NotFoundException(`Keluhan dengan id: ${id} tidak ditemukan`);
            }
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Keluhan dengan id: ${id} tidak ditemukan`);
                }
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Keluhan');
        }
    }
};
exports.ComplaintManageService = ComplaintManageService;
exports.ComplaintManageService = ComplaintManageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ComplaintManageService);
//# sourceMappingURL=complaint-manage.service.js.map