import { CreateComplaintManageDto } from '../../../dtos/requests/create/create-complaint-manage.dto';
import { UpdateComplaintManageDto } from '../../../dtos/requests/update/update-complaint-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
export declare class ComplaintManageService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    create(createRequest: CreateComplaintManageDto): Promise<{
        unitId: string | null;
        title: string;
        description: string;
        category: import("src/common/database/generated/prisma").$Enums.MaintenanceCategory;
        status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
        submittedAt: Date;
        resolvedAt: Date | null;
        resolutionDetails: string | null;
        residentId: string;
        employeeId: string | null;
        images: string[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        unitId: string | null;
        title: string;
        description: string;
        category: import("src/common/database/generated/prisma").$Enums.MaintenanceCategory;
        status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
        submittedAt: Date;
        resolvedAt: Date | null;
        resolutionDetails: string | null;
        residentId: string;
        employeeId: string | null;
        images: string[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        employee: ({
            employeeNumberId: string;
            employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
            user: {
                fullName: string;
                firstName: string;
                lastName: string;
                username: string;
                id: string;
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
        }) | null;
        resident: {
            user: {
                fullName: string;
                firstName: string;
                lastName: string;
                username: string;
                id: string;
            };
            unit: {
                status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
                location: string;
                unitNumber: string;
                buildingName: string | null;
            } | null;
        } & {
            registrationMethod: import("src/common/database/generated/prisma").$Enums.RegistrationMethod;
            emergencyContactName: string | null;
            emergencyContactNumber: string | null;
            movedInDate: Date;
            unitId: string | null;
            kprPaymentAmount: number | null;
            kprDueDate: Date | null;
            isKprPaid: boolean | null;
            familyCode: string | null;
            userId: string;
            movedOutDate: Date | null;
            residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            registrationStatus: import("src/common/database/generated/prisma").$Enums.RegistrationStatus;
            approvedBy: string | null;
            approvalDate: Date | null;
            rejectionReason: string | null;
            pendingApproval: boolean;
            approvedByHeadOfHousehold: string | null;
        };
    } & {
        unitId: string | null;
        title: string;
        description: string;
        category: import("src/common/database/generated/prisma").$Enums.MaintenanceCategory;
        status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
        submittedAt: Date;
        resolvedAt: Date | null;
        resolutionDetails: string | null;
        residentId: string;
        employeeId: string | null;
        images: string[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateRequest: UpdateComplaintManageDto): Promise<{
        unitId: string | null;
        title: string;
        description: string;
        category: import("src/common/database/generated/prisma").$Enums.MaintenanceCategory;
        status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
        submittedAt: Date;
        resolvedAt: Date | null;
        resolutionDetails: string | null;
        residentId: string;
        employeeId: string | null;
        images: string[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        unitId: string | null;
        title: string;
        description: string;
        category: import("src/common/database/generated/prisma").$Enums.MaintenanceCategory;
        status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
        submittedAt: Date;
        resolvedAt: Date | null;
        resolutionDetails: string | null;
        residentId: string;
        employeeId: string | null;
        images: string[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
