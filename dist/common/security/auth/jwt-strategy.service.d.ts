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
                id: string;
                createdAt: Date;
                updatedAt: Date;
                unitNumber: string;
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
            unitId: string | null;
            kprPaymentAmount: number | null;
            kprDueDate: Date | null;
            isKprPaid: boolean | null;
        }) | null;
        employee: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            employeeNumberId: string;
            hireDate: Date;
            employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
            workingHours: number;
            salary: number;
            bonus: number | null;
        } | null;
    }>;
}
export {};
