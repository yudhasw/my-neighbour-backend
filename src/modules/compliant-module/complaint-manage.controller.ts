import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ComplaintManageService } from './complaint-manage.service';
import { CreateComplaintManageDto } from '../../dtos/requests/create/create-complaint-manage.dto';
import { UpdateComplaintManageDto } from '../../dtos/requests/update/update-complaint-manage.dto';

@Controller()
export class ComplaintManageController {
  constructor(
    private readonly complaintManageService: ComplaintManageService,
  ) {}

  @Post()
  create(@Body() createComplaintManageDto: CreateComplaintManageDto) {
    return this.complaintManageService.create(createComplaintManageDto);
  }

  @Get()
  findAll() {
    return this.complaintManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.complaintManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComplaintManageDto: UpdateComplaintManageDto,
  ) {
    return this.complaintManageService.update(id, updateComplaintManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.complaintManageService.remove(id);
  }
}
