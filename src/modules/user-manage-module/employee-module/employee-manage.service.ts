import { Injectable } from '@nestjs/common';
import { CreateEmployeeManageDto } from '../../../dtos/requests/create/create-employee-manage.dto';
import { UpdateEmployeeManageDto } from '../../../dtos/requests/update/update-employee-manage.dto';

@Injectable()
export class EmployeeManageService {
  create(createRequest: CreateEmployeeManageDto) {
    return 'This action adds a new employeeManage';
  }

  findAll() {
    return `This action returns all employeeManage`;
  }

  findOne(id: string) {
    return `This action returns a #${id} employeeManage`;
  }

  update(id: string, updateRequest: UpdateEmployeeManageDto) {
    return `This action updates a #${id} employeeManage`;
  }

  remove(id: string) {
    return `This action removes a #${id} employeeManage`;
  }
}
