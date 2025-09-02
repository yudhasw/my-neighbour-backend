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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementManageController = void 0;
const common_1 = require("@nestjs/common");
const announcement_manage_service_1 = require("./announcement-manage.service");
const create_announcement_manage_dto_1 = require("../../../dtos/requests/create/create-announcement-manage.dto");
const update_announcement_manage_dto_1 = require("../../../dtos/requests/update/update-announcement-manage.dto");
const platform_express_1 = require("@nestjs/platform-express");
let AnnouncementManageController = class AnnouncementManageController {
    announcementManageService;
    constructor(announcementManageService) {
        this.announcementManageService = announcementManageService;
    }
    create(createAnnouncementManageDto, files) {
        return this.announcementManageService.create(createAnnouncementManageDto, files);
    }
    findAll() {
        return this.announcementManageService.findAll();
    }
    findOne(id) {
        return this.announcementManageService.findOne(id);
    }
    update(id, updateAnnouncementManageDto, files) {
        return this.announcementManageService.update(id, updateAnnouncementManageDto, files);
    }
    remove(id) {
        return this.announcementManageService.remove(id);
    }
};
exports.AnnouncementManageController = AnnouncementManageController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('attachments', 5)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_announcement_manage_dto_1.CreateAnnouncementManageDto, Array]),
    __metadata("design:returntype", void 0)
], AnnouncementManageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnnouncementManageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnnouncementManageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('attachments', 5)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_announcement_manage_dto_1.UpdateAnnouncementManageDto, Array]),
    __metadata("design:returntype", void 0)
], AnnouncementManageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnnouncementManageController.prototype, "remove", null);
exports.AnnouncementManageController = AnnouncementManageController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [announcement_manage_service_1.AnnouncementManageService])
], AnnouncementManageController);
//# sourceMappingURL=announcement-manage.controller.js.map