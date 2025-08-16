import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UnitManageService } from './unit-manage.service';
import { CreateUnitManageDto } from '../../dtos/requests/create/create-unit-manage.dto';
import { UpdateUnitManageDto } from '../../dtos/requests/update/update-unit-manage.dto';

@Controller()
export class UnitManageController {
  constructor(private readonly unitManageService: UnitManageService) {}

  @Post()
  create(@Body() createUnitManageDto: CreateUnitManageDto) {
    return this.unitManageService.create(createUnitManageDto);
  }

  @Get()
  findAll() {
    return this.unitManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unitManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUnitManageDto: UpdateUnitManageDto,
  ) {
    return this.unitManageService.update(id, updateUnitManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unitManageService.remove(id);
  }
}
