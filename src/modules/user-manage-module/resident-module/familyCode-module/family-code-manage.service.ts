import { Injectable } from '@nestjs/common';
import { CreateFamilyCodeManageDto } from '../../../../dtos/requests/create/create-family-code-manage.dto';
import { UpdateFamilyCodeManageDto } from '../../../../dtos/requests/update/update-family-code-manage.dto';

@Injectable()
export class FamilyCodeManageService {
  create(createFamilyCodeManageDto: CreateFamilyCodeManageDto) {
    return 'This action adds a new familyCodeManage';
  }

  findAll() {
    return `This action returns all familyCodeManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} familyCodeManage`;
  }

  update(id: number, updateFamilyCodeManageDto: UpdateFamilyCodeManageDto) {
    return `This action updates a #${id} familyCodeManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} familyCodeManage`;
  }
}
