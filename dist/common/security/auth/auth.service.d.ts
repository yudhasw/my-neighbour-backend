import { DatabaseService } from '../../../common/database/database.service';
import { RegistRequest } from '../../../dtos/requests/regist-request';
import { SignInRequest } from '../../../dtos/requests/sign-in-request';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { MailerManageService } from '../../../common/helper/mail/mailer-manage.service';
import { UploadsService } from 'src/common/helper/uploads/uploads.service';
export declare class AuthService extends UploadsService {
    private readonly prisma;
    private readonly jwt;
    private readonly mailerService;
    private readonly config;
    constructor(prisma: DatabaseService, jwt: JwtService, mailerService: MailerManageService, config: ConfigService);
    registration(registRequest: RegistRequest, files?: Express.Multer.File[]): Promise<{
        message: string;
        userId: string;
        residentId: string;
        requiresApproval: boolean;
    }>;
    signIn(signInRequest: SignInRequest): Promise<{
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
                    status: import("../../../common/database/generated/prisma").$Enums.UnitStatus;
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
                residentStatus: import("../../../common/database/generated/prisma").$Enums.ResidentStatus | null;
                kprPaymentAmount: number | null;
                kprDueDate: Date | null;
                isKprPaid: boolean | null;
                registrationStatus: import("../../../common/database/generated/prisma").$Enums.RegistrationStatus;
                registrationMethod: import("../../../common/database/generated/prisma").$Enums.RegistrationMethod;
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
    generateTokens(userId: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    jwtCompare(token: string, userId: string): Promise<boolean>;
    approvalSystem(approvalRequest: {
        familyApprovalId: string;
        headOfHouseholdId: string;
        action: 'APPROVE' | 'REJECT';
        notes?: string;
    }): Promise<{
        message: string;
        approval: {
            id: string;
            status: import("../../../common/database/generated/prisma").$Enums.ApprovalStatus;
            familyMemberId: string;
            headOfHouseholdId: string;
            requestedAt: Date;
            respondedAt: Date | null;
            notes: string | null;
        };
    }>;
    private validateFamilyCode;
    private validateUnitOwnership;
    private handleDocumentUploads;
    private createFamilyApprovalRequest;
    private ensureFamilyCode;
    private generateUniqueFamilyCode;
    private saveFileToStorage;
}
