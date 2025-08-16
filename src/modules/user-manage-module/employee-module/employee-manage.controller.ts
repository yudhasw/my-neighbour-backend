import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeeManageService } from './employee-manage.service';
import { CreateEmployeeManageDto } from '../../../dtos/requests/create/create-employee-manage.dto';
import { UpdateEmployeeManageDto } from '../../../dtos/requests/update/update-employee-manage.dto';

@Controller()
export class EmployeeManageController {
  constructor(private readonly employeeManageService: EmployeeManageService) {}

  @Post()
  create(@Body() createEmployeeManageDto: CreateEmployeeManageDto) {
    return this.employeeManageService.create(createEmployeeManageDto);
  }

  @Get()
  findAll() {
    return this.employeeManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeManageDto: UpdateEmployeeManageDto,
  ) {
    return this.employeeManageService.update(id, updateEmployeeManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeManageService.remove(id);
  }
}
