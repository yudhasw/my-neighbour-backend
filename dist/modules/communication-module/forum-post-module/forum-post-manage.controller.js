"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumPostManageController = void 0;
const common_1 = require("@nestjs/common");
const forum_post_manage_service_1 = require("./forum-post-manage.service");
const create_forum_post_manage_dto_1 = require("../../../dtos/requests/create/create-forum-post-manage.dto");
const update_forum_post_manage_dto_1 = require("../../../dtos/requests/update/update-forum-post-manage.dto");
let ForumPostManageController = class ForumPostManageController {
    forumPostManageService;
    constructor(forumPostManageService) {
        this.forumPostManageService = forumPostManageService;
    }
    create(createForumPostManageDto) {
        return this.forumPostManageService.create(createForumPostManageDto);
    }
    findAll() {
        return this.forumPostManageService.findAll();
    }
    findOne(id) {
        return this.forumPostManageService.findOne(id);
    }
    update(id, updateForumPostManageDto) {
        return this.forumPostManageService.update(id, updateForumPostManageDto);
    }
    remove(id) {
        return this.forumPostManageService.remove(id);
    }
};
exports.ForumPostManageController = ForumPostManageController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_forum_post_manage_dto_1.CreateForumPostManageDto]),
    __metadata("design:returntype", void 0)
], ForumPostManageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ForumPostManageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ForumPostManageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_forum_post_manage_dto_1.UpdateForumPostManageDto]),
    __metadata("design:returntype", void 0)
], ForumPostManageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ForumPostManageController.prototype, "remove", null);
exports.ForumPostManageController = ForumPostManageController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [forum_post_manage_service_1.ForumPostManageService])
], ForumPostManageController);
//# sourceMappingURL=forum-post-manage.controller.js.map