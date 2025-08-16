import { AnnouncementManageService } from './announcement-manage.service';
import { CreateAnnouncementManageDto } from '../../../dtos/requests/create/create-announcement-manage.dto';
import { UpdateAnnouncementManageDto } from '../../../dtos/requests/update/update-announcement-manage.dto';
export declare class AnnouncementManageController {
    private readonly announcementManageService;
    constructor(announcementManageService: AnnouncementManageService);
    create(createAnnouncementManageDto: CreateAnnouncementManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAnnouncementManageDto: UpdateAnnouncementManageDto): string;
    remove(id: string): string;
}
