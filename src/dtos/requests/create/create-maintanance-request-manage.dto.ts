import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsEnum,
  IsUUID,
  IsOptional,
} from 'class-validator';
import {
  MaintenancePriority,
  MaintenanceStatus,
} from '../../../common/database/generated/prisma';

export class CreateMaintananceRequestManageDto {
  @IsString({ message: 'Judul Permintaan Perbaikan harus berupa teks.' })
  @IsNotEmpty({ message: 'Judul Permintaan Perbaikan tidak boleh kosong.' })
  readonly title: string;

  @IsString({ message: 'Deskripsi Permintaan Perbaikan harus berupa teks.' })
  @IsNotEmpty({ message: 'Deskripsi Permintaan Perbaikan tidak boleh kosong.' })
  readonly description: string;

  @IsDate({
    message:
      'Tanggal pengajuan Permintaan Perbaikan harus berupa format tanggal.',
  })
  @IsNotEmpty({
    message: 'Tanggal pengajuan Permintaan Perbaikan tidak boleh kosong.',
  })
  @Type(() => Date)
  readonly requestDate: Date;

  @IsEnum(MaintenancePriority, { message: 'Prioritas permintaan tidak valid.' })
  @IsNotEmpty({
    message:
      'Prioritas permintaan (' +
      Object.values(MaintenancePriority).join('/') +
      ') tidak boleh kosong.',
  })
  readonly priority: MaintenancePriority;

  @IsEnum(MaintenanceStatus, {
    message: 'Status Permintaan Perbaikan tidak valid.',
  })
  @IsNotEmpty({
    message:
      'Status Permintaan Perbaikan (' +
      Object.values(MaintenanceStatus).join('/') +
      ') tidak boleh kosong.',
  })
  readonly status: MaintenanceStatus;

  @IsUUID('4', { message: 'ID penghuni harus berupa UUID versi 4 yang valid.' })
  @IsNotEmpty({ message: 'ID penghuni tidak boleh kosong.' })
  readonly residentId: string;

  @IsUUID('4', {
    message: 'ID unit hunian harus berupa UUID versi 4 yang valid.',
  })
  @IsNotEmpty({ message: 'ID unit hunian tidak boleh kosong.' })
  readonly unitId: string;

  @IsUUID('4', { message: 'ID karyawan harus berupa UUID versi 4 yang valid.' })
  @IsOptional({ message: 'ID karyawan bersifat opsional.' })
  readonly assignedToEmployeeId?: string;
}
