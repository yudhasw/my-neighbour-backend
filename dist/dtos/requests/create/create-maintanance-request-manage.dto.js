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
exports.CreateMaintananceRequestManageDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const prisma_1 = require("../../../common/database/generated/prisma");
class CreateMaintananceRequestManageDto {
    title;
    description;
    requestDate;
    priority;
    status;
    residentId;
    unitId;
    assignedToEmployeeId;
}
exports.CreateMaintananceRequestManageDto = CreateMaintananceRequestManageDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Judul Permintaan Perbaikan harus berupa teks.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Judul Permintaan Perbaikan tidak boleh kosong.' }),
    __metadata("design:type", String)
], CreateMaintananceRequestManageDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Deskripsi Permintaan Perbaikan harus berupa teks.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Deskripsi Permintaan Perbaikan tidak boleh kosong.' }),
    __metadata("design:type", String)
], CreateMaintananceRequestManageDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsDate)({
        message: 'Tanggal pengajuan Permintaan Perbaikan harus berupa format tanggal.',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Tanggal pengajuan Permintaan Perbaikan tidak boleh kosong.',
    }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateMaintananceRequestManageDto.prototype, "requestDate", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.MaintenanceCategory, { message: 'Prioritas permintaan tidak valid.' }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Prioritas permintaan (' +
            Object.values(prisma_1.MaintenanceCategory).join('/') +
            ') tidak boleh kosong.',
    }),
    __metadata("design:type", String)
], CreateMaintananceRequestManageDto.prototype, "priority", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.MaintenanceStatus, {
        message: 'Status Permintaan Perbaikan tidak valid.',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Status Permintaan Perbaikan (' +
            Object.values(prisma_1.MaintenanceStatus).join('/') +
            ') tidak boleh kosong.',
    }),
    __metadata("design:type", String)
], CreateMaintananceRequestManageDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'ID penghuni harus berupa UUID versi 4 yang valid.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'ID penghuni tidak boleh kosong.' }),
    __metadata("design:type", String)
], CreateMaintananceRequestManageDto.prototype, "residentId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', {
        message: 'ID unit hunian harus berupa UUID versi 4 yang valid.',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'ID unit hunian tidak boleh kosong.' }),
    __metadata("design:type", String)
], CreateMaintananceRequestManageDto.prototype, "unitId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'ID karyawan harus berupa UUID versi 4 yang valid.' }),
    (0, class_validator_1.IsOptional)({ message: 'ID karyawan bersifat opsional.' }),
    __metadata("design:type", String)
], CreateMaintananceRequestManageDto.prototype, "assignedToEmployeeId", void 0);
//# sourceMappingURL=create-maintanance-request-manage.dto.js.map