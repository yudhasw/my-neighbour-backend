import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Gender, UserRole } from '../../../common/database/generated/prisma';
import { Type } from 'class-transformer';
import { IsUnique } from 'src/common/pipes/validators/is-unique-validators';

export class CreateAppUserManageDto {
  @IsString({ message: 'Nama lengkap harus berupa teks' })
  @IsNotEmpty({ message: 'Nama lengkap tidak boleh kosong' })
  readonly fullName: string;

  @IsString({ message: 'Nama depan harus berupa teks' })
  @IsNotEmpty({ message: 'Nama depan tidak boleh kosong' })
  readonly firstName: string;

  @IsString({ message: 'Nama belakang harus berupa teks' })
  @IsNotEmpty({ message: 'Nama belakang tidak boleh kosong' })
  readonly lastName: string;

  @IsDate({ message: 'Tanggal lahir harus berupa format tanggal' })
  @IsOptional()
  @Type(() => Date)
  readonly dateOfBirth: Date;

  @IsString({ message: 'Nomor kontak harus berupa teks' })
  @IsOptional()
  readonly contactNumber: string;

  @IsString({ message: 'Email utama harus berupa teks' })
  @IsNotEmpty({ message: 'Email utama tidak boleh kosong' })
  @IsUnique(
    { field: 'primaryEmail', model: 'user' },
    { message: 'Email utama sudah digunakan' },
  )
  @IsEmail(
    {
      ignore_max_length: true,
      allow_display_name: true,
    },
    {
      message: 'Kolom Email harus berupa Email yang valid',
    },
  )
  readonly primaryEmail: string;

  @IsString({ message: 'Email sekunder harus berupa teks' })
  @IsOptional()
  @IsUnique(
    { field: 'secondaryEmail', model: 'user' },
    { message: 'Email sekunder sudah digunakan' },
  )
  @IsEmail(
    {
      ignore_max_length: true,
      allow_display_name: true,
    },
    {
      message: 'Kolom Email harus berupa Email yang valid',
    },
  )
  readonly secondaryEmail: string;

  @IsString({ message: 'Password harus berupa teks' })
  @IsNotEmpty({ message: 'Password tidak boleh kosong' })
  @MinLength(8, { message: 'Password minimal 8 karakter' })
  readonly password: string;

  @IsNotEmpty({ message: 'Peran tidak boleh kosong' })
  @IsEnum(UserRole, { message: 'Peran tidak valid' })
  readonly role: UserRole;

  @IsNotEmpty({ message: 'Jenis kelamin tidak boleh kosong' })
  @IsEnum(Gender, { message: 'Jenis kelamin tidak valid' })
  readonly gender: Gender;
}
