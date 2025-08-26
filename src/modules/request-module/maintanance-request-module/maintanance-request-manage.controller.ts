import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MaintananceRequestManageService } from './maintanance-request-manage.service';
import { CreateMaintananceRequestManageDto } from '../../../dtos/requests/create/create-maintanance-request-manage.dto';
import { UpdateMaintananceRequestManageDto } from '../../../dtos/requests/update/update-maintanance-request-manage.dto';

@Controller('maintanance-request-manage')
export class MaintananceRequestManageController {
  constructor(
    private readonly maintananceRequestManageService: MaintananceRequestManageService,
  ) {}

  @Post()
  create(
    @Body()
    createMaintananceRequestManageDto: CreateMaintananceRequestManageDto,
  ) {
    return this.maintananceRequestManageService.create(
      createMaintananceRequestManageDto,
    );
  }

  @Get()
  findAll() {
    return this.maintananceRequestManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maintananceRequestManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateMaintananceRequestManageDto: UpdateMaintananceRequestManageDto,
  ) {
    return this.maintananceRequestManageService.update(
      id,
      updateMaintananceRequestManageDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maintananceRequestManageService.remove(id);
  }
}
