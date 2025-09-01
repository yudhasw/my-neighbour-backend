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
const generalHelper_1 = require("../../../common/helper/generalHelper");
let AnnouncementManageService = class AnnouncementManageService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    processFiles(files) {
        if (!files || files.length === 0)
            return [];
        return files.map((file) => {
            const folderPath = generalHelper_1.GeneralHelper.getFolderExtension(file.mimetype);
            return `${folderPath}/${file.filename}`;
        });
    }
    safeParseAttachments(attachments) {
        if (!attachments)
            return [];
        if (Array.isArray(attachments)) {
            return attachments
                .map((item) => (typeof item === 'string' ? item : item.path || ''))
                .filter(Boolean);
        }
        if (typeof attachments === 'string') {
            try {
                const parsed = JSON.parse(attachments);
                if (Array.isArray(parsed)) {
                    return parsed
                        .map((item) => (typeof item === 'string' ? item : item.path || ''))
                        .filter(Boolean);
                }
            }
            catch (error) {
                console.error('Error parsing attachments JSON:', error);
            }
        }
        return [];
    }
    async create(createRequest, files) {
        try {
            const attachmentPaths = this.processFiles(files);
            return await this.prisma.announcements.create({
                data: {
                    title: createRequest.title,
                    content: createRequest.content,
                    attachments: attachmentPaths,
                    employee: { connect: { id: createRequest.employeeId } },
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
            const announcements = await this.prisma.announcements.findMany({
                orderBy: {
                    title: 'asc',
                },
                include: {
                    employee: {
                        include: {
                            user: {
                                select: {
                                    fullName: true,
                                    firstName: true,
                                    lastName: true,
                                },
                            },
                        },
                    },
                },
            });
            return announcements.map((announcement) => ({
                ...announcement,
                attachments: this.safeParseAttachments(announcement.attachments),
            }));
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Pengumuman');
        }
    }
    async findOne(id) {
        try {
            const announcement = await this.prisma.announcements.findUniqueOrThrow({
                where: { id: id },
                include: {
                    employee: {
                        include: {
                            user: {
                                select: {
                                    fullName: true,
                                    firstName: true,
                                    lastName: true,
                                },
                            },
                        },
                    },
                },
            });
            return {
                ...announcement,
                attachments: this.safeParseAttachments(announcement.attachments),
            };
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException(`Pengumuman dengan id: ${id} tidak ditemukan`);
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Pengumuman');
        }
    }
    async update(id, updateRequest, files) {
        try {
            const existData = await this.prisma.announcements.findUniqueOrThrow({
                where: { id: id },
            });
            let attachmentPaths = [];
            if (files && files.length > 0) {
                attachmentPaths = this.processFiles(files);
                const oldAttachments = this.safeParseAttachments(existData.attachments);
                for (const oldPath of oldAttachments) {
                    generalHelper_1.GeneralHelper.deleteFile(oldPath);
                }
            }
            else {
                attachmentPaths = this.safeParseAttachments(existData.attachments);
            }
            return await this.prisma.announcements.update({
                where: { id: id },
                data: {
                    title: updateRequest.title ?? existData.title,
                    content: updateRequest.content ?? existData.content,
                    attachments: attachmentPaths,
                    employee: updateRequest.employeeId
                        ? {
                            connect: { id: updateRequest.employeeId },
                        }
                        : undefined,
                    expiryDate: updateRequest.expiryDate ?? existData.expiryDate,
                    publishDate: updateRequest.publishDate ?? existData.publishDate,
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException(`Pengumuman dengan id: ${id} tidak ditemukan`);
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Update Pengumuman');
        }
    }
    async remove(id) {
        try {
            const existData = await this.prisma.announcements.findUniqueOrThrow({
                where: { id: id },
            });
            const attachmentPaths = this.safeParseAttachments(existData.attachments);
            for (const filePath of attachmentPaths) {
                generalHelper_1.GeneralHelper.deleteFile(filePath);
            }
            return await this.prisma.announcements.delete({
                where: { id: id },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException(`Pengumuman dengan id: ${id} tidak ditemukan`);
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Menghapus Data Pengumuman');
        }
    }
    async getAnnouncementFiles(id) {
        try {
            const announcement = await this.prisma.announcements.findUniqueOrThrow({
                where: { id },
                select: { attachments: true },
            });
            const attachmentPaths = this.safeParseAttachments(announcement.attachments);
            return attachmentPaths.map((path) => ({
                path,
                exists: generalHelper_1.GeneralHelper.fileExists(path),
                size: generalHelper_1.GeneralHelper.getFileSize(path),
            }));
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Info File');
        }
    }
};
exports.AnnouncementManageService = AnnouncementManageService;
exports.AnnouncementManageService = AnnouncementManageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AnnouncementManageService);
//# sourceMappingURL=announcement-manage.service.js.map