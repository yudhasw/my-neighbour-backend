import { CreateEmployeeManageDto } from '../../../dtos/requests/create/create-employee-manage.dto';
import { UpdateEmployeeManageDto } from '../../../dtos/requests/update/update-employee-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
import { GeneralHelper } from '../../../common/helper/generalHelper';
export declare class EmployeeManageService {
    private readonly prisma;
    private readonly helper;
    constructor(prisma: DatabaseService, helper: GeneralHelper);
    create(createRequest: CreateEmployeeManageDto): Promise<{
        userId: string;
        employeeNumberId: string;
        hireDate: Date;
        employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
        workingHours: number;
        salary: number;
        bonus: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        user: {
            fullName: string;
            firstName: string;
            lastName: string;
            dateOfBirth: Date | null;
            contactNumber: string | null;
            primaryEmail: string;
            gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
        };
        _count: {
            Complaints: number;
            Payments: number;
            Bills: number;
            Announcements: number;
            SecurityReports: number;
        };
    } & {
        userId: string;
        employeeNumberId: string;
        hireDate: Date;
        employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
        workingHours: number;
        salary: number;
        bonus: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            fullName: string;
            firstName: string;
            lastName: string;
            dateOfBirth: Date | null;
            contactNumber: string | null;
            primaryEmail: string;
            gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
        };
        Complaints: {
            title: string;
            description: string;
            status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
            submittedAt: Date;
            resolvedAt: Date | null;
            resolutionDetails: string | null;
        }[];
        _count: {
            Complaints: number;
            Payments: number;
            Bills: number;
            Announcements: number;
            SecurityReports: number;
        };
        Announcements: {
            title: string;
            content: string;
            attachments: string[];
            publishDate: Date;
            expiryDate: Date | null;
        }[];
    } & {
        userId: string;
        employeeNumberId: string;
        hireDate: Date;
        employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
        workingHours: number;
        salary: number;
        bonus: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateRequest: UpdateEmployeeManageDto): Promise<{
        userId: string;
        employeeNumberId: string;
        hireDate: Date;
        employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
        workingHours: number;
        salary: number;
        bonus: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        userId: string;
        employeeNumberId: string;
        hireDate: Date;
        employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
        workingHours: number;
        salary: number;
        bonus: number | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
