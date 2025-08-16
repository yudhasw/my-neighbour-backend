"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResidentManageModule = void 0;
const common_1 = require("@nestjs/common");
const resident_manage_service_1 = require("./resident-manage.service");
const resident_manage_controller_1 = require("./resident-manage.controller");
const database_module_1 = require("../../../common/database/database.module");
const user_manage_module_1 = require("../users-module/user-manage.module");
const database_service_1 = require("../../../common/database/database.service");
const user_manage_service_1 = require("../users-module/user-manage.service");
let ResidentManageModule = class ResidentManageModule {
};
exports.ResidentManageModule = ResidentManageModule;
exports.ResidentManageModule = ResidentManageModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, (0, common_1.forwardRef)(() => user_manage_module_1.UserManageModule)],
        controllers: [resident_manage_controller_1.ResidentManageController],
        providers: [resident_manage_service_1.ResidentManageService, database_service_1.DatabaseService, user_manage_service_1.UserManageService],
        exports: [resident_manage_service_1.ResidentManageService],
    })
], ResidentManageModule);
//# sourceMappingURL=resident-manage.module.js.map