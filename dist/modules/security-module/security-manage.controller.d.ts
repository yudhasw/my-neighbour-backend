import { SecurityManageService } from './security-manage.service';
import { CreateSecurityManageDto } from '../../dtos/requests/create/create-security-manage.dto';
import { UpdateSecurityManageDto } from '../../dtos/requests/update/update-security-manage.dto';
export declare class SecurityManageController {
    private readonly securityManageService;
    constructor(securityManageService: SecurityManageService);
    create(createSecurityManageDto: CreateSecurityManageDto): Promise<{
        title: string;
        description: string;
        status: import("src/common/database/generated/prisma").$Enums.MaintenanceStatus;
        employeeId: string;
        location: string;
        incidentDate: Date;
        isPublished: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        employee: {
            user: {
                fullName: string;
                firstName: string;
                lastName: string;
                username: string;
                contactNumber: string | null;
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
        };
    } & {
        title: string;
        description: string;
        status: import("src/common/database/generated/prisma").$Enums.MaintenanceStatus;
        employeeId: string;
        location: string;
        incidentDate: Date;
        isPublished: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        employee: {
            user: {
                fullName: string;
                firstName: string;
                lastName: string;
                username: string;
                contactNumber: string | null;
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
        };
    } & {
        title: string;
        description: string;
        status: import("src/common/database/generated/prisma").$Enums.MaintenanceStatus;
        employeeId: string;
        location: string;
        incidentDate: Date;
        isPublished: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateSecurityManageDto: UpdateSecurityManageDto): Promise<{
        title: string;
        description: string;
        status: import("src/common/database/generated/prisma").$Enums.MaintenanceStatus;
        employeeId: string;
        location: string;
        incidentDate: Date;
        isPublished: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        title: string;
        description: string;
        status: import("src/common/database/generated/prisma").$Enums.MaintenanceStatus;
        employeeId: string;
        location: string;
        incidentDate: Date;
        isPublished: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
