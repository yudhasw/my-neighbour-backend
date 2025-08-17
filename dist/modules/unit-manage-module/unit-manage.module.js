"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitManageModule = void 0;
const common_1 = require("@nestjs/common");
const unit_manage_service_1 = require("./unit-manage.service");
const unit_manage_controller_1 = require("./unit-manage.controller");
const database_module_1 = require("../../common/database/database.module");
const database_service_1 = require("../../common/database/database.service");
const resident_manage_service_1 = require("../user-manage-module/resident-module/resident-manage.service");
const resident_manage_module_1 = require("../user-manage-module/resident-module/resident-manage.module");
let UnitManageModule = class UnitManageModule {
};
exports.UnitManageModule = UnitManageModule;
exports.UnitManageModule = UnitManageModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, resident_manage_module_1.ResidentManageModule],
        controllers: [unit_manage_controller_1.UnitManageController],
        providers: [unit_manage_service_1.UnitManageService, database_service_1.DatabaseService, resident_manage_service_1.ResidentManageService],
        exports: [unit_manage_service_1.UnitManageService],
    })
], UnitManageModule);
//# sourceMappingURL=unit-manage.module.js.map