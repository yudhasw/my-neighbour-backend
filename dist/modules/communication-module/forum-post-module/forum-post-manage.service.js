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
exports.ForumPostManageService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../../common/database/database.service");
const library_1 = require("../../../common/database/generated/prisma/runtime/library");
const uploads_service_1 = require("../../../common/helper/uploads/uploads.service");
const generalHelper_1 = require("../../../common/helper/generalHelper");
let ForumPostManageService = class ForumPostManageService extends uploads_service_1.UploadsService {
    prisma;
    constructor(prisma) {
        super();
        this.prisma = prisma;
    }
    async create(createRequest, files) {
        try {
            const filesPath = this.processFiles(files);
            const user = await this.prisma.users.findUnique({
                where: { id: createRequest.userId },
            });
            return await this.prisma.forumPosts.create({
                data: {
                    title: createRequest.title,
                    content: createRequest.content,
                    authorRole: user?.role || createRequest.authorRole,
                    attachments: filesPath,
                    user: { connect: { id: createRequest.userId } },
                    tags: {
                        connectOrCreate: {
                            create: {
                                tagName: createRequest.tagName,
                            },
                            where: {
                                id: createRequest.tagId || undefined,
                                tagName: createRequest.tagName,
                            },
                        },
                    },
                },
                include: {
                    tags: true,
                },
            });
        }
        catch (error) {
            if (error.name === 'NotFoundError') {
                throw new common_1.NotFoundException(`Postingan forum dengan id: ${createRequest.tagId} tidak ditemukan`);
            }
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Postingan forum dengan id: ${createRequest.tagId} tidak ditemukan`);
                }
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Membuat Data Postingan forum');
        }
    }
    async findAll() {
        try {
            const forumPostData = await this.prisma.forumPosts.findMany({
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
            return forumPostData.map((data) => ({
                ...data,
                attachments: this.safeParseAttachments(data.attachments),
            }));
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Postingan forum');
        }
    }
    async findOne(id) {
        try {
            const forumPostData = await this.prisma.forumPosts.findUniqueOrThrow({
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
            return {
                ...forumPostData,
                attachments: this.safeParseAttachments(forumPostData.attachments),
            };
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Postingan forum');
        }
    }
    async update(id, updateRequest, files) {
        try {
            const existData = await this.prisma.forumPosts.findUniqueOrThrow({
                where: { id: id },
            });
            let filesPath = [];
            if (files && files.length > 0) {
                filesPath = this.processFiles(files);
                const oldAttachments = this.safeParseAttachments(existData.attachments);
                for (const oldPath of oldAttachments) {
                    generalHelper_1.GeneralHelper.deleteFile(oldPath);
                }
            }
            else {
                filesPath = this.safeParseAttachments(existData.attachments);
            }
            return await this.prisma.forumPosts.update({
                where: { id: id },
                data: {
                    title: updateRequest.title ?? existData.title,
                    content: updateRequest.content ?? existData.content,
                    authorRole: updateRequest.authorRole ?? existData.authorRole,
                    attachments: filesPath ?? existData.attachments,
                    user: existData.userId
                        ? { connect: { id: updateRequest.userId } }
                        : undefined,
                    tags: { connect: { id: updateRequest.tagId } },
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            if (error.name === 'NotFoundError') {
                throw new common_1.NotFoundException(`Postingan forum dengan id: ${id} tidak ditemukan`);
            }
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Postingan forum dengan id: ${id} tidak ditemukan`);
                }
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Postingan forum');
        }
    }
    async remove(id) {
        try {
            const existData = await this.prisma.forumPosts.findUniqueOrThrow({
                where: { id: id },
            });
            const attachmentPaths = this.safeParseAttachments(existData.attachments);
            for (const filePath of attachmentPaths) {
                generalHelper_1.GeneralHelper.deleteFile(filePath);
            }
            return await this.prisma.forumPosts.delete({
                where: { id: id },
            });
        }
        catch (error) {
            if (error.name === 'NotFoundError') {
                throw new common_1.NotFoundException(`Postingan forum dengan id: ${id} tidak ditemukan`);
            }
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Postingan forum dengan id: ${id} tidak ditemukan`);
                }
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Postingan forum');
        }
    }
};
exports.ForumPostManageService = ForumPostManageService;
exports.ForumPostManageService = ForumPostManageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ForumPostManageService);
//# sourceMappingURL=forum-post-manage.service.js.map