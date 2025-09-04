import { PartialType } from '@nestjs/mapped-types';
import { CreateFamilyCodeManageDto } from '../create/create-family-code-manage.dto';

export class UpdateFamilyCodeManageDto extends PartialType(
  CreateFamilyCodeManageDto,
) {}
