"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitManageService = void 0;
const common_1 = require("@nestjs/common");
let UnitManageService = class UnitManageService {
    create(createRequest) {
        return 'This action adds a new unitManage';
    }
    findAll() {
        return `This action returns all unitManage`;
    }
    findOne(id) {
        return `This action returns a #${id} unitManage`;
    }
    update(id, updateRequest) {
        return `This action updates a #${id} unitManage`;
    }
    remove(id) {
        return `This action removes a #${id} unitManage`;
    }
};
exports.UnitManageService = UnitManageService;
exports.UnitManageService = UnitManageService = __decorate([
    (0, common_1.Injectable)()
], UnitManageService);
//# sourceMappingURL=unit-manage.service.js.map