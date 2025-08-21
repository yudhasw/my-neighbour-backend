import { UnitStatus } from '../../../common/database/generated/prisma';
export declare class CreateUnitManageDto {
    readonly unitNumber: string;
    readonly buildingName?: string;
    readonly floorNumber?: number;
    readonly numberOfRooms?: number;
    readonly rentAmount?: number;
    readonly squareFootage?: number;
    readonly location: string;
    readonly status: UnitStatus;
    readonly priceSale: number;
}
