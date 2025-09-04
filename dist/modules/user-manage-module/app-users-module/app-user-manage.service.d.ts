import { CreateAppUserManageDto } from '../../../dtos/requests/create/create-app-user-manage.dto';
import { UpdateAppUserManageDto } from '../../../dtos/requests/update/update-app-user-manage.dto';
import { DatabaseService } from '../../../common/database/database.service';
export declare class AppUserManageService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    create(createRequest: CreateAppUserManageDto): Promise<{
        fullName: string;
        firstName: string;
        lastName: string;
        username: string;
        dateOfBirth: Date | null;
        contactNumber: string | null;
        primaryEmail: string;
        secondaryEmail: string | null;
        role: import("src/common/database/generated/prisma").$Enums.UserRole;
        gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
        id: string;
        sessionToken: string | null;
        emailVerificationToken: string | null;
        passwordResetToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        fullName: string;
        firstName: string;
        lastName: string;
        username: string;
        primaryEmail: string;
        secondaryEmail: string | null;
        role: import("src/common/database/generated/prisma").$Enums.UserRole;
        gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            ForumPosts: number;
            ForumComments: number;
        };
        Resident: {
            emergencyContactName: string | null;
            emergencyContactNumber: string | null;
            movedInDate: Date;
            movedOutDate: Date | null;
        } | null;
        Employee: {
            employeeNumberId: string;
            hireDate: Date;
            employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
            workingHours: number;
            salary: number;
            bonus: number | null;
        } | null;
    }[]>;
    findOne(id: string): Promise<{
        Resident: {
            emergencyContactName: string | null;
            emergencyContactNumber: string | null;
            movedInDate: Date;
            movedOutDate: Date | null;
            unit: {
                location: string;
                unitNumber: string;
                buildingName: string | null;
                floorNumber: number | null;
            } | null;
        } | null;
        Employee: {
            employeeNumberId: string;
            hireDate: Date;
            employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
            workingHours: number;
            salary: number;
            bonus: number | null;
            Complaints: {
                title: string;
                description: string;
                status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
                submittedAt: Date;
            }[];
            Announcements: {
                title: string;
                content: string;
                publishDate: Date;
                expiryDate: Date | null;
            }[];
        } | null;
    } & {
        fullName: string;
        firstName: string;
        lastName: string;
        username: string;
        password: string;
        dateOfBirth: Date | null;
        contactNumber: string | null;
        primaryEmail: string;
        secondaryEmail: string | null;
        role: import("src/common/database/generated/prisma").$Enums.UserRole;
        gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
        id: string;
        sessionToken: string | null;
        emailVerificationToken: string | null;
        passwordResetToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateRequest: UpdateAppUserManageDto): Promise<{
        fullName: string;
        firstName: string;
        lastName: string;
        username: string;
        dateOfBirth: Date | null;
        contactNumber: string | null;
        primaryEmail: string;
        secondaryEmail: string | null;
        role: import("src/common/database/generated/prisma").$Enums.UserRole;
        gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
        id: string;
        sessionToken: string | null;
        emailVerificationToken: string | null;
        passwordResetToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        fullName: string;
        firstName: string;
        lastName: string;
        username: string;
        password: string;
        dateOfBirth: Date | null;
        contactNumber: string | null;
        primaryEmail: string;
        secondaryEmail: string | null;
        role: import("src/common/database/generated/prisma").$Enums.UserRole;
        gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
        id: string;
        sessionToken: string | null;
        emailVerificationToken: string | null;
        passwordResetToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    passwordHashing(password: string): Promise<string>;
    compare(password: string, hashedPassword: string): Promise<boolean>;
}
