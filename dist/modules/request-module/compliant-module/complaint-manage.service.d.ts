import { CreateComplaintManageDto } from '../../../dtos/requests/create/create-complaint-manage.dto';
import { UpdateComplaintManageDto } from '../../../dtos/requests/update/update-complaint-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
export declare class ComplaintManageService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    create(createRequest: CreateComplaintManageDto): Promise<{
        id: string;
        title: string;
        description: string;
        status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string | null;
        category: import("src/common/database/generated/prisma").$Enums.MaintenancePriority;
        submittedAt: Date;
        resolvedAt: Date | null;
        resolutionDetails: string | null;
        images: string[];
        employeeId: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        description: string;
        status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string | null;
        category: import("src/common/database/generated/prisma").$Enums.MaintenancePriority;
        submittedAt: Date;
        resolvedAt: Date | null;
        resolutionDetails: string | null;
        images: string[];
        employeeId: string | null;
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
        employee: ({
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
        status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string | null;
        category: import("src/common/database/generated/prisma").$Enums.MaintenancePriority;
        submittedAt: Date;
        resolvedAt: Date | null;
        resolutionDetails: string | null;
        images: string[];
        employeeId: string | null;
    }>;
    update(id: string, updateRequest: UpdateComplaintManageDto): Promise<{
        id: string;
        title: string;
        description: string;
        status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string | null;
        category: import("src/common/database/generated/prisma").$Enums.MaintenancePriority;
        submittedAt: Date;
        resolvedAt: Date | null;
        resolutionDetails: string | null;
        images: string[];
        employeeId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string | null;
        category: import("src/common/database/generated/prisma").$Enums.MaintenancePriority;
        submittedAt: Date;
        resolvedAt: Date | null;
        resolutionDetails: string | null;
        images: string[];
        employeeId: string | null;
    }>;
}
