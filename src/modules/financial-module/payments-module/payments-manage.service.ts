import { Injectable } from '@nestjs/common';
import { CreatePaymentsManageDto } from '../../../dtos/requests/create/create-payments-manage.dto';
import { UpdatePaymentsManageDto } from '../../../dtos/requests/update/update-payments-manage.dto';

@Injectable()
export class PaymentsManageService {
  create(createRequest: CreatePaymentsManageDto) {
    return 'This action adds a new paymentsManage';
  }

  findAll() {
    return `This action returns all paymentsManage`;
  }

  findOne(id: string) {
    return `This action returns a #${id} paymentsManage`;
  }

  update(id: string, updateRequest: UpdatePaymentsManageDto) {
    return `This action updates a #${id} paymentsManage`;
  }

  remove(id: string) {
    return `This action removes a #${id} paymentsManage`;
  }
}
