import { Injectable } from '@nestjs/common';
import { CreateUnitManageDto } from '../../dtos/requests/create/create-unit-manage.dto';
import { UpdateUnitManageDto } from '../../dtos/requests/update/update-unit-manage.dto';

@Injectable()
export class UnitManageService {
  create(createRequest: CreateUnitManageDto) {
    return 'This action adds a new unitManage';
  }

  findAll() {
    return `This action returns all unitManage`;
  }

  findOne(id: string) {
    return `This action returns a #${id} unitManage`;
  }

  update(id: string, updateRequest: UpdateUnitManageDto) {
    return `This action updates a #${id} unitManage`;
  }

  remove(id: string) {
    return `This action removes a #${id} unitManage`;
  }
}
