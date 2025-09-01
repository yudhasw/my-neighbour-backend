export interface FileAttachment {
    path: string;
    originalName: string;
    size: number;
    mimetype: string;
    uploadedAt: Date;
}
export declare class UploadsService {
    protected processFiles(files?: Express.Multer.File[]): string[];
    protected processFilesWithMetadata(files?: Express.Multer.File[]): FileAttachment[];
    protected safeParseAttachments(attachments: unknown): string[];
    protected deletePhysicalFiles(attachments: unknown): Promise<void>;
    protected getFileInfo(attachments: unknown): Array<{
        path: string;
        exists: boolean;
        size: number;
    }>;
    protected mergeAttachments(existingAttachments: unknown, newFiles?: Express.Multer.File[], replaceExisting?: boolean): string[];
}
