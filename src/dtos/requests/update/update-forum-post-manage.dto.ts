import { PartialType } from '@nestjs/mapped-types';
import { CreateForumPostManageDto } from '../create/create-forum-post-manage.dto';

export class UpdateForumPostManageDto extends PartialType(
  CreateForumPostManageDto,
) {}
