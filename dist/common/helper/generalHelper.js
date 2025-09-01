"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralHelper = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let GeneralHelper = class GeneralHelper {
    folderPath;
    constructor() {
        this.folderPath = 'src/common/uploads/';
    }
    twoDecimal(input) {
        return parseFloat((input * 100).toFixed(2));
    }
    static FileDictionary = {
        'image/jpg': 'images',
        'image/png': 'images',
        'image/jpeg': 'images',
        'application/pdf': 'documents/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'documents/docx',
        'application/msword': 'documents/doc',
        'text/plain': 'documents/txt',
        'text/csv': 'documents/csv',
        'application/vnd.ms-excel.sheet.macroenabled.12': 'documents/xlsx',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'documents/xlsx',
    };
    static getFolderExtension(mimetype) {
        const mime = mimetype.toLowerCase();
        if (mime in this.FileDictionary) {
            return this.FileDictionary[mime];
        }
        return 'others';
    }
    static ensureDirectoryExists(dirPath) {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
    }
    getFolderPath() {
        return this.folderPath;
    }
    static getFullFilePath(relativePath) {
        return path.join(process.cwd(), 'src/common/uploads', relativePath);
    }
    static fileExists(relativePath) {
        const fullPath = this.getFullFilePath(relativePath);
        return fs.existsSync(fullPath);
    }
    static getFileSize(relativePath) {
        const fullPath = this.getFullFilePath(relativePath);
        if (fs.existsSync(fullPath)) {
            const stats = fs.statSync(fullPath);
            return stats.size;
        }
        return 0;
    }
    static deleteFile(relativePath) {
        try {
            const fullPath = this.getFullFilePath(relativePath);
            if (fs.existsSync(fullPath)) {
                fs.unlinkSync(fullPath);
                return true;
            }
            return false;
        }
        catch (error) {
            console.error('Error deleting file:', error);
            return false;
        }
    }
    static async deleteFileAsync(relativePath) {
        try {
            const fullPath = this.getFullFilePath(relativePath);
            if (fs.existsSync(fullPath)) {
                await fs.promises.unlink(fullPath);
                return true;
            }
            return false;
        }
        catch (error) {
            console.error('Error deleting file:', error);
            return false;
        }
    }
};
exports.GeneralHelper = GeneralHelper;
exports.GeneralHelper = GeneralHelper = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GeneralHelper);
//# sourceMappingURL=generalHelper.js.map