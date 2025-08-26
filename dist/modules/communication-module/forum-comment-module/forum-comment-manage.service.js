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
exports.ForumCommentManageService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../../common/database/database.service");
const library_1 = require("../../../common/database/generated/prisma/runtime/library");
let ForumCommentManageService = class ForumCommentManageService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRequest) {
        try {
            return await this.prisma.forumComments.create({
                data: {
                    content: createRequest.content,
                    postId: createRequest.postId,
                    userId: createRequest.userId,
                },
            });
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Membuat Data Comment post ');
        }
    }
    async findAll() {
        try {
            return await this.prisma.forumComments.findMany({
                include: {
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
                    createdAt: 'asc',
                },
            });
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Membuat Data Comment post ');
        }
    }
    async findOne(id) {
        try {
            return await this.prisma.forumComments.findUniqueOrThrow({
                where: { id: id },
                include: {
                    user: {
                        select: {
                            fullName: true,
                            firstName: true,
                            lastName: true,
                            role: true,
                            username: true,
                        },
                    },
                    post: {
                        select: {
                            title: true,
                            content: true,
                            attachments: true,
                            tags: true,
                        },
                    },
                },
            });
        }
        catch (error) {
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Membuat Data Comment post ');
        }
    }
    async update(id, updateRequest) {
        try {
            const existData = await this.prisma.forumComments.findUniqueOrThrow({
                where: { id: id },
            });
            if (!existData) {
                throw new common_1.NotFoundException(`Data Comment post  dengan id: ${id} tidak ditemukan`);
            }
            return await this.prisma.forumComments.update({
                where: { id: id },
                data: {
                    content: updateRequest.content,
                    postId: updateRequest.postId,
                    userId: updateRequest.userId,
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            if (error.name === 'NotFoundError') {
                throw new common_1.NotFoundException(`Comment post  dengan id: ${id} tidak ditemukan`);
            }
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Comment post  dengan id: ${id} tidak ditemukan`);
                }
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Comment post ');
        }
    }
    async remove(id) {
        try {
            const existData = await this.prisma.forumComments.findUnique({
                where: { id: id },
            });
            if (!existData) {
                throw new common_1.NotFoundException(`Data Comment post  dengan id: ${id} tidak ditemukan`);
            }
            return await this.prisma.forumComments.delete({
                where: { id: id },
            });
        }
        catch (error) {
            if (error.name === 'NotFoundError') {
                throw new common_1.NotFoundException(`Comment post  dengan id: ${id} tidak ditemukan`);
            }
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Comment post  dengan id: ${id} tidak ditemukan`);
                }
            }
            console.error(error.message);
            throw new common_1.InternalServerErrorException('Terjadi Kesalahan Saat Mendapatkan Comment post ');
        }
    }
};
exports.ForumCommentManageService = ForumCommentManageService;
exports.ForumCommentManageService = ForumCommentManageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ForumCommentManageService);
//# sourceMappingURL=forum-comment-manage.service.js.map