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
exports.BillingManageController = void 0;
const common_1 = require("@nestjs/common");
const billing_manage_service_1 = require("./billing-manage.service");
const create_billing_manage_dto_1 = require("../../../dtos/requests/create/create-billing-manage.dto");
const update_billing_manage_dto_1 = require("../../../dtos/requests/update/update-billing-manage.dto");
let BillingManageController = class BillingManageController {
    billingManageService;
    constructor(billingManageService) {
        this.billingManageService = billingManageService;
    }
    create(createBillingManageDto) {
        return this.billingManageService.create(createBillingManageDto);
    }
    findAll() {
        return this.billingManageService.findAll();
    }
    findOne(id) {
        return this.billingManageService.findOne(id);
    }
    update(id, updateBillingManageDto) {
        return this.billingManageService.update(id, updateBillingManageDto);
    }
    remove(id) {
        return this.billingManageService.remove(id);
    }
};
exports.BillingManageController = BillingManageController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_billing_manage_dto_1.CreateBillingManageDto]),
    __metadata("design:returntype", void 0)
], BillingManageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BillingManageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BillingManageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_billing_manage_dto_1.UpdateBillingManageDto]),
    __metadata("design:returntype", void 0)
], BillingManageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BillingManageController.prototype, "remove", null);
exports.BillingManageController = BillingManageController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [billing_manage_service_1.BillingManageService])
], BillingManageController);
//# sourceMappingURL=billing-manage.controller.js.map