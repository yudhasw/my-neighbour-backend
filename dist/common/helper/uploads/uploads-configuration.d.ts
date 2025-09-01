import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
export interface UploadConfig {
    maxFileSize?: number;
    maxFiles?: number;
    allowedMimetypes?: string[];
    subFolder?: string;
}
export declare class UploadsConfiguration {
    static createConfig(config?: UploadConfig): MulterOptions;
    static get announcementConfig(): MulterOptions;
    static get employeeConfig(): MulterOptions;
    static get documentConfig(): MulterOptions;
    static get imageConfig(): MulterOptions;
}
