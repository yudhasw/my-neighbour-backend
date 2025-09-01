export declare const multerOptions: {
    limits: {
        fileSize: number;
        files: number;
    };
    fileFilter: (req: any, file: Express.Multer.File, cb: any) => void;
    storage: import("multer").StorageEngine;
};
export declare class AnnouncementManageModule {
}
