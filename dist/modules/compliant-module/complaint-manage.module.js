"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplaintManageModule = void 0;
const common_1 = require("@nestjs/common");
const complaint_manage_service_1 = require("./complaint-manage.service");
const complaint_manage_controller_1 = require("./complaint-manage.controller");
const database_module_1 = require("../../common/database/database.module");
const database_service_1 = require("../../common/database/database.service");
const employee_manage_module_1 = require("../user-manage-module/employee-module/employee-manage.module");
const resident_manage_module_1 = require("../user-manage-module/resident-module/resident-manage.module");
const resident_manage_service_1 = require("../user-manage-module/resident-module/resident-manage.service");
const employee_manage_service_1 = require("../user-manage-module/employee-module/employee-manage.service");
let ComplaintManageModule = class ComplaintManageModule {
};
exports.ComplaintManageModule = ComplaintManageModule;
exports.ComplaintManageModule = ComplaintManageModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, employee_manage_module_1.EmployeeManageModule, resident_manage_module_1.ResidentManageModule],
        controllers: [complaint_manage_controller_1.ComplaintManageController],
        providers: [
            complaint_manage_service_1.ComplaintManageService,
            database_service_1.DatabaseService,
            resident_manage_service_1.ResidentManageService,
            employee_manage_service_1.EmployeeManageService,
        ],
        exports: [complaint_manage_service_1.ComplaintManageService],
    })
], ComplaintManageModule);
//# sourceMappingURL=complaint-manage.module.js.map