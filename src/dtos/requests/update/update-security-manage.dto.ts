import { PartialType } from '@nestjs/mapped-types';
import { CreateSecurityManageDto } from '../create/create-security-manage.dto';

export class UpdateSecurityManageDto extends PartialType(
  CreateSecurityManageDto,
) {}
