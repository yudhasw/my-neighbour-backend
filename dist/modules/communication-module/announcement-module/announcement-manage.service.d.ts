import { CreateAnnouncementManageDto } from '../../../dtos/requests/create/create-announcement-manage.dto';
import { UpdateAnnouncementManageDto } from '../../../dtos/requests/update/update-announcement-manage.dto';
export declare class AnnouncementManageService {
    create(createRequest: CreateAnnouncementManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRequest: UpdateAnnouncementManageDto): string;
    remove(id: string): string;
}
