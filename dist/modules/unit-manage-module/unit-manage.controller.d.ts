import { UnitManageService } from './unit-manage.service';
import { CreateUnitManageDto } from '../../dtos/requests/create/create-unit-manage.dto';
import { UpdateUnitManageDto } from '../../dtos/requests/update/update-unit-manage.dto';
export declare class UnitManageController {
    private readonly unitManageService;
    constructor(unitManageService: UnitManageService);
    create(createUnitManageDto: CreateUnitManageDto): Promise<{
        id: string;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        priceSale: number;
        squareFootage: number | null;
        location: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        _count: {
            Residents: number;
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
        priceSale: number;
        squareFootage: number | null;
        location: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
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
        priceSale: number;
        squareFootage: number | null;
        location: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateUnitManageDto: UpdateUnitManageDto): Promise<{
        id: string;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        priceSale: number;
        squareFootage: number | null;
        location: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        priceSale: number;
        squareFootage: number | null;
        location: string;
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
