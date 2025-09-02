/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
  IsArray,
} from 'class-validator';

export class CreateAnnouncementManageDto {
  @IsString({ message: 'Judul pengumuman harus berupa teks.' })
  @IsNotEmpty({ message: 'Judul pengumuman tidak boleh kosong.' })
  @MinLength(5, {
    message: 'Judul pengumuman harus memiliki setidaknya 5 karakter.',
  })
  readonly title: string;

  @IsString({ message: 'Isi pengumuman harus berupa teks.' })
  @IsNotEmpty({ message: 'Isi pengumuman tidak boleh kosong.' })
  readonly content: string;

  @IsArray({ message: 'Lampiran harus berupa array.' })
  @IsString({
    each: true,
    message: 'Setiap lampiran harus berupa teks (URL/path).',
  })
  @IsOptional({ message: 'Lampiran pengumuman bersifat opsional.' })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch {
        return value.split(',').map((item: string) => item.trim());
      }
    }
    return value;
  })
  readonly attachments?: string[];

  @IsDate({
    message: 'Tanggal publikasi harus berupa format tanggal yang valid.',
  })
  @IsNotEmpty({ message: 'Tanggal publikasi tidak boleh kosong.' })
  @Type(() => Date)
  readonly publishDate: Date;

  @IsDate({
    message: 'Tanggal selesai harus berupa format tanggal yang valid.',
  })
  @IsOptional({ message: 'Tanggal selesai bersifat opsional.' })
  @Type(() => Date)
  readonly expiryDate?: Date;

  @IsUUID('4', { message: 'ID karyawan harus berupa UUID versi 4 yang valid.' })
  @IsNotEmpty({ message: 'ID karyawan tidak boleh kosong.' })
  readonly employeeId: string;
}
