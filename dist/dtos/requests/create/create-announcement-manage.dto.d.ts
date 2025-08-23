export declare class CreateAnnouncementManageDto {
    readonly title: string;
    readonly content: string;
    readonly attachments?: string[];
    readonly publishDate: Date;
    readonly expiryDate?: Date;
    readonly employeeId: string;
}
