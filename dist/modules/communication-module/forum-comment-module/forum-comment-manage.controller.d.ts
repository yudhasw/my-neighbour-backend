import { ForumCommentManageService } from './forum-comment-manage.service';
import { CreateForumCommentManageDto } from '../../../dtos/requests/create/create-forum-comment-manage.dto';
import { UpdateForumCommentManageDto } from '../../../dtos/requests/update/update-forum-comment-manage.dto';
export declare class ForumCommentManageController {
    private readonly forumCommentManageService;
    constructor(forumCommentManageService: ForumCommentManageService);
    create(createForumCommentManageDto: CreateForumCommentManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateForumCommentManageDto: UpdateForumCommentManageDto): string;
    remove(id: string): string;
}
