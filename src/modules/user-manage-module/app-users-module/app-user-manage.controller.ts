import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppUserManageService } from './app-user-manage.service';
import { CreateAppUserManageDto } from '../../../dtos/requests/create/create-app-user-manage.dto';
import { UpdateAppUserManageDto } from '../../../dtos/requests/update/update-app-user-manage.dto';

@Controller()
export class AppUserManageController {
  constructor(private readonly appUserManageService: AppUserManageService) {}

  @Post()
  create(@Body() createAppUserManageDto: CreateAppUserManageDto) {
    return this.appUserManageService.create(createAppUserManageDto);
  }

  @Get()
  findAll() {
    return this.appUserManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appUserManageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppUserManageDto: UpdateAppUserManageDto,
  ) {
    return this.appUserManageService.update(+id, updateAppUserManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appUserManageService.remove(+id);
  }
}
