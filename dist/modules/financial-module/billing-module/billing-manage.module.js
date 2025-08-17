"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingManageModule = void 0;
const common_1 = require("@nestjs/common");
const billing_manage_service_1 = require("./billing-manage.service");
const billing_manage_controller_1 = require("./billing-manage.controller");
const database_module_1 = require("../../../common/database/database.module");
const database_service_1 = require("../../../common/database/database.service");
const unit_manage_module_1 = require("../../unit-manage-module/unit-manage.module");
const unit_manage_service_1 = require("../../unit-manage-module/unit-manage.service");
const employee_manage_module_1 = require("../../user-manage-module/employee-module/employee-manage.module");
const employee_manage_service_1 = require("../../user-manage-module/employee-module/employee-manage.service");
let BillingManageModule = class BillingManageModule {
};
exports.BillingManageModule = BillingManageModule;
exports.BillingManageModule = BillingManageModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, employee_manage_module_1.EmployeeManageModule, unit_manage_module_1.UnitManageModule],
        controllers: [billing_manage_controller_1.BillingManageController],
        providers: [
            billing_manage_service_1.BillingManageService,
            database_service_1.DatabaseService,
            employee_manage_service_1.EmployeeManageService,
            unit_manage_service_1.UnitManageService,
        ],
        exports: [billing_manage_service_1.BillingManageService],
    })
], BillingManageModule);
//# sourceMappingURL=billing-manage.module.js.map