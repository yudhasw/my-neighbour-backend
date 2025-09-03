"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumTagManageModule = void 0;
const common_1 = require("@nestjs/common");
const forum_tag_manage_service_1 = require("./forum-tag-manage.service");
const forum_tag_manage_controller_1 = require("./forum-tag-manage.controller");
const database_module_1 = require("../../../common/database/database.module");
const database_service_1 = require("../../../common/database/database.service");
let ForumTagManageModule = class ForumTagManageModule {
};
exports.ForumTagManageModule = ForumTagManageModule;
exports.ForumTagManageModule = ForumTagManageModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [forum_tag_manage_controller_1.ForumTagManageController],
        providers: [forum_tag_manage_service_1.ForumTagManageService, database_service_1.DatabaseService],
        exports: [forum_tag_manage_service_1.ForumTagManageService],
    })
], ForumTagManageModule);
//# sourceMappingURL=forum-tag-manage.module.js.map