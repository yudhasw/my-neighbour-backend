import { Strategy } from 'passport-jwt';
import { DatabaseService } from '../../../common/database/database.service';
declare const JwtStrategyService_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategyService extends JwtStrategyService_base {
    private prisma;
    constructor(prisma: DatabaseService);
    validate(payload: any): Promise<{
        id: string;
        username: string;
        primaryEmail: string;
        role: import("src/common/database/generated/prisma").$Enums.UserRole;
        resident: ({
            unit: {
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
            } | null;
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
        }) | null;
        employee: {
            userId: string;
            employeeNumberId: string;
            hireDate: Date;
            employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
            workingHours: number;
            salary: number;
            bonus: number | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    }>;
}
export {};
