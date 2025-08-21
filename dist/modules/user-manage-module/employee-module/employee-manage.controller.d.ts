import { EmployeeManageService } from './employee-manage.service';
import { CreateEmployeeManageDto } from '../../../dtos/requests/create/create-employee-manage.dto';
import { UpdateEmployeeManageDto } from '../../../dtos/requests/update/update-employee-manage.dto';
export declare class EmployeeManageController {
    private readonly employeeManageService;
    constructor(employeeManageService: EmployeeManageService);
    create(createEmployeeManageDto: CreateEmployeeManageDto): Promise<{
        employeeIdNumber: string;
        hireDate: Date;
        employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
        workingHours: number;
        salary: number;
        bonus: number | null;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
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
            Announcements: number;
            MaintenanceRequests: number;
            Payments: number;
        };
    } & {
        employeeIdNumber: string;
        hireDate: Date;
        employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
        workingHours: number;
        salary: number;
        bonus: number | null;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
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
        Announcements: {
            title: string;
            content: string;
            body: string;
            publishDate: Date;
            expiryDate: Date | null;
        }[];
        MaintenanceRequests: {
            status: import("src/common/database/generated/prisma").$Enums.MaintenanceStatus;
            title: string;
            description: string;
            priority: import("src/common/database/generated/prisma").$Enums.MaintenancePriority;
        }[];
        Complaint: {
            name: string;
            desciption: string;
            status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
            submittedAt: Date;
            resolvedAt: Date | null;
            resolutionDetails: string | null;
        } | null;
        _count: {
            Announcements: number;
            MaintenanceRequests: number;
            Payments: number;
        };
    } & {
        employeeIdNumber: string;
        hireDate: Date;
        employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
        workingHours: number;
        salary: number;
        bonus: number | null;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
    }>;
    update(id: string, updateEmployeeManageDto: UpdateEmployeeManageDto): Promise<{
        employeeIdNumber: string;
        hireDate: Date;
        employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
        workingHours: number;
        salary: number;
        bonus: number | null;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
    }>;
    remove(id: string): Promise<{
        employeeIdNumber: string;
        hireDate: Date;
        employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
        workingHours: number;
        salary: number;
        bonus: number | null;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
    }>;
}
