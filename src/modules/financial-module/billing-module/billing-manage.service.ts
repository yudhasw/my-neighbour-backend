import { Injectable } from '@nestjs/common';
import { CreateBillingManageDto } from '../../../dtos/requests/create/create-billing-manage.dto';
import { UpdateBillingManageDto } from '../../../dtos/requests/update/update-billing-manage.dto';

@Injectable()
export class BillingManageService {
  create(createRequest: CreateBillingManageDto) {
    return 'This action adds a new billingManage';
  }

  findAll() {
    return `This action returns all billingManage`;
  }

  findOne(id: string) {
    return `This action returns a #${id} billingManage`;
  }

  update(id: string, updateRequest: UpdateBillingManageDto) {
    return `This action updates a #${id} billingManage`;
  }

  remove(id: string) {
    return `This action removes a #${id} billingManage`;
  }
}
