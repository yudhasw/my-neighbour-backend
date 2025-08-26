import { AnnouncementManageService } from './announcement-manage.service';
import { CreateAnnouncementManageDto } from '../../../dtos/requests/create/create-announcement-manage.dto';
import { UpdateAnnouncementManageDto } from '../../../dtos/requests/update/update-announcement-manage.dto';
export declare class AnnouncementManageController {
    private readonly announcementManageService;
    constructor(announcementManageService: AnnouncementManageService);
    create(createAnnouncementManageDto: CreateAnnouncementManageDto): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        employee: {
            employeeNumberId: string;
            employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
            user: {
                fullName: string;
                firstName: string;
                lastName: string;
                username: string;
                contactNumber: string | null;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            employeeId: string;
            employeeNumberId: string;
            hireDate: Date;
            employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
            workingHours: number;
            salary: number;
            bonus: number | null;
        };
    } & {
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
    }>;
    update(id: string, updateAnnouncementManageDto: UpdateAnnouncementManageDto): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
    }>;
}
