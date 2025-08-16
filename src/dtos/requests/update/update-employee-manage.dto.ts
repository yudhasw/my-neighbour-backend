import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeManageDto } from '../create/create-employee-manage.dto';

export class UpdateEmployeeManageDto extends PartialType(
  CreateEmployeeManageDto,
) {}
