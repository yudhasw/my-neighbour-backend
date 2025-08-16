"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeasesManageModule = void 0;
const common_1 = require("@nestjs/common");
const leases_manage_service_1 = require("./leases-manage.service");
const leases_manage_controller_1 = require("./leases-manage.controller");
const database_module_1 = require("../../../common/database/database.module");
const unit_manage_module_1 = require("../../unit-manage-module/unit-manage.module");
const resident_manage_module_1 = require("../../user-manage-module/resident-module/resident-manage.module");
const unit_manage_service_1 = require("../../unit-manage-module/unit-manage.service");
const resident_manage_service_1 = require("../../user-manage-module/resident-module/resident-manage.service");
const database_service_1 = require("../../../common/database/database.service");
let LeasesManageModule = class LeasesManageModule {
};
exports.LeasesManageModule = LeasesManageModule;
exports.LeasesManageModule = LeasesManageModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, unit_manage_module_1.UnitManageModule, resident_manage_module_1.ResidentManageModule],
        controllers: [leases_manage_controller_1.LeasesManageController],
        providers: [
            leases_manage_service_1.LeasesManageService,
            database_service_1.DatabaseService,
            unit_manage_service_1.UnitManageService,
            resident_manage_service_1.ResidentManageService,
        ],
        exports: [leases_manage_service_1.LeasesManageService],
    })
], LeasesManageModule);
//# sourceMappingURL=leases-manage.module.js.map