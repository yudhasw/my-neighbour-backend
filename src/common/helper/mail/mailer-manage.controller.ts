import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { MailerManageService } from './mailer-manage.service';
import {
  DocumentVerificationData,
  RegistrationEmailData,
  WelcomeEmailData,
} from './mail-interface';

export class SendVerificationEmailDto {
  fullName: string;
  email: string;
  registrationType: 'head-of-household' | 'family-member';
  unitNumber?: string;
  propertyName?: string;
  isAdminDriven?: boolean;
}

export class SendApprovalNotificationDto {
  headOfHouseholdName: string;
  headOfHouseholdEmail: string;
  familyMemberName: string;
  familyMemberEmail: string;
  uniqueCode: string;
  actionUrl: string;
}

export class SendDocumentReviewDto {
  applicantName: string;
  applicantEmail: string;
  adminName: string;
  adminEmail: string;
  documentType: 'AJB' | 'SHM' | 'KPR';
  reviewUrl: string;
}

@Controller()
export class MailerManageController {
  constructor(private readonly mailerManageService: MailerManageService) {}

  @Post('send-verification')
  async sendVerificationEmail(@Body() dto: SendVerificationEmailDto) {
    try {
      const verificationCode =
        this.mailerManageService.generateVerificationCode();

      const emailData: RegistrationEmailData = {
        ...dto,
        verificationCode,
      };

      let result: boolean;

      if (dto.registrationType === 'head-of-household') {
        if (dto.isAdminDriven) {
          result =
            await this.mailerManageService.sendAdminDrivenHeadOfHouseholdEmail(
              emailData,
            );
        } else {
          result =
            await this.mailerManageService.sendHeadOfHouseholdVerificationEmail(
              emailData,
            );
        }
      } else {
        if (dto.isAdminDriven) {
          result =
            await this.mailerManageService.sendAdminDrivenFamilyMemberEmail(
              emailData,
            );
        } else {
          result =
            await this.mailerManageService.sendFamilyMemberVerificationEmail(
              emailData,
            );
        }
      }

      if (!result) {
        throw new HttpException(
          'Failed to send verification email',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: 'Verification email sent successfully',
        verificationCode, // Return for system use
      };
    } catch (error) {
      throw new HttpException(
        (error as Error).message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('send-document-review')
  async sendApprovalNotification(@Body() dto: SendApprovalNotificationDto) {
    try {
      const result =
        await this.mailerManageService.sendFamilyMemberApprovalNotification(
          dto,
        );

      if (!result) {
        throw new HttpException(
          'Failed to send approval notification',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: 'Approval notification sent successfully',
      };
    } catch (error) {
      throw new HttpException(
        (error as Error).message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async sendDocumentReview(@Body() dto: SendDocumentReviewDto) {
    try {
      const reviewData: DocumentVerificationData = {
        ...dto,
        submissionDate: new Date().toLocaleDateString('id-ID'),
      };

      const result =
        await this.mailerManageService.sendDocumentVerificationRequestToAdmin(
          reviewData,
        );

      if (!result) {
        throw new HttpException(
          'Failed to send document review request',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: 'Document review request sent successfully',
      };
    } catch (error) {
      throw new HttpException(
        (error as Error).message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('send-welcome')
  async sendWelcomeEmail(
    @Body()
    body: {
      fullName: string;
      email: string;
      registrationType: 'head-of-household' | 'family-member';
      propertyName: string;
      unitNumber: string;
      loginUrl: string;
    },
  ) {
    try {
      const uniqueCode = this.mailerManageService.generateUniqueCode();

      const welcomeData: WelcomeEmailData = {
        ...body,
        uniqueCode,
      };

      let result: boolean;

      if (body.registrationType === 'head-of-household') {
        result =
          await this.mailerManageService.sendHeadOfHouseholdWelcomeEmail(
            welcomeData,
          );
      } else {
        result =
          await this.mailerManageService.sendFamilyMemberWelcomeEmail(
            welcomeData,
          );
      }

      if (!result) {
        throw new HttpException(
          'Failed to send welcome email',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: 'Welcome email sent successfully',
        uniqueCode, // Return for system use
      };
    } catch (error) {
      throw new HttpException(
        (error as Error).message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
