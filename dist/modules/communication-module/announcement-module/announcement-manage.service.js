"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementManageService = void 0;
const common_1 = require("@nestjs/common");
let AnnouncementManageService = class AnnouncementManageService {
    create(createRequest) {
        return 'This action adds a new announcementManage';
    }
    findAll() {
        return `This action returns all announcementManage`;
    }
    findOne(id) {
        return `This action returns a #${id} announcementManage`;
    }
    update(id, updateRequest) {
        return `This action updates a #${id} announcementManage`;
    }
    remove(id) {
        return `This action removes a #${id} announcementManage`;
    }
};
exports.AnnouncementManageService = AnnouncementManageService;
exports.AnnouncementManageService = AnnouncementManageService = __decorate([
    (0, common_1.Injectable)()
], AnnouncementManageService);
//# sourceMappingURL=announcement-manage.service.js.map