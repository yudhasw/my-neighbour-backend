"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const financial_module_1 = require("./modules/financial-module/financial.module");
const communication_module_1 = require("./modules/communication-module/communication.module");
const complaint_manage_module_1 = require("./modules/compliant-module/complaint-manage.module");
const contact_manage_module_1 = require("./modules/contact-module/contact-manage.module");
const reports_manage_module_1 = require("./modules/reports-module/reports-manage.module");
const security_manage_module_1 = require("./modules/security-module/security-manage.module");
const unit_manage_module_1 = require("./modules/unit-manage-module/unit-manage.module");
const users_manage_module_1 = require("./modules/user-manage-module/users-manage.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            financial_module_1.FinancialModule,
            communication_module_1.CommunicationModule,
            complaint_manage_module_1.ComplaintManageModule,
            contact_manage_module_1.ContactManageModule,
            reports_manage_module_1.ReportsManageModule,
            security_manage_module_1.SecurityManageModule,
            unit_manage_module_1.UnitManageModule,
            users_manage_module_1.UsersManageModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map