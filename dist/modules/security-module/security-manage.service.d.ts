import { CreateSecurityManageDto } from '../../dtos/requests/create/create-security-manage.dto';
import { UpdateSecurityManageDto } from '../../dtos/requests/update/update-security-manage.dto';
import { DatabaseService } from '../../common/database/database.service';
export declare class SecurityManageService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    create(createRequest: CreateSecurityManageDto): Promise<{
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
    update(id: string, updateRequest: UpdateSecurityManageDto): Promise<{
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
