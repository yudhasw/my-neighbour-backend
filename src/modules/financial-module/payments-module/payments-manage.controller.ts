import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaymentsManageService } from '../payments-module/payments-manage.service';
import { CreatePaymentsManageDto } from '../../../dtos/requests/create/create-payments-manage.dto';
import { UpdatePaymentsManageDto } from '../../../dtos/requests/update/update-payments-manage.dto';

@Controller()
export class PaymentsManageController {
  constructor(private readonly paymentsManageService: PaymentsManageService) {}

  @Post()
  create(@Body() createPaymentsManageDto: CreatePaymentsManageDto) {
    return this.paymentsManageService.create(createPaymentsManageDto);
  }

  @Get()
  findAll() {
    return this.paymentsManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentsManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentsManageDto: UpdatePaymentsManageDto,
  ) {
    return this.paymentsManageService.update(id, updatePaymentsManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentsManageService.remove(id);
  }
}
