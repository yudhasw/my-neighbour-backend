import { CreateAnnouncementManageDto } from '../../../dtos/requests/create/create-announcement-manage.dto';
import { UpdateAnnouncementManageDto } from '../../../dtos/requests/update/update-announcement-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
export declare class AnnouncementManageService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    create(createRequest: CreateAnnouncementManageDto): Promise<{
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
    update(id: string, updateRequest: UpdateAnnouncementManageDto): Promise<{
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
