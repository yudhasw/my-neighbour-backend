import { Injectable } from '@nestjs/common';
import { CreateUserManageDto } from '../../../dtos/requests/create/create-user-manage.dto';
import { UpdateUserManageDto } from '../../../dtos/requests/update/update-user-manage.dto';

@Injectable()
export class UserManageService {
  create(createRequest: CreateUserManageDto) {
    return 'This action adds a new userManage';
  }

  findAll() {
    return `This action returns all userManage`;
  }

  findOne(id: string) {
    return `This action returns a #${id} userManage`;
  }

  update(id: string, updateRequest: UpdateUserManageDto) {
    return `This action updates a #${id} userManage`;
  }

  remove(id: string) {
    return `This action removes a #${id} userManage`;
  }
}
