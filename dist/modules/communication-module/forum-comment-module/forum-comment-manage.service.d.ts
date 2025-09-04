import { CreateForumCommentManageDto } from '../../../dtos/requests/create/create-forum-comment-manage.dto';
import { UpdateForumCommentManageDto } from '../../../dtos/requests/update/update-forum-comment-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
export declare class ForumCommentManageService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    create(createRequest: CreateForumCommentManageDto): Promise<{
        userId: string;
        content: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        postId: string;
    }>;
    findAll(): Promise<({
        user: {
            fullName: string;
            firstName: string;
            lastName: string;
            username: string;
            role: import("src/common/database/generated/prisma").$Enums.UserRole;
        };
    } & {
        userId: string;
        content: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        postId: string;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            fullName: string;
            firstName: string;
            lastName: string;
            username: string;
            role: import("src/common/database/generated/prisma").$Enums.UserRole;
        };
        post: {
            title: string;
            content: string;
            attachments: string[];
            tags: {
                tagName: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
            }[];
        };
    } & {
        userId: string;
        content: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        postId: string;
    }>;
    update(id: string, updateRequest: UpdateForumCommentManageDto): Promise<{
        userId: string;
        content: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        postId: string;
    }>;
    remove(id: string): Promise<{
        userId: string;
        content: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        postId: string;
    }>;
}
