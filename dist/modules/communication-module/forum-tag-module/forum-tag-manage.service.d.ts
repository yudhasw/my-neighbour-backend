import { CreateForumTagManageDto } from '../../../dtos/requests/create/create-forum-tag-manage.dto';
import { UpdateForumTagManageDto } from '../../../dtos/requests/update/update-forum-tag-manage.dto';
export declare class ForumTagManageService {
    create(createRequest: CreateForumTagManageDto): Promise<void>;
    findAll(): Promise<void>;
    findOne(id: number): Promise<void>;
    update(id: number, updateRequest: UpdateForumTagManageDto): Promise<void>;
    remove(id: number): Promise<void>;
}
