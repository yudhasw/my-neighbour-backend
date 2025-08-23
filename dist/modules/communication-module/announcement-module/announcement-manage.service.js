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
exports.AnnouncementManageService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../../common/database/database.service");
const library_1 = require("../../../common/database/generated/prisma/runtime/library");
let AnnouncementManageService = class AnnouncementManageService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRequest) {
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
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Membuat Data Pengumuman');
        }
    }
    async findAll() {
        try {
            return await this.prisma.announcements.findMany();
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Pengumuman');
        }
    }
    async findOne(id) {
        try {
            return await this.prisma.announcements.findUniqueOrThrow({
                where: { id: id },
            });
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Pengumuman');
        }
    }
    async update(id, updateRequest) {
        try {
            const existData = await this.prisma.announcements.findUniqueOrThrow({
                where: { id: id },
            });
            if (!existData) {
                throw new common_1.NotFoundException(`Pengguna Aplikasi dengan id: ${id} tidak ditemukan`);
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
        }
        catch (error) {
            if (error.name === 'NotFoundError') {
                throw new common_1.NotFoundException(`Pengumuman dengan id: ${id} tidak ditemukan`);
            }
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Pengumuman dengan id: ${id} tidak ditemukan`);
                }
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Pengumuman');
        }
    }
    async remove(id) {
        try {
            const existData = await this.prisma.announcements.findUniqueOrThrow({
                where: { id: id },
            });
            if (!existData) {
                throw new common_1.NotFoundException(`Pengguna Aplikasi dengan id: ${id} tidak ditemukan`);
            }
            return await this.prisma.announcements.delete({
                where: { id: id },
            });
        }
        catch (error) {
            if (error.name === 'NotFoundError') {
                throw new common_1.NotFoundException(`Pengumuman dengan id: ${id} tidak ditemukan`);
            }
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Pengumuman dengan id: ${id} tidak ditemukan`);
                }
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Menghapus Data Pengumuman');
        }
    }
};
exports.AnnouncementManageService = AnnouncementManageService;
exports.AnnouncementManageService = AnnouncementManageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AnnouncementManageService);
//# sourceMappingURL=announcement-manage.service.js.map