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
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        rentAmount: number | null;
        location: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        priceSale: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        _count: {
            MaintenanceRequests: number;
            Payments: number;
            Bills: number;
            Complaints: number;
        };
    } & {
        id: string;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        rentAmount: number | null;
        location: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        priceSale: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        Bills: {
            amount: number;
        }[];
    } & {
        id: string;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        rentAmount: number | null;
        location: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        priceSale: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateRequest: UpdateUnitManageDto): Promise<{
        id: string;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        rentAmount: number | null;
        location: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        priceSale: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        rentAmount: number | null;
        location: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        priceSale: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
