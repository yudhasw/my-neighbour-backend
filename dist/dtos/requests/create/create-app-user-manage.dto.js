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
exports.CreateAppUserManageDto = void 0;
const class_validator_1 = require("class-validator");
const prisma_1 = require("../../../common/database/generated/prisma");
const class_transformer_1 = require("class-transformer");
const is_unique_validators_1 = require("../../../common/pipes/validators/is-unique-validators");
class CreateAppUserManageDto {
    fullName;
    firstName;
    lastName;
    dateOfBirth;
    contactNumber;
    primaryEmail;
    secondaryEmail;
    password;
    role;
    gender;
}
exports.CreateAppUserManageDto = CreateAppUserManageDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Nama lengkap harus berupa teks' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nama lengkap tidak boleh kosong' }),
    __metadata("design:type", String)
], CreateAppUserManageDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Nama depan harus berupa teks' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nama depan tidak boleh kosong' }),
    __metadata("design:type", String)
], CreateAppUserManageDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Nama belakang harus berupa teks' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nama belakang tidak boleh kosong' }),
    __metadata("design:type", String)
], CreateAppUserManageDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'Tanggal lahir harus berupa format tanggal' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateAppUserManageDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Nomor kontak harus berupa teks' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAppUserManageDto.prototype, "contactNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Email utama harus berupa teks' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email utama tidak boleh kosong' }),
    (0, is_unique_validators_1.IsUnique)({ field: 'primaryEmail', model: 'user' }, { message: 'Email utama sudah digunakan' }),
    (0, class_validator_1.IsEmail)({
        ignore_max_length: true,
        allow_display_name: true,
    }, {
        message: 'Kolom Email harus berupa Email yang valid',
    }),
    __metadata("design:type", String)
], CreateAppUserManageDto.prototype, "primaryEmail", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Email sekunder harus berupa teks' }),
    (0, class_validator_1.IsOptional)(),
    (0, is_unique_validators_1.IsUnique)({ field: 'secondaryEmail', model: 'user' }, { message: 'Email sekunder sudah digunakan' }),
    (0, class_validator_1.IsEmail)({
        ignore_max_length: true,
        allow_display_name: true,
    }, {
        message: 'Kolom Email harus berupa Email yang valid',
    }),
    __metadata("design:type", String)
], CreateAppUserManageDto.prototype, "secondaryEmail", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Password harus berupa teks' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password tidak boleh kosong' }),
    (0, class_validator_1.MinLength)(8, { message: 'Password minimal 8 karakter' }),
    __metadata("design:type", String)
], CreateAppUserManageDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Peran tidak boleh kosong' }),
    (0, class_validator_1.IsEnum)(prisma_1.UserRole, { message: 'Peran tidak valid' }),
    __metadata("design:type", String)
], CreateAppUserManageDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Jenis kelamin tidak boleh kosong' }),
    (0, class_validator_1.IsEnum)(prisma_1.Gender, { message: 'Jenis kelamin tidak valid' }),
    __metadata("design:type", String)
], CreateAppUserManageDto.prototype, "gender", void 0);
//# sourceMappingURL=create-app-user-manage.dto.js.map