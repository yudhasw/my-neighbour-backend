import { AuthService } from './auth.service';
import { RegistRequest } from '../../../dtos/requests/regist-request';
import { SignInRequest } from '../../../dtos/requests/sign-in-request';
import { Request as expressRequest } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registration(registrationDto: RegistRequest, files?: Express.Multer.File[]): Promise<{
        message: string;
        userId: string;
        residentId: string;
        requiresApproval: boolean;
    }>;
    signIn(signInDto: SignInRequest): Promise<{
        accessToken: string;
        refreshToken: string;
        message: string;
        user: {
            id: string;
            username: string;
            email: string;
            resident: ({
                unit: {
                    unitNumber: string;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    buildingName: string | null;
                    unitOwnership: string[];
                    floorNumber: number | null;
                    numberOfRooms: number | null;
                    priceSale: number;
                    squareFootage: number | null;
                    location: string;
                    status: import("src/common/database/generated/prisma").$Enums.UnitStatus;
                } | null;
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                emergencyContactName: string | null;
                emergencyContactNumber: string | null;
                movedInDate: Date;
                movedOutDate: Date | null;
                familyCode: string | null;
                residentStatus: import("src/common/database/generated/prisma").$Enums.ResidentStatus | null;
                kprPaymentAmount: number | null;
                kprDueDate: Date | null;
                isKprPaid: boolean | null;
                registrationStatus: import("src/common/database/generated/prisma").$Enums.RegistrationStatus;
                registrationMethod: import("src/common/database/generated/prisma").$Enums.RegistrationMethod;
                approvedBy: string | null;
                approvalDate: Date | null;
                rejectionReason: string | null;
                pendingApproval: boolean;
                approvedByHeadOfHousehold: string | null;
                unitId: string | null;
            }) | null;
        };
    }>;
    verifyEmail(token: string): Promise<{
        message: string;
    }>;
    refreshToken(req: expressRequest & {
        user: any;
    }): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    getProfile(req: expressRequest & {
        user: any;
    }): Promise<{
        message: string;
        userId: any;
    }>;
    approveFamily(approvalId: string, req: expressRequest & {
        user: any;
    }, approvalData: {
        action: 'APPROVE' | 'REJECT';
        notes?: string;
    }): Promise<{
        message: string;
        approval: {
            id: string;
            status: import("src/common/database/generated/prisma").$Enums.ApprovalStatus;
            familyMemberId: string;
            headOfHouseholdId: string;
            requestedAt: Date;
            respondedAt: Date | null;
            notes: string | null;
        };
    }>;
}
