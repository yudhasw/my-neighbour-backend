import { Injectable } from '@nestjs/common';
import { CreateFamilyApprovalManageDto } from '../../../../dtos/requests/create/create-family-approval-manage.dto';
import { UpdateFamilyApprovalManageDto } from '../../../../dtos/requests/update/update-family-approval-manage.dto';

@Injectable()
export class FamilyApprovalManageService {
  create(createFamilyApprovalManageDto: CreateFamilyApprovalManageDto) {
    return 'This action adds a new familyApprovalManage';
  }

  findAll() {
    return `This action returns all familyApprovalManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} familyApprovalManage`;
  }

  update(
    id: number,
    updateFamilyApprovalManageDto: UpdateFamilyApprovalManageDto,
  ) {
    return `This action updates a #${id} familyApprovalManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} familyApprovalManage`;
  }
}
