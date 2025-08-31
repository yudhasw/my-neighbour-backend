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
        createdAt: Date;
        updatedAt: Date;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        priceSale: number;
        squareFootage: number | null;
        location: string;
    }>;
    findAll(): Promise<({
        _count: {
            Complaints: number;
            Bills: number;
            Payments: number;
            Residents: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        priceSale: number;
        squareFootage: number | null;
        location: string;
    })[]>;
    findOne(id: string): Promise<{
        Bills: {
            amount: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        priceSale: number;
        squareFootage: number | null;
        location: string;
    }>;
    update(id: string, updateRequest: UpdateUnitManageDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        priceSale: number;
        squareFootage: number | null;
        location: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        priceSale: number;
        squareFootage: number | null;
        location: string;
    }>;
}
