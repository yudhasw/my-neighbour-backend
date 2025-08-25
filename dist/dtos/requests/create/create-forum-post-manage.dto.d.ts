import { UserRole } from '../../../common/database/generated/prisma';
export declare class CreateForumPostManageDto {
    readonly title: string;
    readonly content: string;
    readonly attachments?: string[];
    readonly authorRole: UserRole;
    readonly publishDate: Date;
    readonly userId: string;
    readonly tagName: string;
    readonly tagId: string;
}
