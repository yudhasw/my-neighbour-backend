import { Module } from '@nestjs/common';
import { ExportsManageService } from './exports-manage.service';
import { ExportsManageController } from './exports-manage.controller';

@Module({
  controllers: [ExportsManageController],
  providers: [ExportsManageService],
})
export class ExportsManageModule {}
