import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResidentManageService } from './resident-manage.service';
import { CreateResidentManageDto } from '../../../dtos/requests/create/create-resident-manage.dto';
import { UpdateResidentManageDto } from '../../../dtos/requests/update/update-resident-manage.dto';

@Controller()
export class ResidentManageController {
  constructor(private readonly residentManageService: ResidentManageService) {}

  @Post()
  create(@Body() createResidentManageDto: CreateResidentManageDto) {
    return this.residentManageService.create(createResidentManageDto);
  }

  @Get()
  findAll() {
    return this.residentManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.residentManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResidentManageDto: UpdateResidentManageDto,
  ) {
    return this.residentManageService.update(id, updateResidentManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.residentManageService.remove(id);
  }
}
