import { AppUserManageService } from './app-user-manage.service';
import { CreateAppUserManageDto } from '../../../dtos/requests/create/create-app-user-manage.dto';
import { UpdateAppUserManageDto } from '../../../dtos/requests/update/update-app-user-manage.dto';
export declare class AppUserManageController {
    private readonly appUserManageService;
    constructor(appUserManageService: AppUserManageService);
    create(createAppUserManageDto: CreateAppUserManageDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fullName: string;
        firstName: string;
        lastName: string;
        username: string;
        dateOfBirth: Date | null;
        contactNumber: string | null;
        primaryEmail: string;
        secondaryEmail: string | null;
        sessionToken: string | null;
        emailVerificationToken: string | null;
        passwordResetToken: string | null;
        role: import("src/common/database/generated/prisma").$Enums.UserRole;
        gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            ForumPosts: number;
            ForumComments: number;
        };
        fullName: string;
        firstName: string;
        lastName: string;
        username: string;
        primaryEmail: string;
        secondaryEmail: string | null;
        role: import("src/common/database/generated/prisma").$Enums.UserRole;
        gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
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
                unitNumber: string;
                buildingName: string | null;
                floorNumber: number | null;
                location: string;
            } | null;
        } | null;
        Employee: {
            employeeNumberId: string;
            hireDate: Date;
            employeePosition: import("src/common/database/generated/prisma").$Enums.EmployeeRole;
            workingHours: number;
            salary: number;
            bonus: number | null;
            Announcements: {
                title: string;
                content: string;
                publishDate: Date;
                expiryDate: Date | null;
            }[];
            Complaints: {
                title: string;
                description: string;
                status: import("src/common/database/generated/prisma").$Enums.ComplaintStatus;
                submittedAt: Date;
            }[];
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fullName: string;
        firstName: string;
        lastName: string;
        username: string;
        dateOfBirth: Date | null;
        contactNumber: string | null;
        primaryEmail: string;
        secondaryEmail: string | null;
        passwordHash: string;
        sessionToken: string | null;
        emailVerificationToken: string | null;
        passwordResetToken: string | null;
        role: import("src/common/database/generated/prisma").$Enums.UserRole;
        gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
    }>;
    update(id: string, updateAppUserManageDto: UpdateAppUserManageDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fullName: string;
        firstName: string;
        lastName: string;
        username: string;
        dateOfBirth: Date | null;
        contactNumber: string | null;
        primaryEmail: string;
        secondaryEmail: string | null;
        sessionToken: string | null;
        emailVerificationToken: string | null;
        passwordResetToken: string | null;
        role: import("src/common/database/generated/prisma").$Enums.UserRole;
        gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fullName: string;
        firstName: string;
        lastName: string;
        username: string;
        dateOfBirth: Date | null;
        contactNumber: string | null;
        primaryEmail: string;
        secondaryEmail: string | null;
        passwordHash: string;
        sessionToken: string | null;
        emailVerificationToken: string | null;
        passwordResetToken: string | null;
        role: import("src/common/database/generated/prisma").$Enums.UserRole;
        gender: import("src/common/database/generated/prisma").$Enums.Gender | null;
    }>;
}
