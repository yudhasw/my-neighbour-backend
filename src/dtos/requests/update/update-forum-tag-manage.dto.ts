import { PartialType } from '@nestjs/mapped-types';
import { CreateForumTagManageDto } from '../create/create-forum-tag-manage.dto';

export class UpdateForumTagManageDto extends PartialType(
  CreateForumTagManageDto,
) {}
