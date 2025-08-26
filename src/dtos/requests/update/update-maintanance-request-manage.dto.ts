import { PartialType } from '@nestjs/mapped-types';
import { CreateMaintananceRequestManageDto } from '../create/create-maintanance-request-manage.dto';

export class UpdateMaintananceRequestManageDto extends PartialType(
  CreateMaintananceRequestManageDto,
) {}
