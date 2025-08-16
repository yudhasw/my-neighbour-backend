import { PartialType } from '@nestjs/mapped-types';
import { CreateForumCommentManageDto } from '../create/create-forum-comment-manage.dto';

export class UpdateForumCommentManageDto extends PartialType(
  CreateForumCommentManageDto,
) {}
