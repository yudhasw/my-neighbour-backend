import { CreateForumCommentManageDto } from '../../../dtos/requests/create/create-forum-comment-manage.dto';
import { UpdateForumCommentManageDto } from '../../../dtos/requests/update/update-forum-comment-manage.dto';
export declare class ForumCommentManageService {
    create(createRequest: CreateForumCommentManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRequest: UpdateForumCommentManageDto): string;
    remove(id: string): string;
}
