import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentsManageDto } from '../create/create-payments-manage.dto';

export class UpdatePaymentsManageDto extends PartialType(
  CreatePaymentsManageDto,
) {}
