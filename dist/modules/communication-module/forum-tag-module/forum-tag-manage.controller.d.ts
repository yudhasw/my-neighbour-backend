import { ForumTagManageService } from './forum-tag-manage.service';
import { CreateForumTagManageDto } from '../../../dtos/requests/create/create-forum-tag-manage.dto';
import { UpdateForumTagManageDto } from '../../../dtos/requests/update/update-forum-tag-manage.dto';
export declare class ForumTagManageController {
    private readonly forumTagManageService;
    constructor(forumTagManageService: ForumTagManageService);
    create(createForumTagManageDto: CreateForumTagManageDto): Promise<void>;
    findAll(): Promise<void>;
    findOne(id: string): Promise<void>;
    update(id: string, updateForumTagManageDto: UpdateForumTagManageDto): Promise<void>;
    remove(id: string): Promise<void>;
}
