"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumPostManageModule = void 0;
const common_1 = require("@nestjs/common");
const forum_post_manage_service_1 = require("./forum-post-manage.service");
const forum_post_manage_controller_1 = require("./forum-post-manage.controller");
const database_service_1 = require("../../../common/database/database.service");
const employee_manage_service_1 = require("../../user-manage-module/employee-module/employee-manage.service");
const resident_manage_service_1 = require("../../user-manage-module/resident-module/resident-manage.service");
let ForumPostManageModule = class ForumPostManageModule {
};
exports.ForumPostManageModule = ForumPostManageModule;
exports.ForumPostManageModule = ForumPostManageModule = __decorate([
    (0, common_1.Module)({
        controllers: [forum_post_manage_controller_1.ForumPostManageController],
        providers: [
            forum_post_manage_service_1.ForumPostManageService,
            database_service_1.DatabaseService,
            employee_manage_service_1.EmployeeManageService,
            resident_manage_service_1.ResidentManageService,
        ],
        exports: [forum_post_manage_service_1.ForumPostManageService],
    })
], ForumPostManageModule);
//# sourceMappingURL=forum-post-manage.module.js.map