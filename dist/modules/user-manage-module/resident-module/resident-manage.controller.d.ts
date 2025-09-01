import { ResidentManageService } from './resident-manage.service';
import { CreateResidentManageDto } from '../../../dtos/requests/create/create-resident-manage.dto';
import { UpdateResidentManageDto } from '../../../dtos/requests/update/update-resident-manage.dto';
export declare class ResidentManageController {
    private readonly residentManageService;
    constructor(residentManageService: ResidentManageService);
    create(createResidentManageDto: CreateResidentManageDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        unitId: string | null;
        kprPaymentAmount: number | null;
        kprDueDate: Date | null;
        isKprPaid: boolean | null;
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
            Complaints: number;
            Payments: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        unitId: string | null;
        kprPaymentAmount: number | null;
        kprDueDate: Date | null;
        isKprPaid: boolean | null;
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
        };
        Payments: {
            status: import("src/common/database/generated/prisma").$Enums.PaymentStatus;
            amount: number;
            paymentDate: Date;
            paymentMethod: import("src/common/database/generated/prisma").$Enums.PaymentMethod;
        }[];
        _count: {
            Complaints: number;
            Payments: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        unitId: string | null;
        kprPaymentAmount: number | null;
        kprDueDate: Date | null;
        isKprPaid: boolean | null;
    }>;
    update(id: string, updateResidentManageDto: UpdateResidentManageDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        unitId: string | null;
        kprPaymentAmount: number | null;
        kprDueDate: Date | null;
        isKprPaid: boolean | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        emergencyContactName: string | null;
        emergencyContactNumber: string | null;
        movedInDate: Date;
        movedOutDate: Date | null;
        residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
        unitId: string | null;
        kprPaymentAmount: number | null;
        kprDueDate: Date | null;
        isKprPaid: boolean | null;
    }>;
}
