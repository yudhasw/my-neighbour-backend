"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementManageModule = exports.multerOptions = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const fs_1 = require("fs");
const announcement_manage_service_1 = require("./announcement-manage.service");
const announcement_manage_controller_1 = require("./announcement-manage.controller");
const database_service_1 = require("../../../common/database/database.service");
const generalHelper_1 = require("../../../common/helper/generalHelper");
const employee_manage_module_1 = require("../../../modules/user-manage-module/employee-module/employee-manage.module");
const uploads_configuration_1 = require("../../../common/helper/uploads/uploads-configuration");
exports.multerOptions = {
    limits: {
        fileSize: 10 * 1024 * 1024,
        files: 5,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimetypes = [
            'image/jpg',
            'image/png',
            'image/jpeg',
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/msword',
            'text/plain',
            'text/csv',
            'application/vnd.ms-excel.sheet.macroenabled.12',
        ];
        if (allowedMimetypes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error(`File type ${file.mimetype} not allowed`), false);
        }
    },
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const folderPath = generalHelper_1.GeneralHelper.getFolderExtension(file.mimetype);
            const fullPath = `src/common/uploads/${folderPath}`;
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
            const folderPath = generalHelper_1.GeneralHelper.getFolderExtension(file.mimetype);
            const fullFilePath = `src/common/uploads/${folderPath}/${newFileName}`;
            if ((0, fs_1.existsSync)(fullFilePath)) {
                const extraRandom = Math.random().toString(36).substring(7);
                const finalFileName = `${sanitizedName}-${uniqueSuffix}-${extraRandom}${fileExtension}`;
                cb(null, finalFileName);
            }
            else {
                cb(null, newFileName);
            }
        },
    }),
};
let AnnouncementManageModule = class AnnouncementManageModule {
};
exports.AnnouncementManageModule = AnnouncementManageModule;
exports.AnnouncementManageModule = AnnouncementManageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            employee_manage_module_1.EmployeeManageModule,
            platform_express_1.MulterModule.register(uploads_configuration_1.UploadsConfiguration.announcementConfig),
        ],
        controllers: [announcement_manage_controller_1.AnnouncementManageController],
        providers: [announcement_manage_service_1.AnnouncementManageService, database_service_1.DatabaseService, generalHelper_1.GeneralHelper],
        exports: [announcement_manage_service_1.AnnouncementManageService],
    })
], AnnouncementManageModule);
//# sourceMappingURL=announcement-manage.module.js.map