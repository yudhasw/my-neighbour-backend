import { ResidentStatus } from '../../../common/database/generated/prisma';
export declare class CreateResidentManageDto {
    readonly userId: string;
    readonly emergencyContactName: string;
    readonly emergencyContactNumber: string;
    readonly movedInDate: Date;
    readonly movedOutDate: Date;
    readonly residentStatus: ResidentStatus;
    readonly unitId: string;
}
