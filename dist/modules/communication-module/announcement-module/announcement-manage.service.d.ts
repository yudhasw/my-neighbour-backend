import { CreateAnnouncementManageDto } from '../../../dtos/requests/create/create-announcement-manage.dto';
import { UpdateAnnouncementManageDto } from '../../../dtos/requests/update/update-announcement-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
export declare class AnnouncementManageService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    private processFiles;
    private safeParseAttachments;
    create(createRequest: CreateAnnouncementManageDto, files?: Express.Multer.File[]): Promise<{
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
        attachments: string[];
        employee: {
            user: {
                fullName: string;
                firstName: string;
                lastName: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            employeeNumberId: string;
            hireDate: Date;
            employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
            workingHours: number;
            salary: number;
            bonus: number | null;
        };
        id: string;
        title: string;
        content: string;
        publishDate: Date;
        expiryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
    }[]>;
    findOne(id: string): Promise<{
        attachments: string[];
        employee: {
            user: {
                fullName: string;
                firstName: string;
                lastName: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            employeeNumberId: string;
            hireDate: Date;
            employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
            workingHours: number;
            salary: number;
            bonus: number | null;
        };
        id: string;
        title: string;
        content: string;
        publishDate: Date;
        expiryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
    }>;
    update(id: string, updateRequest: UpdateAnnouncementManageDto, files?: Express.Multer.File[]): Promise<{
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
    getAnnouncementFiles(id: string): Promise<{
        path: string;
        exists: boolean;
        size: number;
    }[]>;
}
