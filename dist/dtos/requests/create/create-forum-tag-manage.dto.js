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
exports.CreateForumTagManageDto = void 0;
const class_validator_1 = require("class-validator");
const is_unique_validators_1 = require("../../../common/pipes/validators/is-unique-validators");
class CreateForumTagManageDto {
    tagName;
}
exports.CreateForumTagManageDto = CreateForumTagManageDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Label Forum Harus berupa teks' }),
    (0, is_unique_validators_1.IsUnique)({ field: 'tagName', model: 'postTags' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Label Forum Bersifat Optional' }),
    __metadata("design:type", String)
], CreateForumTagManageDto.prototype, "tagName", void 0);
//# sourceMappingURL=create-forum-tag-manage.dto.js.map