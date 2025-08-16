import { PartialType } from '@nestjs/mapped-types';
import { CreateLeasesManageDto } from '../create/create-leases-manage.dto';

export class UpdateLeasesManageDto extends PartialType(CreateLeasesManageDto) {}
