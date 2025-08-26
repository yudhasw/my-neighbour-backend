import { ComplaintStatus, MaintenancePriority } from '../../../common/database/generated/prisma';
export declare class CreateComplaintManageDto {
    readonly title: string;
    readonly description: string;
    readonly category: MaintenancePriority;
    readonly status: ComplaintStatus;
    readonly submittedAt: Date;
    readonly resolvedAt?: Date;
    readonly resolutionDetails?: string;
    readonly residentId: string;
    readonly employeeId?: string;
    readonly unitId?: string;
    readonly images?: string[];
}
