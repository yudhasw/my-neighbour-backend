import { AnnouncementManageService } from './announcement-manage.service';
import { CreateAnnouncementManageDto } from '../../../dtos/requests/create/create-announcement-manage.dto';
import { UpdateAnnouncementManageDto } from '../../../dtos/requests/update/update-announcement-manage.dto';
export declare class AnnouncementManageController {
    private readonly announcementManageService;
    constructor(announcementManageService: AnnouncementManageService);
    create(createAnnouncementManageDto: CreateAnnouncementManageDto): Promise<{
        id: string;
        title: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
    }>;
    update(id: string, updateAnnouncementManageDto: UpdateAnnouncementManageDto): Promise<{
        id: string;
        title: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
    }>;
}
