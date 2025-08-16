import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LeasesManageService } from './leases-manage.service';
import { CreateLeasesManageDto } from '../../../dtos/requests/create/create-leases-manage.dto';
import { UpdateLeasesManageDto } from '../../../dtos/requests/update/update-leases-manage.dto';

@Controller()
export class LeasesManageController {
  constructor(private readonly leasesManageService: LeasesManageService) {}

  @Post()
  create(@Body() createLeasesManageDto: CreateLeasesManageDto) {
    return this.leasesManageService.create(createLeasesManageDto);
  }

  @Get()
  findAll() {
    return this.leasesManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leasesManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLeasesManageDto: UpdateLeasesManageDto,
  ) {
    return this.leasesManageService.update(id, updateLeasesManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leasesManageService.remove(id);
  }
}
