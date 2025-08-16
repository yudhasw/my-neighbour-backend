import { PartialType } from '@nestjs/mapped-types';
import { CreateBillingManageDto } from '../create/create-billing-manage.dto';

export class UpdateBillingManageDto extends PartialType(
  CreateBillingManageDto,
) {}
