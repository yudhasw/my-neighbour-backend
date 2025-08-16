import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BillingManageService } from './billing-manage.service';
import { CreateBillingManageDto } from '../../../dtos/requests/create/create-billing-manage.dto';
import { UpdateBillingManageDto } from '../../../dtos/requests/update/update-billing-manage.dto';

@Controller()
export class BillingManageController {
  constructor(private readonly billingManageService: BillingManageService) {}

  @Post()
  create(@Body() createBillingManageDto: CreateBillingManageDto) {
    return this.billingManageService.create(createBillingManageDto);
  }

  @Get()
  findAll() {
    return this.billingManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billingManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBillingManageDto: UpdateBillingManageDto,
  ) {
    return this.billingManageService.update(id, updateBillingManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billingManageService.remove(id);
  }
}
