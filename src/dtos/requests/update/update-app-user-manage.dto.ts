import { PartialType } from '@nestjs/mapped-types';
import { CreateAppUserManageDto } from '../create/create-app-user-manage.dto';

export class UpdateAppUserManageDto extends PartialType(
  CreateAppUserManageDto,
) {}
