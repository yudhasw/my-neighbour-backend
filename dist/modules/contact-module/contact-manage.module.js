"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactManageModule = void 0;
const common_1 = require("@nestjs/common");
const contact_manage_service_1 = require("./contact-manage.service");
const contact_manage_controller_1 = require("./contact-manage.controller");
const database_module_1 = require("../../common/database/database.module");
const database_service_1 = require("../../common/database/database.service");
let ContactManageModule = class ContactManageModule {
};
exports.ContactManageModule = ContactManageModule;
exports.ContactManageModule = ContactManageModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [contact_manage_controller_1.ContactManageController],
        providers: [contact_manage_service_1.ContactManageService, database_service_1.DatabaseService],
        exports: [contact_manage_service_1.ContactManageService],
    })
], ContactManageModule);
//# sourceMappingURL=contact-manage.module.js.map