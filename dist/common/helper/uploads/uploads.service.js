"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsService = void 0;
const common_1 = require("@nestjs/common");
const generalHelper_1 = require("../generalHelper");
let UploadsService = class UploadsService {
    processFiles(files) {
        if (!files || files.length === 0)
            return [];
        return files.map((file) => {
            const folderPath = generalHelper_1.GeneralHelper.getFolderExtension(file.mimetype);
            return `${folderPath}/${file.filename}`;
        });
    }
    processFilesWithMetadata(files) {
        if (!files || files.length === 0)
            return [];
        return files.map((file) => {
            const folderPath = generalHelper_1.GeneralHelper.getFolderExtension(file.mimetype);
            return {
                path: `${folderPath}/${file.filename}`,
                originalName: file.originalname,
                size: file.size,
                mimetype: file.mimetype,
                uploadedAt: new Date(),
            };
        });
    }
    safeParseAttachments(attachments) {
        if (!attachments)
            return [];
        if (Array.isArray(attachments)) {
            return attachments
                .map((item) => typeof item === 'string' ? item : item.path || '')
                .filter(Boolean);
        }
        if (typeof attachments === 'string') {
            try {
                const parsed = JSON.parse(attachments);
                if (Array.isArray(parsed)) {
                    return parsed
                        .map((item) => typeof item === 'string'
                        ? item
                        : item.path || '')
                        .filter(Boolean);
                }
            }
            catch (error) {
                console.error('Error parsing attachments JSON:', error);
            }
        }
        return [];
    }
    async deletePhysicalFiles(attachments) {
        const attachmentPaths = this.safeParseAttachments(attachments);
        for (const filePath of attachmentPaths) {
            try {
                await generalHelper_1.GeneralHelper.deleteFileAsync(filePath);
            }
            catch (error) {
                console.error(`Error deleting file ${filePath}:`, error);
            }
        }
    }
    getFileInfo(attachments) {
        const attachmentPaths = this.safeParseAttachments(attachments);
        return attachmentPaths.map((path) => ({
            path,
            exists: generalHelper_1.GeneralHelper.fileExists(path),
            size: generalHelper_1.GeneralHelper.getFileSize(path),
        }));
    }
    mergeAttachments(existingAttachments, newFiles, replaceExisting = false) {
        const newPaths = this.processFiles(newFiles);
        if (replaceExisting || !existingAttachments) {
            return newPaths;
        }
        const existingPaths = this.safeParseAttachments(existingAttachments);
        return [...existingPaths, ...newPaths];
    }
};
exports.UploadsService = UploadsService;
exports.UploadsService = UploadsService = __decorate([
    (0, common_1.Injectable)()
], UploadsService);
//# sourceMappingURL=uploads.service.js.map