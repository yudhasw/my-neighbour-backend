"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumCommentManageModule = void 0;
const common_1 = require("@nestjs/common");
const forum_comment_manage_service_1 = require("./forum-comment-manage.service");
const forum_comment_manage_controller_1 = require("./forum-comment-manage.controller");
const employee_manage_service_1 = require("../../user-manage-module/employee-module/employee-manage.service");
const resident_manage_service_1 = require("../../user-manage-module/resident-module/resident-manage.service");
const database_service_1 = require("../../../common/database/database.service");
let ForumCommentManageModule = class ForumCommentManageModule {
};
exports.ForumCommentManageModule = ForumCommentManageModule;
exports.ForumCommentManageModule = ForumCommentManageModule = __decorate([
    (0, common_1.Module)({
        controllers: [forum_comment_manage_controller_1.ForumCommentManageController],
        providers: [
            forum_comment_manage_service_1.ForumCommentManageService,
            employee_manage_service_1.EmployeeManageService,
            resident_manage_service_1.ResidentManageService,
            database_service_1.DatabaseService,
        ],
        exports: [forum_comment_manage_service_1.ForumCommentManageService],
    })
], ForumCommentManageModule);
//# sourceMappingURL=forum-comment-manage.module.js.map