/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { DatabaseService } from '../../../common/database/database.service';
import { RegistRequest } from '../../../dtos/requests/regist-request';
import { SignInRequest } from '../../../dtos/requests/sign-in-request';
import { ConfigService } from '@nestjs/config';
import { ResidentStatus } from '../../../common/database/generated/prisma';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { MailerManageService } from '../../../common/helper/mail/mailer-manage.service';
import { UploadsService } from 'src/common/helper/uploads/uploads.service';

@Injectable()
export class AuthService extends UploadsService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly jwt: JwtService,
    private readonly mailerService: MailerManageService, // Updated to use MailerManageService
    private readonly config: ConfigService,
  ) {
    super();
  }

  async registration(
    registRequest: RegistRequest,
    files?: Express.Multer.File[],
  ) {
    // Check if user already exists
    const existingUser = await this.prisma.users.findFirst({
      where: {
        OR: [
          { username: registRequest.username },
          { primaryEmail: registRequest.primaryEmail },
        ],
      },
    });

    if (existingUser) {
      throw new ConflictException('Username or email sudah tersedia');
    }

    // Validate family code for family members
    if (registRequest.residentType === ResidentStatus.FAMILY_MEMBERS) {
      await this.validateFamilyCode(registRequest.familyCode!);
    }

    // Validate unit ownership for head of household
    if (registRequest.residentType === ResidentStatus.HEAD_HOUSE_HOLD) {
      await this.validateUnitOwnership(registRequest.unitId);
    }
    const hashedPassword = await bcrypt.hash(registRequest.password, 12);
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const verificationCode = this.mailerService.generateVerificationCode();

    const result = await this.prisma.$transaction(async (prisma) => {
      // Create user
      const user = await prisma.users.create({
        data: {
          fullName: registRequest.fullName,
          firstName: registRequest.firstName,
          lastName: registRequest.lastName,
          username: registRequest.username,
          primaryEmail: registRequest.primaryEmail,
          password: hashedPassword,
          emailVerificationToken: verificationToken,
          role: registRequest.role,
          gender: registRequest.gender,
        },
      });

      // Create resident
      const residentData: any = {
        userId: user.id,
        fullName: registRequest.fullName,
        phoneNumber: registRequest.contactNumber,
        residentType: registRequest.residentType,
        registrationStatus: 'PENDING_VERIFICATION',
        pendingApproval:
          registRequest.residentType === ResidentStatus.FAMILY_MEMBERS,
      };

      // Add specific data based on resident type
      if (registRequest.residentType === ResidentStatus.HEAD_HOUSE_HOLD) {
        residentData.unitId = registRequest.unitId;
      } else if (registRequest.residentType === ResidentStatus.FAMILY_MEMBERS) {
        residentData.familyCode = registRequest.familyCode;
      }

      const resident = await prisma.residents.create({
        data: residentData,
        include: {
          unit: true,
          user: true,
        },
      });

      if (files && files.length > 0) {
        await this.handleDocumentUploads(
          resident.id,
          files,
          registRequest.documentTypes,
        );
      }

      if (registRequest.residentType === ResidentStatus.FAMILY_MEMBERS) {
        await this.createFamilyApprovalRequest(
          resident.id,
          registRequest.familyCode!,
        );

        // Send notification to head of household
        const familyCodeRecord = await prisma.familyCodes.findUnique({
          where: { code: registRequest.familyCode! },
          include: {
            headResident: {
              include: { user: true },
            },
          },
        });

        if (familyCodeRecord) {
          await this.mailerService.sendFamilyMemberApprovalNotification({
            headOfHouseholdName: familyCodeRecord.headResident.user.fullName,
            headOfHouseholdEmail:
              familyCodeRecord.headResident.user.primaryEmail,
            familyMemberName: resident.user.fullName,
            familyMemberEmail: user.primaryEmail,
            uniqueCode: familyCodeRecord.code,
            actionUrl: `${this.config.get('APP_URL')}/auth/family-approval`,
          });
        }
      }

      // Send verification email
      const registrationType =
        registRequest.residentType === ResidentStatus.HEAD_HOUSE_HOLD
          ? 'HEAD_HOUSE_HOLD'
          : 'FAMILY_MEMBERS';

      await this.mailerService.sendHeadOfHouseholdVerificationEmail({
        fullName: resident.user.fullName,
        email: user.primaryEmail,
        verificationCode,
        unitNumber: resident.unit?.unitNumber,
        registrationType: ResidentStatus.HEAD_HOUSE_HOLD,
        propertyName: this.config.get('PROPERTY_NAME', 'Property Management'),
        isAdminDriven: false,
      });

      return {
        message:
          'Registration successful. Please check your email for verification.',
        userId: user.id,
        residentId: resident.id,
        requiresApproval:
          registRequest.residentType === ResidentStatus.FAMILY_MEMBERS,
      };
    });

    return result;
  }

  async signIn(signInRequest: SignInRequest) {
    // Find user by username or email
    const user = await this.prisma.users.findFirst({
      where: {
        OR: [
          { username: signInRequest.identifier },
          { primaryEmail: signInRequest.identifier },
        ],
      },
      include: {
        Resident: {
          include: {
            unit: true,
          },
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(
      signInRequest.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check if email is verified
    if (user.emailVerificationToken != null) {
      throw new UnauthorizedException(
        'Please verify your email before signing in',
      );
    }

    // Check if resident is approved (for family members)
    if (user.Resident && user.Resident.registrationStatus !== 'APPROVED') {
      throw new UnauthorizedException(
        'Your registration is still pending approval',
      );
    }

    // Generate tokens
    const tokens = await this.generateTokens(user.id);

    return {
      message: 'Sign in successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.primaryEmail,
        resident: user.Resident,
      },
      ...tokens,
    };
  }

  async verifyEmail(token: string) {
    const user = await this.prisma.users.findFirst({
      where: { emailVerificationToken: token },
      include: { Resident: { include: { unit: true } } },
    });

    if (!user) {
      throw new BadRequestException('Invalid verification token');
    }

    await this.prisma.users.update({
      where: { id: user.id },
      data: {
        emailVerificationToken: null,
      },
    });

    // Send welcome email after verification
    if (user.Resident) {
      const registrationType =
        user.Resident.residentStatus === ResidentStatus.HEAD_HOUSE_HOLD
          ? 'HEAD_HOUSE_HOLD'
          : 'FAMILY_MEMBERS';

      const uniqueCode = this.mailerService.generateUniqueCode();

      await this.mailerService.sendHeadOfHouseholdWelcomeEmail({
        fullName: user.fullName,
        email: user.primaryEmail,
        uniqueCode,
        loginUrl: `${this.config.get('APP_URL')}/auth/sign-in`,
        propertyName: this.config.get('PROPERTY_NAME', 'Property Management'),
        unitNumber: user.Resident?.unit?.unitNumber ?? 'Unit tidak ditemukan',
      });
    }

    return {
      message: 'Email verified successfully. You can now sign in.',
    };
  }

  async generateTokens(userId: string) {
    const payload = { sub: userId };

    const accessToken = await this.jwt.signAsync(payload, {
      expiresIn: '1h',
    });

    const refreshToken = await this.jwt.signAsync(payload, {
      expiresIn: '7d',
    });

    // Store session token
    await this.prisma.users.update({
      where: { id: userId },
      data: { sessionToken: refreshToken },
    });

    return { accessToken, refreshToken };
  }

  async jwtCompare(token: string, userId: string): Promise<boolean> {
    try {
      const decoded = await this.jwt.verifyAsync(token);
      return decoded.sub === userId;
    } catch {
      return false;
    }
  }

  async approvalSystem(approvalRequest: {
    familyApprovalId: string;
    headOfHouseholdId: string;
    action: 'APPROVE' | 'REJECT';
    notes?: string;
  }) {
    const approval = await this.prisma.familyApprovals.findUnique({
      where: { id: approvalRequest.familyApprovalId },
      include: {
        familyMember: {
          include: { user: true },
        },
        headOfHousehold: {
          include: { user: true },
        },
      },
    });

    if (!approval) {
      throw new BadRequestException('Approval request not found');
    }

    if (approval.headOfHouseholdId !== approvalRequest.headOfHouseholdId) {
      throw new UnauthorizedException('Not authorized to approve this request');
    }

    const result = await this.prisma.$transaction(async (prisma) => {
      // Update approval status
      const updatedApproval = await prisma.familyApprovals.update({
        where: { id: approvalRequest.familyApprovalId },
        data: {
          status:
            approvalRequest.action === 'APPROVE' ? 'APPROVED' : 'REJECTED',
          respondedAt: new Date(),
          notes: approvalRequest.notes,
        },
      });

      // Update resident status if approved
      if (approvalRequest.action === 'APPROVE') {
        await prisma.residents.update({
          where: { id: approval.familyMemberId },
          data: {
            registrationStatus: 'APPROVED',
            pendingApproval: false,
            approvedByHeadOfHousehold: approvalRequest.headOfHouseholdId,
          },
        });

        // Generate family code if head of household doesn't have one yet
        const familyCode = await this.ensureFamilyCode(
          approval.headOfHouseholdId,
        );

        await prisma.residents.update({
          where: { id: approval.familyMemberId },
          data: { familyCode },
        });

        // Send welcome email to approved family member
        const uniqueCode = this.mailerService.generateUniqueCode();
        await this.mailerService.sendFamilyMemberWelcomeEmail({
          fullName: approval.familyMember.user.fullName,
          email: approval.familyMember.user.primaryEmail,
          uniqueCode,
          loginUrl: `${this.config.get('APP_URL')}/auth/sign-in`,
          propertyName: this.config.get('PROPERTY_NAME', 'Property Management'),
          unitNumber: '', // Family members don't have direct unit assignment
        });
      } else {
        await prisma.residents.update({
          where: { id: approval.familyMemberId },
          data: {
            registrationStatus: 'REJECTED',
            pendingApproval: false,
          },
        });

        // Send rejection notification
        await this.mailerService.sendFamilyMemberRejectionNotification(
          approval.familyMember.user.primaryEmail,
          approval.familyMember.user.fullName,
          approval.headOfHousehold.user.fullName,
          approvalRequest.notes,
        );
      }

      return updatedApproval;
    });

    return {
      message: `Family member ${approvalRequest.action === 'APPROVE' ? 'approved' : 'rejected'} successfully`,
      approval: result,
    };
  }

  private async validateFamilyCode(familyCode: string) {
    const family = await this.prisma.familyCodes.findUnique({
      where: { code: familyCode, isActive: true },
    });

    if (!family) {
      throw new BadRequestException('Invalid family code');
    }

    const memberCount = await this.prisma.residents.count({
      where: { familyCode },
    });

    if (memberCount >= family.maxMembers) {
      throw new BadRequestException(
        'Family has reached maximum number of members',
      );
    }
  }

  private async validateUnitOwnership(unitId: string) {
    const unit = await this.prisma.units.findUnique({
      where: { id: unitId },
    });

    if (!unit) {
      throw new BadRequestException('Unit not found');
    }

    if (unit.status !== 'OCCUPIED') {
      throw new BadRequestException('Unit is not available');
    }
  }

  private async handleDocumentUploads(
    residentId: string,
    files: Express.Multer.File[],
    documentTypes?: string[],
  ) {
    // This would integrate with your file storage service (AWS S3, etc.)
    const uploadPromises = files.map(async (file, index) => {
      const documentType = documentTypes?.[index] || 'ID_CARD';

      // Save to storage and get URL
      const fileUrl = this.saveFileToStorage(file);

      return this.prisma.residentDocuments.create({
        data: {
          residentId,
          documentType: documentType as any,
          fileName: file.originalname,
          fileUrl,
          fileSize: file.size,
          isVerified: false,
        },
      });
    });

    return Promise.all(uploadPromises);
  }

  private async createFamilyApprovalRequest(
    residentId: string,
    familyCode: string,
  ) {
    const familyCodeRecord = await this.prisma.familyCodes.findUnique({
      where: { code: familyCode },
    });

    return this.prisma.familyApprovals.create({
      data: {
        familyMemberId: residentId,
        headOfHouseholdId: (familyCodeRecord ?? {}).headOfHousehold!,
        notes: 'Pending approval from head of household',
      },
    });
  }

  private async ensureFamilyCode(headOfHouseholdId: string): Promise<string> {
    const existing = await this.prisma.familyCodes.findFirst({
      where: { headOfHousehold: headOfHouseholdId },
    });

    if (existing) {
      return existing.code;
    }

    // Generate new family code
    const code = this.generateUniqueFamilyCode();
    const familyCode = await this.prisma.familyCodes.create({
      data: {
        code,
        headOfHousehold: headOfHouseholdId,
        isActive: true,
        maxMembers: 10, // Default max members
      },
    });

    return familyCode.code;
  }

  private generateUniqueFamilyCode(): string {
    return 'FAM-' + crypto.randomBytes(4).toString('hex').toUpperCase();
  }

  private saveFileToStorage(files: Express.Multer.File): string {
    return this.processSingleFiles(files);
  }
}
