import { UnitManageService } from './unit-manage.service';
import { CreateUnitManageDto } from '../../dtos/requests/create/create-unit-manage.dto';
import { UpdateUnitManageDto } from '../../dtos/requests/update/update-unit-manage.dto';
export declare class UnitManageController {
    private readonly unitManageService;
    constructor(unitManageService: UnitManageService);
    create(createUnitManageDto: CreateUnitManageDto): Promise<{
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        location: string;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        priceSale: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        unitOwnership: string[];
    }>;
    findAll(): Promise<({
        _count: {
            Complaints: number;
            Payments: number;
            Residents: number;
            Bills: number;
        };
    } & {
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        location: string;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        priceSale: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        unitOwnership: string[];
    })[]>;
    findOne(id: string): Promise<{
        Complaints: {
            title: string;
            description: string;
            category: import("src/common/database/generated/prisma").$Enums.MaintenanceCategory;
            status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
            submittedAt: Date;
            resolvedAt: Date | null;
            resolutionDetails: string | null;
            images: string[];
        }[];
        Residents: ({
            movedInDate: Date;
            kprPaymentAmount: number | null;
            kprDueDate: Date | null;
            isKprPaid: boolean | null;
            residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
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
            registrationMethod: import("src/common/database/generated/prisma").$Enums.RegistrationMethod;
            emergencyContactName: string | null;
            emergencyContactNumber: string | null;
            movedInDate: Date;
            unitId: string | null;
            kprPaymentAmount: number | null;
            kprDueDate: Date | null;
            isKprPaid: boolean | null;
            familyCode: string | null;
            userId: string;
            movedOutDate: Date | null;
            residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            registrationStatus: import("src/common/database/generated/prisma").$Enums.RegistrationStatus;
            approvedBy: string | null;
            approvalDate: Date | null;
            rejectionReason: string | null;
            pendingApproval: boolean;
            approvedByHeadOfHousehold: string | null;
        })[];
        Bills: {
            amount: number;
        }[];
    } & {
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        location: string;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        priceSale: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        unitOwnership: string[];
    }>;
    update(id: string, updateUnitManageDto: UpdateUnitManageDto): Promise<{
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        location: string;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        priceSale: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        unitOwnership: string[];
    }>;
    remove(id: string): Promise<{
        status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
        location: string;
        unitNumber: string;
        buildingName: string | null;
        floorNumber: number | null;
        numberOfRooms: number | null;
        squareFootage: number | null;
        priceSale: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        unitOwnership: string[];
    }>;
}
