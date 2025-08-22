"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementManageModule = void 0;
const common_1 = require("@nestjs/common");
const announcement_manage_service_1 = require("./announcement-manage.service");
const announcement_manage_controller_1 = require("./announcement-manage.controller");
const database_service_1 = require("../../../common/database/database.service");
const generalHelper_1 = require("../../../common/helper/generalHelper");
const employee_manage_module_1 = require("../../../modules/user-manage-module/employee-module/employee-manage.module");
let AnnouncementManageModule = class AnnouncementManageModule {
};
exports.AnnouncementManageModule = AnnouncementManageModule;
exports.AnnouncementManageModule = AnnouncementManageModule = __decorate([
    (0, common_1.Module)({
        imports: [employee_manage_module_1.EmployeeManageModule],
        controllers: [announcement_manage_controller_1.AnnouncementManageController],
        providers: [announcement_manage_service_1.AnnouncementManageService, database_service_1.DatabaseService, generalHelper_1.GeneralHelper],
        exports: [announcement_manage_service_1.AnnouncementManageService],
    })
], AnnouncementManageModule);
//# sourceMappingURL=announcement-manage.module.js.map