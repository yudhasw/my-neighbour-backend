import { MaintenanceCategory, MaintenanceStatus } from '../../../common/database/generated/prisma';
export declare class CreateMaintananceRequestManageDto {
    readonly title: string;
    readonly description: string;
    readonly requestDate: Date;
    readonly priority: MaintenanceCategory;
    readonly status: MaintenanceStatus;
    readonly residentId: string;
    readonly unitId: string;
    readonly assignedToEmployeeId?: string;
}
