import { PartialType } from '@nestjs/mapped-types';
import { CreateComplaintManageDto } from '../create/create-complaint-manage.dto';

export class UpdateComplaintManageDto extends PartialType(
  CreateComplaintManageDto,
) {}
