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
exports.ForumTagManageController = void 0;
const common_1 = require("@nestjs/common");
const forum_tag_manage_service_1 = require("./forum-tag-manage.service");
const create_forum_tag_manage_dto_1 = require("../../../dtos/requests/create/create-forum-tag-manage.dto");
const update_forum_tag_manage_dto_1 = require("../../../dtos/requests/update/update-forum-tag-manage.dto");
let ForumTagManageController = class ForumTagManageController {
    forumTagManageService;
    constructor(forumTagManageService) {
        this.forumTagManageService = forumTagManageService;
    }
    create(createForumTagManageDto) {
        return this.forumTagManageService.create(createForumTagManageDto);
    }
    findAll() {
        return this.forumTagManageService.findAll();
    }
    findOne(id) {
        return this.forumTagManageService.findOne(+id);
    }
    update(id, updateForumTagManageDto) {
        return this.forumTagManageService.update(+id, updateForumTagManageDto);
    }
    remove(id) {
        return this.forumTagManageService.remove(+id);
    }
};
exports.ForumTagManageController = ForumTagManageController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_forum_tag_manage_dto_1.CreateForumTagManageDto]),
    __metadata("design:returntype", void 0)
], ForumTagManageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ForumTagManageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ForumTagManageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_forum_tag_manage_dto_1.UpdateForumTagManageDto]),
    __metadata("design:returntype", void 0)
], ForumTagManageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ForumTagManageController.prototype, "remove", null);
exports.ForumTagManageController = ForumTagManageController = __decorate([
    (0, common_1.Controller)('forum-tag-manage'),
    __metadata("design:paramtypes", [forum_tag_manage_service_1.ForumTagManageService])
], ForumTagManageController);
//# sourceMappingURL=forum-tag-manage.controller.js.map