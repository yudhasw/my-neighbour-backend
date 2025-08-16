import { Injectable } from '@nestjs/common';
import { CreateSecurityManageDto } from '../../dtos/requests/create/create-security-manage.dto';
import { UpdateSecurityManageDto } from '../../dtos/requests/update/update-security-manage.dto';

@Injectable()
export class SecurityManageService {
  create(createRequest: CreateSecurityManageDto) {
    return 'This action adds a new securityManage';
  }

  findAll() {
    return `This action returns all securityManage`;
  }

  findOne(id: string) {
    return `This action returns a #${id} securityManage`;
  }

  update(id: string, updateRequest: UpdateSecurityManageDto) {
    return `This action updates a #${id} securityManage`;
  }

  remove(id: string) {
    return `This action removes a #${id} securityManage`;
  }
}
