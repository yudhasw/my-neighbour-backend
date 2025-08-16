import { Injectable } from '@nestjs/common';
import { CreateLeasesManageDto } from '../../../dtos/requests/create/create-leases-manage.dto';
import { UpdateLeasesManageDto } from '../../../dtos/requests/update/update-leases-manage.dto';

@Injectable()
export class LeasesManageService {
  create(createRequest: CreateLeasesManageDto) {
    return 'This action adds a new leasesManage';
  }

  findAll() {
    return `This action returns all leasesManage`;
  }

  findOne(id: string) {
    return `This action returns a #${id} leasesManage`;
  }

  update(id: string, updateRequest: UpdateLeasesManageDto) {
    return `This action updates a #${id} leasesManage`;
  }

  remove(id: string) {
    return `This action removes a #${id} leasesManage`;
  }
}
