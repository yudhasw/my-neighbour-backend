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
exports.CreateResidentManageDto = void 0;
const class_validator_1 = require("class-validator");
const prisma_1 = require("../../../common/database/generated/prisma");
const class_transformer_1 = require("class-transformer");
const is_unique_validators_1 = require("../../../common/pipes/validators/is-unique-validators");
class CreateResidentManageDto {
    userId;
    emergencyContactName;
    emergencyContactNumber;
    movedInDate;
    movedOutDate;
    residentStatus;
    unitId;
}
exports.CreateResidentManageDto = CreateResidentManageDto;
__decorate([
    (0, class_validator_1.IsUUID)('4', {
        message: 'ID pengguna aplikasi harus berupa UUID versi 4 yang valid.',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'ID pengguna aplikasi tidak boleh kosong.' }),
    (0, is_unique_validators_1.IsUnique)({ field: 'userId', model: 'employees' }, { message: 'pengguna sudah terdaftar sudah terdaftar' }),
    __metadata("design:type", String)
], CreateResidentManageDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Nama kontak darurat harus berupa teks.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateResidentManageDto.prototype, "emergencyContactName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Nomor kontak darurat harus berupa teks.' }),
    (0, class_validator_1.Matches)(/^\+?\d{8,15}$/, { message: 'Nomor kontak darurat tidak valid.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateResidentManageDto.prototype, "emergencyContactNumber", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'Tanggal masuk harus berupa format tanggal yang valid.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Tanggal Masuk tidak boleh kosong' }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateResidentManageDto.prototype, "movedInDate", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'Tanggal keluar harus berupa format tanggal yang valid.' }),
    (0, class_validator_1.ValidateIf)((o) => o.movedOutDate !== null),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateResidentManageDto.prototype, "movedOutDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Status penghuni tidak boleh kosong.' }),
    (0, class_validator_1.IsEnum)(prisma_1.ResidentStatus, {
        message: 'Status penghuni tidak valid. Pilihan: ' +
            Object.values(prisma_1.ResidentStatus).join(', '),
    }),
    __metadata("design:type", String)
], CreateResidentManageDto.prototype, "residentStatus", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', {
        message: 'ID Unit Hunian harus berupa UUID versi 4 yang valid.',
    }),
    (0, class_validator_1.IsString)({ message: 'Nama kontak darurat harus berupa teks.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateResidentManageDto.prototype, "unitId", void 0);
//# sourceMappingURL=create-resident-manage.dto.js.map