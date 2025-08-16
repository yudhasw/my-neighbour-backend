"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManageModule = void 0;
const common_1 = require("@nestjs/common");
const user_manage_service_1 = require("./user-manage.service");
const user_manage_controller_1 = require("./user-manage.controller");
const database_module_1 = require("../../../common/database/database.module");
const resident_manage_module_1 = require("../resident-module/resident-manage.module");
const employee_manage_module_1 = require("../employee-module/employee-manage.module");
const database_service_1 = require("../../../common/database/database.service");
const resident_manage_service_1 = require("../resident-module/resident-manage.service");
const employee_manage_service_1 = require("../employee-module/employee-manage.service");
let UserManageModule = class UserManageModule {
};
exports.UserManageModule = UserManageModule;
exports.UserManageModule = UserManageModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, resident_manage_module_1.ResidentManageModule, employee_manage_module_1.EmployeeManageModule],
        controllers: [user_manage_controller_1.UserManageController],
        providers: [
            user_manage_service_1.UserManageService,
            database_service_1.DatabaseService,
            resident_manage_service_1.ResidentManageService,
            employee_manage_service_1.EmployeeManageService,
        ],
        exports: [user_manage_service_1.UserManageService],
    })
], UserManageModule);
//# sourceMappingURL=user-manage.module.js.map