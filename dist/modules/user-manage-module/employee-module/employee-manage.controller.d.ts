import { EmployeeManageService } from './employee-manage.service';
import { CreateEmployeeManageDto } from '../../../dtos/requests/create/create-employee-manage.dto';
import { UpdateEmployeeManageDto } from '../../../dtos/requests/update/update-employee-manage.dto';
export declare class EmployeeManageController {
    private readonly employeeManageService;
    constructor(employeeManageService: EmployeeManageService);
    create(createEmployeeManageDto: CreateEmployeeManageDto): Promise<{
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
    }>;
    findAll(): Promise<({
        _count: {
            Payments: number;
            Bills: number;
            Complaints: number;
            Announcements: number;
            SecurityReports: number;
        };
        user: {
            fullName: string;
            firstName: string;
            lastName: string;
            dateOfBirth: Date | null;
            contactNumber: string | null;
            primaryEmail: string;
            gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
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
    })[]>;
    findOne(id: string): Promise<{
        Complaints: {
            status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
            title: string;
            description: string;
            submittedAt: Date;
            resolvedAt: Date | null;
            resolutionDetails: string | null;
        }[];
        _count: {
            Payments: number;
            Bills: number;
            Complaints: number;
            Announcements: number;
            SecurityReports: number;
        };
        user: {
            fullName: string;
            firstName: string;
            lastName: string;
            dateOfBirth: Date | null;
            contactNumber: string | null;
            primaryEmail: string;
            gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
        };
        Announcements: {
            title: string;
            content: string;
            attachments: string[];
            publishDate: Date;
            expiryDate: Date | null;
        }[];
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
    }>;
    update(id: string, updateEmployeeManageDto: UpdateEmployeeManageDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
