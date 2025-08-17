"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityManageModule = void 0;
const common_1 = require("@nestjs/common");
const security_manage_service_1 = require("./security-manage.service");
const security_manage_controller_1 = require("./security-manage.controller");
const database_module_1 = require("../../common/database/database.module");
const database_service_1 = require("../../common/database/database.service");
const employee_manage_module_1 = require("../user-manage-module/employee-module/employee-manage.module");
const employee_manage_service_1 = require("../user-manage-module/employee-module/employee-manage.service");
let SecurityManageModule = class SecurityManageModule {
};
exports.SecurityManageModule = SecurityManageModule;
exports.SecurityManageModule = SecurityManageModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, employee_manage_module_1.EmployeeManageModule],
        controllers: [security_manage_controller_1.SecurityManageController],
        providers: [security_manage_service_1.SecurityManageService, database_service_1.DatabaseService, employee_manage_service_1.EmployeeManageService],
        exports: [security_manage_service_1.SecurityManageService],
    })
], SecurityManageModule);
//# sourceMappingURL=security-manage.module.js.map