import { CreateResidentManageDto } from '../../../dtos/requests/create/create-resident-manage.dto';
import { UpdateResidentManageDto } from '../../../dtos/requests/update/update-resident-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
export declare class ResidentManageService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    create(createRequest: CreateResidentManageDto): Promise<{
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string;
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
        } | null;
        _count: {
            payments: number;
            Complaints: number;
        };
    } & {
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            fullName: string;
            firstName: string;
            lastName: string;
            dateOfBirth: Date | null;
            contactNumber: string | null;
            primaryEmail: string;
            gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
        } | null;
        payments: {
            amount: number;
            paymentDate: Date;
            paymentMethod: import("src/common/database/generated/prisma").$Enums.PaymentMethod;
            paymentFor: string;
            description: string | null;
        }[];
        _count: {
            payments: number;
            Complaints: number;
        };
    } & {
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string;
    }>;
    update(id: string, updateRequest: UpdateResidentManageDto): Promise<{
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string;
    }>;
    remove(id: string): Promise<{
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        createdAt: Date;
        updatedAt: Date;
        residentId: string;
        unitId: string;
    }>;
}
