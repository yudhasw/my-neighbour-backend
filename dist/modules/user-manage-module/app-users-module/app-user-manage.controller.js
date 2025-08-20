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
exports.AppUserManageController = void 0;
const common_1 = require("@nestjs/common");
const app_user_manage_service_1 = require("./app-user-manage.service");
const create_app_user_manage_dto_1 = require("../../../dtos/requests/create/create-app-user-manage.dto");
const update_app_user_manage_dto_1 = require("../../../dtos/requests/update/update-app-user-manage.dto");
let AppUserManageController = class AppUserManageController {
    appUserManageService;
    constructor(appUserManageService) {
        this.appUserManageService = appUserManageService;
    }
    create(createAppUserManageDto) {
        return this.appUserManageService.create(createAppUserManageDto);
    }
    findAll() {
        return this.appUserManageService.findAll();
    }
    findOne(id) {
        return this.appUserManageService.findOne(id);
    }
    update(id, updateAppUserManageDto) {
        return this.appUserManageService.update(id, updateAppUserManageDto);
    }
    remove(id) {
        return this.appUserManageService.remove(id);
    }
};
exports.AppUserManageController = AppUserManageController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_app_user_manage_dto_1.CreateAppUserManageDto]),
    __metadata("design:returntype", void 0)
], AppUserManageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppUserManageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppUserManageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_app_user_manage_dto_1.UpdateAppUserManageDto]),
    __metadata("design:returntype", void 0)
], AppUserManageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppUserManageController.prototype, "remove", null);
exports.AppUserManageController = AppUserManageController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_user_manage_service_1.AppUserManageService])
], AppUserManageController);
//# sourceMappingURL=app-user-manage.controller.js.map