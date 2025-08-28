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
let GeneralHelper = class GeneralHelper {
    folderPath;
    constructor(folderPath = 'src/common/uploads/') {
        this.folderPath = folderPath;
    }
    twoDecimal(input) {
        return parseFloat((input * 100).toFixed(2));
    }
    static FileDictionary = {
        'image/jpg': 'image',
        'image/png': 'image',
        'image/jpeg': 'image',
        'application/pdf': 'document/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'document/docx',
        'application/msword': 'document/docx',
        'text/plain': 'document/txt',
        'text/csv': 'document/xlsx_csv',
        'application/vnd.ms-excel.sheet.macroenabled.12': 'document/xlsx_csv',
    };
    static getFolderExtension(mimetype) {
        const mime = mimetype.toLowerCase();
        if (mime in this.FileDictionary) {
            return this.FileDictionary[mime];
        }
        return 'others';
    }
    static ensureDirectoryExists(path) {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true });
        }
    }
};
exports.GeneralHelper = GeneralHelper;
exports.GeneralHelper = GeneralHelper = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], GeneralHelper);
//# sourceMappingURL=generalHelper.js.map