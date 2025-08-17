import { Injectable } from '@nestjs/common';
import { CreateAppUserManageDto } from '../../../dtos/requests/create/create-app-user-manage.dto';
import { UpdateAppUserManageDto } from '../../../dtos/requests/update/update-app-user-manage.dto';

@Injectable()
export class AppUserManageService {
  create(createRequest: CreateAppUserManageDto) {
    return 'This action adds a new appUserManage';
  }

  findAll() {
    return `This action returns all appUserManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appUserManage`;
  }

  update(id: number, updateRequest: UpdateAppUserManageDto) {
    return `This action updates a #${id} appUserManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} appUserManage`;
  }
}
