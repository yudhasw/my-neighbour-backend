import { PartialType } from '@nestjs/mapped-types';
import { CreateUserManageDto } from '../create/create-user-manage.dto';

export class UpdateUserManageDto extends PartialType(CreateUserManageDto) {}
