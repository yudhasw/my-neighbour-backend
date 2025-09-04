export interface RegistrationEmailData {
  fullName: string;
  email: string;
  verificationCode: string;
  unitNumber?: string;
  propertyName?: string;
  registrationType: string;
  isAdminDriven?: boolean;
}

export interface FamilyMemberNotificationData {
  headOfHouseholdName: string;
  headOfHouseholdEmail: string;
  familyMemberName: string;
  familyMemberEmail: string;
  uniqueCode: string;
  actionUrl: string;
}

export interface DocumentVerificationData {
  applicantName: string;
  applicantEmail: string;
  adminName: string;
  adminEmail: string;
  documentType: 'AJB' | 'SHM' | 'KPR';
  submissionDate: string;
  reviewUrl: string;
}

export interface WelcomeEmailData {
  fullName: string;
  email: string;
  uniqueCode: string;
  loginUrl: string;
  propertyName: string;
  unitNumber: string;
}
