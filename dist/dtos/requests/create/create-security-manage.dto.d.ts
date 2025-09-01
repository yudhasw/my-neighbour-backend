import { MaintenanceStatus } from '../../../common/database/generated/prisma';
export declare class CreateSecurityManageDto {
    readonly title: string;
    readonly description: string;
    readonly location: string;
    readonly incidentDate: Date;
    readonly status: MaintenanceStatus;
    readonly isPublished?: boolean;
    readonly employeeId: string;
}
