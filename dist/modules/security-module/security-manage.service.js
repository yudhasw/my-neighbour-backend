"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityManageService = void 0;
const common_1 = require("@nestjs/common");
let SecurityManageService = class SecurityManageService {
    create(createRequest) {
        return 'This action adds a new securityManage';
    }
    findAll() {
        return `This action returns all securityManage`;
    }
    findOne(id) {
        return `This action returns a #${id} securityManage`;
    }
    update(id, updateRequest) {
        return `This action updates a #${id} securityManage`;
    }
    remove(id) {
        return `This action removes a #${id} securityManage`;
    }
};
exports.SecurityManageService = SecurityManageService;
exports.SecurityManageService = SecurityManageService = __decorate([
    (0, common_1.Injectable)()
], SecurityManageService);
//# sourceMappingURL=security-manage.service.js.map