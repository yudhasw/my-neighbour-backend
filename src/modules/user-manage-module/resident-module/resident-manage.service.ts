import { Injectable } from '@nestjs/common';
import { CreateResidentManageDto } from '../../../dtos/requests/create/create-resident-manage.dto';
import { UpdateResidentManageDto } from '../../../dtos/requests/update/update-resident-manage.dto';

@Injectable()
export class ResidentManageService {
  create(createRequest: CreateResidentManageDto) {
    return 'This action adds a new residentManage';
  }

  findAll() {
    return `This action returns all residentManage`;
  }

  findOne(id: string) {
    return `This action returns a #${id} residentManage`;
  }

  update(id: string, updateRequest: UpdateResidentManageDto) {
    return `This action updates a #${id} residentManage`;
  }

  remove(id: string) {
    return `This action removes a #${id} residentManage`;
  }
}
