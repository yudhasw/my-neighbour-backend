import { IsNotEmpty, IsString } from 'class-validator';
import { IsUnique } from 'src/common/pipes/validators/is-unique-validators';

export class CreateForumTagManageDto {
  @IsString({ message: 'Label Forum Harus berupa teks' })
  @IsUnique({ field: 'tagName', model: 'postTags' })
  @IsNotEmpty({ message: 'Label Forum Bersifat Optional' })
  readonly tagName: string;
}
