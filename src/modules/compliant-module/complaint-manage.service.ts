import { Injectable } from '@nestjs/common';
import { CreateComplaintManageDto } from '../../dtos/requests/create/create-complaint-manage.dto';
import { UpdateComplaintManageDto } from '../../dtos/requests/update/update-complaint-manage.dto';

@Injectable()
export class ComplaintManageService {
  create(createRequest: CreateComplaintManageDto) {
    return 'This action adds a new complaintManage';
  }

  findAll() {
    return `This action returns all complaintManage`;
  }

  findOne(id: string) {
    return `This action returns a #${id} complaintManage`;
  }

  update(id: string, updateRequest: UpdateComplaintManageDto) {
    return `This action updates a #${id} complaintManage`;
  }

  remove(id: string) {
    return `This action removes a #${id} complaintManage`;
  }
}
