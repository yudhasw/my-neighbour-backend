"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestManageModule = void 0;
const common_1 = require("@nestjs/common");
const complaint_manage_module_1 = require("./compliant-module/complaint-manage.module");
const maintanance_request_manage_module_1 = require("./maintanance-request-module/maintanance-request-manage.module");
const database_module_1 = require("../../common/database/database.module");
const users_manage_module_1 = require("../user-manage-module/users-manage.module");
let RequestManageModule = class RequestManageModule {
};
exports.RequestManageModule = RequestManageModule;
exports.RequestManageModule = RequestManageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            complaint_manage_module_1.ComplaintManageModule,
            maintanance_request_manage_module_1.MaintananceRequestManageModule,
            users_manage_module_1.UsersManageModule,
        ],
        exports: [complaint_manage_module_1.ComplaintManageModule, maintanance_request_manage_module_1.MaintananceRequestManageModule],
    })
], RequestManageModule);
//# sourceMappingURL=request-manage.module.js.map