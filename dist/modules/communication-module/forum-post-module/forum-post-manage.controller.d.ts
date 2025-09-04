import { ForumPostManageService } from './forum-post-manage.service';
import { CreateForumPostManageDto } from '../../../dtos/requests/create/create-forum-post-manage.dto';
import { UpdateForumPostManageDto } from '../../../dtos/requests/update/update-forum-post-manage.dto';
export declare class ForumPostManageController {
    private readonly forumPostManageService;
    constructor(forumPostManageService: ForumPostManageService);
    create(createForumPostManageDto: CreateForumPostManageDto, files?: Express.Multer.File[]): Promise<{
        tags: {
            tagName: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        title: string;
        userId: string;
        content: string;
        attachments: string[];
        authorRole: import("src/common/database/generated/prisma").$Enums.UserRole;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
    }>;
    findAll(): Promise<{
        attachments: string[];
        user: {
            fullName: string;
            firstName: string;
            lastName: string;
            username: string;
            role: import("src/common/database/generated/prisma").$Enums.UserRole;
        };
        _count: {
            tags: number;
            comments: number;
        };
        title: string;
        userId: string;
        content: string;
        authorRole: import("src/common/database/generated/prisma").$Enums.UserRole;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        attachments: string[];
        user: {
            fullName: string;
            firstName: string;
            lastName: string;
            username: string;
            role: import("src/common/database/generated/prisma").$Enums.UserRole;
        };
        tags: {
            tagName: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        comments: {
            userId: string;
            content: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            postId: string;
        }[];
        title: string;
        userId: string;
        content: string;
        authorRole: import("src/common/database/generated/prisma").$Enums.UserRole;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
    }>;
    update(id: string, updateForumPostManageDto: UpdateForumPostManageDto, files?: Express.Multer.File[]): Promise<{
        title: string;
        userId: string;
        content: string;
        attachments: string[];
        authorRole: import("src/common/database/generated/prisma").$Enums.UserRole;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
    }>;
    remove(id: string): Promise<{
        title: string;
        userId: string;
        content: string;
        attachments: string[];
        authorRole: import("src/common/database/generated/prisma").$Enums.UserRole;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
    }>;
}
