import { ResidentManageService } from './resident-manage.service';
import { CreateResidentManageDto } from '../../../dtos/requests/create/create-resident-manage.dto';
import { UpdateResidentManageDto } from '../../../dtos/requests/update/update-resident-manage.dto';
export declare class ResidentManageController {
    private readonly residentManageService;
    constructor(residentManageService: ResidentManageService);
    create(createResidentManageDto: CreateResidentManageDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        unitId: string | null;
    }>;
    findAll(): Promise<({
        user: {
            fullName: string;
            firstName: string;
            lastName: string;
            dateOfBirth: Date | null;
            contactNumber: string | null;
            primaryEmail: string;
            gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
        };
        _count: {
            payments: number;
            Complaints: number;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        unitId: string | null;
    })[]>;
    findOne(id: string): Promise<{
        payments: {
            description: string | null;
            amount: number;
            paymentDate: Date;
            paymentMethod: import("src/common/database/generated/prisma").$Enums.PaymentMethod;
            paymentFor: string;
        }[];
        user: {
            fullName: string;
            firstName: string;
            lastName: string;
            dateOfBirth: Date | null;
            contactNumber: string | null;
            primaryEmail: string;
            gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
        };
        _count: {
            payments: number;
            Complaints: number;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        unitId: string | null;
    }>;
    update(id: string, updateResidentManageDto: UpdateResidentManageDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        unitId: string | null;
    }>;
    remove(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        unitId: string | null;
    }>;
}
