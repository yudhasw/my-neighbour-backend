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
exports.MaintananceRequestManageService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../../common/database/database.service");
const library_1 = require("../../../common/database/generated/prisma/runtime/library");
let MaintananceRequestManageService = class MaintananceRequestManageService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRequest) {
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
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Membuat Data Keluhan');
        }
    }
    async findAll() {
        try {
            return await this.prisma.maintenanceRequests.findMany({
                orderBy: {
                    requestDate: 'asc',
                },
            });
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Keluhan');
        }
    }
    async findOne(id) {
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
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Keluhan');
        }
    }
    async update(id, updateRequest) {
        try {
            const existData = await this.prisma.maintenanceRequests.findUniqueOrThrow({
                where: { id: id },
            });
            if (!existData) {
                throw new common_1.NotFoundException(`Data Keluhan dengan id: ${id} tidak ditemukan`);
            }
            return await this.prisma.maintenanceRequests.update({
                where: { id: id },
                data: {
                    title: updateRequest.title ?? existData.title,
                    description: updateRequest.description ?? existData.description,
                    priority: updateRequest.priority ?? existData.priority,
                    status: updateRequest.status ?? existData.status,
                    assignedToEmployeeId: updateRequest.assignedToEmployeeId ??
                        existData.assignedToEmployeeId,
                    residentId: updateRequest.residentId ?? existData.residentId,
                    unitId: updateRequest.unitId ?? existData.unitId,
                    requestDate: updateRequest.requestDate ?? existData.requestDate,
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
            const existData = await this.prisma.maintenanceRequests.findUniqueOrThrow({
                where: { id: id },
            });
            if (!existData) {
                throw new common_1.NotFoundException(`Data Keluhan dengan id: ${id} tidak ditemukan`);
            }
            return await this.prisma.maintenanceRequests.delete({
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
exports.MaintananceRequestManageService = MaintananceRequestManageService;
exports.MaintananceRequestManageService = MaintananceRequestManageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], MaintananceRequestManageService);
//# sourceMappingURL=maintanance-request-manage.service.js.map