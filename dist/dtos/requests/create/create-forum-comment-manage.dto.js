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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateForumCommentManageDto = void 0;
const class_validator_1 = require("class-validator");
class CreateForumCommentManageDto {
    content;
    userId;
    postId;
}
exports.CreateForumCommentManageDto = CreateForumCommentManageDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Isi pengumuman harus berupa teks.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Isi pengumuman tidak boleh kosong.' }),
    __metadata("design:type", String)
], CreateForumCommentManageDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', {
        message: 'ID pengguna aplikasi harus berupa UUID versi 4 yang valid.',
    }),
    (0, class_validator_1.IsString)({ message: 'ID pengguna aplikasi harus berupa teks' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'ID pengguna aplikasi tidak boleh kosong.' }),
    __metadata("design:type", String)
], CreateForumCommentManageDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', {
        message: 'ID Postingan Forum harus berupa UUID versi 4 yang valid.',
    }),
    (0, class_validator_1.IsString)({ message: 'ID Postingan Forum harus berupa teks' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'ID Postingan Forum tidak boleh kosong.' }),
    __metadata("design:type", String)
], CreateForumCommentManageDto.prototype, "postId", void 0);
//# sourceMappingURL=create-forum-comment-manage.dto.js.map