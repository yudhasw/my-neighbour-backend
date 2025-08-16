import { PartialType } from '@nestjs/mapped-types';
import { CreateAnnouncementManageDto } from '../create/create-announcement-manage.dto';

export class UpdateAnnouncementManageDto extends PartialType(
  CreateAnnouncementManageDto,
) {}
