import { CreateAnnouncementManageDto } from '../../../dtos/requests/create/create-announcement-manage.dto';
import { UpdateAnnouncementManageDto } from '../../../dtos/requests/update/update-announcement-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
export declare class AnnouncementManageService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    create(createRequest: CreateAnnouncementManageDto, files: Express.Multer.File): Promise<{
        title: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
        employeeId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        title: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
        employeeId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
    } & {
        title: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
        employeeId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateRequest: UpdateAnnouncementManageDto): Promise<{
        title: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
        employeeId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        title: string;
        content: string;
        attachments: string[];
        publishDate: Date;
        expiryDate: Date | null;
        employeeId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
