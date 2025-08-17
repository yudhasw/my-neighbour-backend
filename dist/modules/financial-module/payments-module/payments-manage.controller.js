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
exports.PaymentsManageController = void 0;
const common_1 = require("@nestjs/common");
const payments_manage_service_1 = require("../payments-module/payments-manage.service");
const create_payments_manage_dto_1 = require("../../../dtos/requests/create/create-payments-manage.dto");
const update_payments_manage_dto_1 = require("../../../dtos/requests/update/update-payments-manage.dto");
let PaymentsManageController = class PaymentsManageController {
    paymentsManageService;
    constructor(paymentsManageService) {
        this.paymentsManageService = paymentsManageService;
    }
    create(createPaymentsManageDto) {
        return this.paymentsManageService.create(createPaymentsManageDto);
    }
    findAll() {
        return this.paymentsManageService.findAll();
    }
    findOne(id) {
        return this.paymentsManageService.findOne(id);
    }
    update(id, updatePaymentsManageDto) {
        return this.paymentsManageService.update(id, updatePaymentsManageDto);
    }
    remove(id) {
        return this.paymentsManageService.remove(id);
    }
};
exports.PaymentsManageController = PaymentsManageController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payments_manage_dto_1.CreatePaymentsManageDto]),
    __metadata("design:returntype", void 0)
], PaymentsManageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentsManageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentsManageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_payments_manage_dto_1.UpdatePaymentsManageDto]),
    __metadata("design:returntype", void 0)
], PaymentsManageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentsManageController.prototype, "remove", null);
exports.PaymentsManageController = PaymentsManageController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [payments_manage_service_1.PaymentsManageService])
], PaymentsManageController);
//# sourceMappingURL=payments-manage.controller.js.map