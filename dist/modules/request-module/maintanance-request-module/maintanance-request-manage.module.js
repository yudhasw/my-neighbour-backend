"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintananceRequestManageModule = void 0;
const common_1 = require("@nestjs/common");
const maintanance_request_manage_service_1 = require("./maintanance-request-manage.service");
const maintanance_request_manage_controller_1 = require("./maintanance-request-manage.controller");
const app_user_manage_module_1 = require("../../../modules/user-manage-module/app-users-module/app-user-manage.module");
const database_module_1 = require("../../../common/database/database.module");
const database_service_1 = require("../../../common/database/database.service");
let MaintananceRequestManageModule = class MaintananceRequestManageModule {
};
exports.MaintananceRequestManageModule = MaintananceRequestManageModule;
exports.MaintananceRequestManageModule = MaintananceRequestManageModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            maintanance_request_manage_controller_1.MaintananceRequestManageController,
            app_user_manage_module_1.AppUserManageModule,
            database_module_1.DatabaseModule,
        ],
        providers: [maintanance_request_manage_service_1.MaintananceRequestManageService, database_service_1.DatabaseService],
        exports: [maintanance_request_manage_service_1.MaintananceRequestManageService],
    })
], MaintananceRequestManageModule);
//# sourceMappingURL=maintanance-request-manage.module.js.map