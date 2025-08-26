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
let ForumPostManageService = class ForumPostManageService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRequest) {
        try {
            return await this.prisma.forumPosts.create({
                data: {
                    title: createRequest.title,
                    content: createRequest.content,
                    authorRole: createRequest.authorRole,
                    attachments: createRequest.attachments,
                    user: { connect: { id: createRequest.userId } },
                    tags: {
                        connectOrCreate: {
                            create: {
                                tagName: createRequest.tagName,
                            },
                            where: {
                                id: createRequest.tagId,
                            },
                        },
                    },
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
            return await this.prisma.forumPosts.findMany({
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
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Postingan forum');
        }
    }
    async findOne(id) {
        try {
            return await this.prisma.forumPosts.findUniqueOrThrow({
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
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Data Postingan forum');
        }
    }
    async update(id, updateRequest) {
        try {
            const existData = await this.prisma.forumPosts.findUniqueOrThrow({
                where: { id: id },
            });
            if (!existData) {
                throw new common_1.NotFoundException(`Pengguna Aplikasi dengan id: ${id} tidak ditemukan`);
            }
            return await this.prisma.forumPosts.update({
                where: { id: id },
                data: {
                    title: updateRequest.title,
                    content: updateRequest.content,
                    authorRole: updateRequest.authorRole,
                    attachments: updateRequest.attachments,
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