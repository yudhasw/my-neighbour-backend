import { CreateUnitManageDto } from '../../dtos/requests/create/create-unit-manage.dto';
import { UpdateUnitManageDto } from '../../dtos/requests/update/update-unit-manage.dto';
import { DatabaseService } from '../../common/database/database.service';
import { GeneralHelper } from '../../common/helper/generalHelper';
export declare class UnitManageService {
    private readonly prisma;
    private readonly helper;
    constructor(prisma: DatabaseService, helper: GeneralHelper);
    create(createRequest: CreateUnitManageDto): Promise<{
        id: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        createdAt: Date;
        updatedAt: Date;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        rentAmount: number | null;
        location: string;
        priceSale: number;
    }>;
    findAll(): Promise<({
        _count: {
            MaintenanceRequests: number;
            Complaints: number;
            Payments: number;
            Bills: number;
        };
    } & {
        id: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        createdAt: Date;
        updatedAt: Date;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        rentAmount: number | null;
        location: string;
        priceSale: number;
    })[]>;
    findOne(id: string): Promise<{
        Bills: {
            amount: number;
        }[];
    } & {
        id: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        createdAt: Date;
        updatedAt: Date;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        rentAmount: number | null;
        location: string;
        priceSale: number;
    }>;
    update(id: string, updateRequest: UpdateUnitManageDto): Promise<{
        id: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        createdAt: Date;
        updatedAt: Date;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        rentAmount: number | null;
        location: string;
        priceSale: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        createdAt: Date;
        updatedAt: Date;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        rentAmount: number | null;
        location: string;
        priceSale: number;
    }>;
}
