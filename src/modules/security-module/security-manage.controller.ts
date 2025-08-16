import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SecurityManageService } from './security-manage.service';
import { CreateSecurityManageDto } from '../../dtos/requests/create/create-security-manage.dto';
import { UpdateSecurityManageDto } from '../../dtos/requests/update/update-security-manage.dto';

@Controller()
export class SecurityManageController {
  constructor(private readonly securityManageService: SecurityManageService) {}

  @Post()
  create(@Body() createSecurityManageDto: CreateSecurityManageDto) {
    return this.securityManageService.create(createSecurityManageDto);
  }

  @Get()
  findAll() {
    return this.securityManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.securityManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSecurityManageDto: UpdateSecurityManageDto,
  ) {
    return this.securityManageService.update(id, updateSecurityManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.securityManageService.remove(id);
  }
}
