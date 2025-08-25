import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateForumCommentManageDto {
  @IsString({ message: 'Isi pengumuman harus berupa teks.' })
  @IsNotEmpty({ message: 'Isi pengumuman tidak boleh kosong.' })
  readonly content: string;

  @IsUUID('4', {
    message: 'ID pengguna aplikasi harus berupa UUID versi 4 yang valid.',
  })
  @IsString({ message: 'ID pengguna aplikasi harus berupa teks' })
  @IsNotEmpty({ message: 'ID pengguna aplikasi tidak boleh kosong.' })
  readonly userId: string;

  @IsUUID('4', {
    message: 'ID Postingan Forum harus berupa UUID versi 4 yang valid.',
  })
  @IsString({ message: 'ID Postingan Forum harus berupa teks' })
  @IsNotEmpty({ message: 'ID Postingan Forum tidak boleh kosong.' })
  readonly postId: string;
}
