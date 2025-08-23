import { Gender, UserRole } from '../../../common/database/generated/prisma';
export declare class CreateAppUserManageDto {
    readonly fullName: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly username: string;
    readonly dateOfBirth: Date;
    readonly contactNumber: string;
    readonly primaryEmail: string;
    readonly secondaryEmail: string;
    readonly password: string;
    readonly role: UserRole;
    readonly gender: Gender;
}
