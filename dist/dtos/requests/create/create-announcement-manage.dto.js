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
exports.CreateAnnouncementManageDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateAnnouncementManageDto {
    title;
    content;
    attachments;
    publishDate;
    expiryDate;
    employeeId;
}
exports.CreateAnnouncementManageDto = CreateAnnouncementManageDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Judul pengumuman harus berupa teks.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Judul pengumuman tidak boleh kosong.' }),
    (0, class_validator_1.MinLength)(5, {
        message: 'Judul pengumuman harus memiliki setidaknya 5 karakter.',
    }),
    __metadata("design:type", String)
], CreateAnnouncementManageDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Isi pengumuman harus berupa teks.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Isi pengumuman tidak boleh kosong.' }),
    __metadata("design:type", String)
], CreateAnnouncementManageDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'Lampiran harus berupa array.' }),
    (0, class_validator_1.IsString)({ message: 'Setiap lampiran harus berupa URL (teks).', each: true }),
    (0, class_validator_1.IsOptional)({ message: 'Lampiran pengumuman bersifat opsional.' }),
    __metadata("design:type", Array)
], CreateAnnouncementManageDto.prototype, "attachments", void 0);
__decorate([
    (0, class_validator_1.IsDate)({
        message: 'Tanggal publikasi harus berupa format tanggal yang valid.',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Tanggal publikasi tidak boleh kosong.' }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateAnnouncementManageDto.prototype, "publishDate", void 0);
__decorate([
    (0, class_validator_1.IsDate)({
        message: 'Tanggal selesai harus berupa format tanggal yang valid.',
    }),
    (0, class_validator_1.IsOptional)({ message: 'Tanggal selesai bersifat opsional.' }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateAnnouncementManageDto.prototype, "expiryDate", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'ID karyawan harus berupa UUID versi 4 yang valid.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'ID karyawan tidak boleh kosong.' }),
    __metadata("design:type", String)
], CreateAnnouncementManageDto.prototype, "employeeId", void 0);
//# sourceMappingURL=create-announcement-manage.dto.js.map