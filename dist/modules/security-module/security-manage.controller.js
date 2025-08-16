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
exports.SecurityManageController = void 0;
const common_1 = require("@nestjs/common");
const security_manage_service_1 = require("./security-manage.service");
const create_security_manage_dto_1 = require("../../dtos/requests/create/create-security-manage.dto");
const update_security_manage_dto_1 = require("../../dtos/requests/update/update-security-manage.dto");
let SecurityManageController = class SecurityManageController {
    securityManageService;
    constructor(securityManageService) {
        this.securityManageService = securityManageService;
    }
    create(createSecurityManageDto) {
        return this.securityManageService.create(createSecurityManageDto);
    }
    findAll() {
        return this.securityManageService.findAll();
    }
    findOne(id) {
        return this.securityManageService.findOne(id);
    }
    update(id, updateSecurityManageDto) {
        return this.securityManageService.update(id, updateSecurityManageDto);
    }
    remove(id) {
        return this.securityManageService.remove(id);
    }
};
exports.SecurityManageController = SecurityManageController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_security_manage_dto_1.CreateSecurityManageDto]),
    __metadata("design:returntype", void 0)
], SecurityManageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SecurityManageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SecurityManageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_security_manage_dto_1.UpdateSecurityManageDto]),
    __metadata("design:returntype", void 0)
], SecurityManageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SecurityManageController.prototype, "remove", null);
exports.SecurityManageController = SecurityManageController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [security_manage_service_1.SecurityManageService])
], SecurityManageController);
//# sourceMappingURL=security-manage.controller.js.map