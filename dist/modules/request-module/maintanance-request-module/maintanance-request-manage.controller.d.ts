import { MaintananceRequestManageService } from './maintanance-request-manage.service';
import { CreateMaintananceRequestManageDto } from '../../../dtos/requests/create/create-maintanance-request-manage.dto';
import { UpdateMaintananceRequestManageDto } from '../../../dtos/requests/update/update-maintanance-request-manage.dto';
export declare class MaintananceRequestManageController {
    private readonly maintananceRequestManageService;
    constructor(maintananceRequestManageService: MaintananceRequestManageService);
    create(createMaintananceRequestManageDto: CreateMaintananceRequestManageDto): Promise<{
        id: string;
        title: string;
        description: string;
        requestDate: Date;
        priority: import("src/common/database/generated/prisma").$Enums.MaintenancePriority | null;
        status: import("src/common/database/generated/prisma").$Enums.MaintenanceStatus;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string;
        assignedToEmployeeId: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        description: string;
        requestDate: Date;
        priority: import("src/common/database/generated/prisma").$Enums.MaintenancePriority | null;
        status: import("src/common/database/generated/prisma").$Enums.MaintenanceStatus;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string;
        assignedToEmployeeId: string | null;
    }[]>;
    findOne(id: string): Promise<{
        resident: {
            unit: {
                status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
                unitNumber: string;
                buildingName: string | null;
                location: string;
            } | null;
            user: {
                id: string;
                fullName: string;
                firstName: string;
                lastName: string;
                username: string;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            residentId: string;
            unitId: string | null;
            emergencyContactName: string | null;
            emergencyContactNumber: string | null;
            movedInDate: Date;
            movedOutDate: Date | null;
            residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        };
        assignedTo: ({
            employeeNumberId: string;
            employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
            user: {
                id: string;
                fullName: string;
                firstName: string;
                lastName: string;
                username: string;
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
        }) | null;
    } & {
        id: string;
        title: string;
        description: string;
        requestDate: Date;
        priority: import("src/common/database/generated/prisma").$Enums.MaintenancePriority | null;
        status: import("src/common/database/generated/prisma").$Enums.MaintenanceStatus;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string;
        assignedToEmployeeId: string | null;
    }>;
    update(id: string, updateMaintananceRequestManageDto: UpdateMaintananceRequestManageDto): Promise<{
        id: string;
        title: string;
        description: string;
        requestDate: Date;
        priority: import("src/common/database/generated/prisma").$Enums.MaintenancePriority | null;
        status: import("src/common/database/generated/prisma").$Enums.MaintenanceStatus;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string;
        assignedToEmployeeId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        requestDate: Date;
        priority: import("src/common/database/generated/prisma").$Enums.MaintenancePriority | null;
        status: import("src/common/database/generated/prisma").$Enums.MaintenanceStatus;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string;
        assignedToEmployeeId: string | null;
    }>;
}
