"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumCommentManageService = void 0;
const common_1 = require("@nestjs/common");
let ForumCommentManageService = class ForumCommentManageService {
    create(createRequest) {
        return 'This action adds a new forumCommentManage';
    }
    findAll() {
        return `This action returns all forumCommentManage`;
    }
    findOne(id) {
        return `This action returns a #${id} forumCommentManage`;
    }
    update(id, updateRequest) {
        return `This action updates a #${id} forumCommentManage`;
    }
    remove(id) {
        return `This action removes a #${id} forumCommentManage`;
    }
};
exports.ForumCommentManageService = ForumCommentManageService;
exports.ForumCommentManageService = ForumCommentManageService = __decorate([
    (0, common_1.Injectable)()
], ForumCommentManageService);
//# sourceMappingURL=forum-comment-manage.service.js.map