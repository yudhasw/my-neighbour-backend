import { CreateForumPostManageDto } from '../../../dtos/requests/create/create-forum-post-manage.dto';
import { UpdateForumPostManageDto } from '../../../dtos/requests/update/update-forum-post-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
export declare class ForumPostManageService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    create(createRequest: CreateForumPostManageDto): Promise<{
        title: string;
        content: string;
        attachments: string[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        authorRole: import("src/common/database/generated/prisma").$Enums.UserRole;
        publishedAt: Date;
    }>;
    findAll(): Promise<({
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
    } & {
        title: string;
        content: string;
        attachments: string[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        authorRole: import("src/common/database/generated/prisma").$Enums.UserRole;
        publishedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            fullName: string;
            firstName: string;
            lastName: string;
            username: string;
            role: import("src/common/database/generated/prisma").$Enums.UserRole;
        };
        tags: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            tagName: string;
        }[];
        comments: {
            content: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            postId: string;
        }[];
    } & {
        title: string;
        content: string;
        attachments: string[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        authorRole: import("src/common/database/generated/prisma").$Enums.UserRole;
        publishedAt: Date;
    }>;
    update(id: string, updateRequest: UpdateForumPostManageDto): Promise<{
        title: string;
        content: string;
        attachments: string[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        authorRole: import("src/common/database/generated/prisma").$Enums.UserRole;
        publishedAt: Date;
    }>;
    remove(id: string): Promise<{
        title: string;
        content: string;
        attachments: string[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        authorRole: import("src/common/database/generated/prisma").$Enums.UserRole;
        publishedAt: Date;
    }>;
}
