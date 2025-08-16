"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManageModule = void 0;
const common_1 = require("@nestjs/common");
const employee_manage_service_1 = require("./employee-manage.service");
const employee_manage_controller_1 = require("./employee-manage.controller");
const database_module_1 = require("../../../common/database/database.module");
const database_service_1 = require("../../../common/database/database.service");
const user_manage_service_1 = require("../users-module/user-manage.service");
const user_manage_module_1 = require("../users-module/user-manage.module");
let EmployeeManageModule = class EmployeeManageModule {
};
exports.EmployeeManageModule = EmployeeManageModule;
exports.EmployeeManageModule = EmployeeManageModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, (0, common_1.forwardRef)(() => user_manage_module_1.UserManageModule)],
        controllers: [employee_manage_controller_1.EmployeeManageController],
        providers: [employee_manage_service_1.EmployeeManageService, database_service_1.DatabaseService, user_manage_service_1.UserManageService],
        exports: [employee_manage_service_1.EmployeeManageService],
    })
], EmployeeManageModule);
//# sourceMappingURL=employee-manage.module.js.map