import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import {
  DocumentVerificationData,
  FamilyMemberNotificationData,
  RegistrationEmailData,
  WelcomeEmailData,
} from './mail-interface';

@Injectable()
export class MailerManageService {
  private readonly logger = new Logger(MailerManageService.name);
  constructor(private readonly mailService: MailerService) {}

  async sendHeadOfHouseholdVerificationEmail(
    data: RegistrationEmailData,
  ): Promise<boolean> {
    try {
      await this.mailService.sendMail({
        to: data.email,
        subject:
          'Verifikasi Registrasi Kepala Keluarga - ' +
          (data.propertyName || 'Property Management'),
        template: 'head-household-verification',
        context: {
          fullName: data.fullName,
          verificationCode: data.verificationCode,
          unitNumber: data.unitNumber,
          propertyName: data.propertyName,
          year: new Date().getFullYear(),
        },
      });

      this.logger.log(
        `Head of household verification email sent to ${data.email}`,
      );
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to send head of household verification email: ${(error as Error).message}`,
      );
      return false;
    }
  }

  async sendDocumentVerificationRequestToAdmin(
    data: DocumentVerificationData,
  ): Promise<boolean> {
    try {
      await this.mailService.sendMail({
        to: data.adminEmail,
        subject: `Review Dokumen - ${data.applicantName}`,
        template: 'admin-document-review',
        context: {
          applicantName: data.applicantName,
          applicantEmail: data.applicantEmail,
          documentType: data.documentType,
          submissionDate: data.submissionDate,
          reviewUrl: data.reviewUrl,
          year: new Date().getFullYear(),
        },
      });

      this.logger.log(
        `Document verification request sent to admin ${data.adminEmail}`,
      );
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to send document verification request: ${(error as Error).message}`,
      );
      return false;
    }
  }

  async sendHeadOfHouseholdWelcomeEmail(
    data: WelcomeEmailData,
  ): Promise<boolean> {
    try {
      await this.mailService.sendMail({
        to: data.email,
        subject: 'Selamat Datang! Registrasi Berhasil',
        template: 'head-household-welcome',
        context: {
          fullName: data.fullName,
          uniqueCode: data.uniqueCode,
          loginUrl: data.loginUrl,
          propertyName: data.propertyName,
          unitNumber: data.unitNumber,
          year: new Date().getFullYear(),
        },
      });

      this.logger.log(`Head of household welcome email sent to ${data.email}`);
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to send head of household welcome email: ${(error as Error).message}`,
      );
      return false;
    }
  }

  async sendFamilyMemberVerificationEmail(
    data: RegistrationEmailData,
  ): Promise<boolean> {
    try {
      await this.mailService.sendMail({
        to: data.email,
        subject: 'Verifikasi Registrasi Anggota Keluarga',
        template: 'family-member-verification',
        context: {
          fullName: data.fullName,
          verificationCode: data.verificationCode,
          propertyName: data.propertyName,
          isAdminDriven: data.isAdminDriven,
          year: new Date().getFullYear(),
        },
      });

      this.logger.log(`Family member verification email sent to ${data.email}`);
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to send family member verification email: ${(error as Error).message}`,
      );
      return false;
    }
  }

  async sendFamilyMemberApprovalNotification(
    data: FamilyMemberNotificationData,
  ): Promise<boolean> {
    try {
      await this.mailService.sendMail({
        to: data.headOfHouseholdEmail,
        subject: 'Persetujuan Diperlukan - Anggota Keluarga Baru',
        template: 'family-member-approval-notification',
        context: {
          headOfHouseholdName: data.headOfHouseholdName,
          familyMemberName: data.familyMemberName,
          familyMemberEmail: data.familyMemberEmail,
          uniqueCode: data.uniqueCode,
          actionUrl: data.actionUrl,
          year: new Date().getFullYear(),
        },
      });

      this.logger.log(
        `Family member approval notification sent to ${data.headOfHouseholdEmail}`,
      );
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to send family member approval notification: ${(error as Error).message}`,
      );
      return false;
    }
  }

  async sendFamilyMemberWelcomeEmail(data: WelcomeEmailData): Promise<boolean> {
    try {
      await this.mailService.sendMail({
        to: data.email,
        subject: 'Selamat Datang! Registrasi Anggota Keluarga Berhasil',
        template: 'family-member-welcome',
        context: {
          fullName: data.fullName,
          uniqueCode: data.uniqueCode,
          loginUrl: data.loginUrl,
          propertyName: data.propertyName,
          unitNumber: data.unitNumber,
          year: new Date().getFullYear(),
        },
      });

      this.logger.log(`Family member welcome email sent to ${data.email}`);
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to send family member welcome email: ${(error as Error).message}`,
      );
      return false;
    }
  }

  async sendAdminDrivenHeadOfHouseholdEmail(
    data: RegistrationEmailData,
  ): Promise<boolean> {
    try {
      await this.mailService.sendMail({
        to: data.email,
        subject:
          'Akun Anda Telah Dibuat - ' +
          (data.propertyName || 'Property Management'),
        template: 'admin-driven-head-household',
        context: {
          fullName: data.fullName,
          verificationCode: data.verificationCode,
          unitNumber: data.unitNumber,
          propertyName: data.propertyName,
          year: new Date().getFullYear(),
        },
      });

      this.logger.log(
        `Admin-driven head of household email sent to ${data.email}`,
      );
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to send admin-driven head of household email: ${(error as Error).message}`,
      );
      return false;
    }
  }

  async sendAdminDrivenFamilyMemberEmail(
    data: RegistrationEmailData,
  ): Promise<boolean> {
    try {
      await this.mailService.sendMail({
        to: data.email,
        subject: 'Akun Anggota Keluarga Telah Dibuat',
        template: 'admin-driven-family-member',
        context: {
          fullName: data.fullName,
          verificationCode: data.verificationCode,
          propertyName: data.propertyName,
          year: new Date().getFullYear(),
        },
      });

      this.logger.log(`Admin-driven family member email sent to ${data.email}`);
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to send admin-driven family member email: ${(error as Error).message}`,
      );
      return false;
    }
  }

  async sendFamilyMemberRejectionNotification(
    familyMemberEmail: string,
    familyMemberName: string,
    headOfHouseholdName: string,
    reason?: string,
  ): Promise<boolean> {
    try {
      await this.mailService.sendMail({
        to: familyMemberEmail,
        subject: 'Registrasi Ditolak',
        template: 'family-member-rejection',
        context: {
          familyMemberName,
          headOfHouseholdName,
          reason: reason || 'Tidak memenuhi kriteria keluarga',
          year: new Date().getFullYear(),
        },
      });

      this.logger.log(
        `Family member rejection notification sent to ${familyMemberEmail}`,
      );
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to send family member rejection notification: ${(error as Error).message}`,
      );
      return false;
    }
  }

  async sendDocumentApprovalNotification(
    applicantEmail: string,
    applicantName: string,
    documentType: string,
  ): Promise<boolean> {
    try {
      await this.mailService.sendMail({
        to: applicantEmail,
        subject: `Dokumen ${documentType} Telah Diverifikasi`,
        template: 'document-approval',
        context: {
          applicantName,
          documentType,
          year: new Date().getFullYear(),
        },
      });

      this.logger.log(
        `Document approval notification sent to ${applicantEmail}`,
      );
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to send document approval notification: ${(error as Error).message}`,
      );
      return false;
    }
  }

  generateVerificationCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  generateUniqueCode(): string {
    const date = new Date();
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.floor(100 + Math.random() * 900);
    return `HH-${dateStr}-${random}`;
  }
}
