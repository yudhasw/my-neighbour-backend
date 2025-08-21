import { EmployeeRole } from '../../../common/database/generated/prisma';
export declare class CreateEmployeeManageDto {
    readonly employeeId: string;
    readonly employeeNumberId: string;
    readonly hireDate: Date;
    readonly employeePosition: EmployeeRole;
    readonly workingHours: number;
    readonly salary: number;
    readonly bonus: number;
}
