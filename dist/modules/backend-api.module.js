"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendApiModule = void 0;
const common_1 = require("@nestjs/common");
const communication_module_1 = require("./communication-module/communication.module");
const contact_manage_module_1 = require("./contact-module/contact-manage.module");
const financial_module_1 = require("./financial-module/financial.module");
const reports_manage_module_1 = require("./reports-module/reports-manage.module");
const security_manage_module_1 = require("./security-module/security-manage.module");
const unit_manage_module_1 = require("./unit-manage-module/unit-manage.module");
const users_manage_module_1 = require("./user-manage-module/users-manage.module");
const request_manage_module_1 = require("./request-module/request-manage.module");
let BackendApiModule = class BackendApiModule {
};
exports.BackendApiModule = BackendApiModule;
exports.BackendApiModule = BackendApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            financial_module_1.FinancialModule,
            communication_module_1.CommunicationModule,
            contact_manage_module_1.ContactManageModule,
            reports_manage_module_1.ReportsManageModule,
            security_manage_module_1.SecurityManageModule,
            unit_manage_module_1.UnitManageModule,
            users_manage_module_1.UsersManageModule,
            request_manage_module_1.RequestManageModule,
        ],
        exports: [
            financial_module_1.FinancialModule,
            communication_module_1.CommunicationModule,
            contact_manage_module_1.ContactManageModule,
            reports_manage_module_1.ReportsManageModule,
            security_manage_module_1.SecurityManageModule,
            unit_manage_module_1.UnitManageModule,
            users_manage_module_1.UsersManageModule,
            request_manage_module_1.RequestManageModule,
        ],
    })
], BackendApiModule);
//# sourceMappingURL=backend-api.module.js.map