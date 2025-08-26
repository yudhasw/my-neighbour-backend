import { MaintenancePriority, MaintenanceStatus } from '../../../common/database/generated/prisma';
export declare class CreateMaintananceRequestManageDto {
    readonly title: string;
    readonly description: string;
    readonly requestDate: Date;
    readonly priority: MaintenancePriority;
    readonly status: MaintenanceStatus;
    readonly residentId: string;
    readonly unitId: string;
    readonly assignedToEmployeeId?: string;
}
