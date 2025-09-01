"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsConfiguration = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
const path_1 = require("path");
const generalHelper_1 = require("../generalHelper");
class UploadsConfiguration {
    static createConfig(config = {}) {
        const { maxFileSize = 10 * 1024 * 1024, maxFiles = 5, allowedMimetypes = [
            'image/jpg',
            'image/png',
            'image/jpeg',
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/msword',
            'text/plain',
            'text/csv',
            'application/vnd.ms-excel.sheet.macroenabled.12',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ], subFolder = '', } = config;
        return {
            limits: {
                fileSize: maxFileSize,
                files: maxFiles,
            },
            fileFilter: (req, file, cb) => {
                if (allowedMimetypes.includes(file.mimetype)) {
                    cb(null, true);
                }
                else {
                    cb(new common_1.BadRequestException(`File type ${file.mimetype} tidak diizinkan`), false);
                }
            },
            storage: (0, multer_1.diskStorage)({
                destination: (req, file, cb) => {
                    const folderPath = generalHelper_1.GeneralHelper.getFolderExtension(file.mimetype);
                    const fullPath = subFolder
                        ? `src/common/uploads/${subFolder}/${folderPath}`
                        : `src/common/uploads/${folderPath}`;
                    generalHelper_1.GeneralHelper.ensureDirectoryExists(fullPath);
                    cb(null, fullPath);
                },
                filename: (req, file, cb) => {
                    const originalName = file.originalname;
                    const fileExtension = (0, path_1.extname)(originalName);
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const sanitizedName = originalName
                        .replace(fileExtension, '')
                        .replace(/[^a-zA-Z0-9]/g, '_');
                    const newFileName = `${sanitizedName}-${uniqueSuffix}${fileExtension}`;
                    cb(null, newFileName);
                },
            }),
        };
    }
    static get announcementConfig() {
        return this.createConfig({
            maxFileSize: 10 * 1024 * 1024,
            maxFiles: 5,
            subFolder: 'announcements',
        });
    }
    static get employeeConfig() {
        return this.createConfig({
            maxFileSize: 5 * 1024 * 1024,
            maxFiles: 3,
            allowedMimetypes: ['image/jpg', 'image/png', 'image/jpeg'],
            subFolder: 'employees',
        });
    }
    static get documentConfig() {
        return this.createConfig({
            maxFileSize: 50 * 1024 * 1024,
            maxFiles: 10,
            allowedMimetypes: [
                'application/pdf',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'text/plain',
            ],
            subFolder: 'documents',
        });
    }
    static get imageConfig() {
        return this.createConfig({
            maxFileSize: 5 * 1024 * 1024,
            maxFiles: 10,
            allowedMimetypes: ['image/jpg', 'image/png', 'image/jpeg'],
            subFolder: 'images',
        });
    }
}
exports.UploadsConfiguration = UploadsConfiguration;
//# sourceMappingURL=uploads-configuration.js.map