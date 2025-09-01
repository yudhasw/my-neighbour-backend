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
        Residents: ({
            movedInDate: Date;
            residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
            kprPaymentAmount: number | null;
            kprDueDate: Date | null;
            isKprPaid: boolean | null;
            user: {
                fullName: string;
                firstName: string;
                lastName: string;
                username: string;
                dateOfBirth: Date | null;
                contactNumber: string | null;
                primaryEmail: string;
                gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            unitId: string | null;
            userId: string;
            emergencyContactName: string | null;
            emergencyContactNumber: string | null;
            movedInDate: Date;
            movedOutDate: Date | null;
            residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
            kprPaymentAmount: number | null;
            kprDueDate: Date | null;
            isKprPaid: boolean | null;
        })[];
        Bills: {
            amount: number;
        }[];
        Complaints: {
            status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
            title: string;
            description: string;
            category: import("src/common/database/generated/prisma").$Enums.MaintenanceCategory;
            images: string[];
            submittedAt: Date;
            resolvedAt: Date | null;
            resolutionDetails: string | null;
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
    update(id: string, updateRequest: UpdateUnitManageDto): Promise<{
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
