import { Module } from '@nestjs/common';
import { EmployeeManageService } from './employee-manage.service';
import { EmployeeManageController } from './employee-manage.controller';
import { DatabaseModule } from '../../../common/database/database.module';
import { DatabaseService } from '../../../common/database/database.service';
import { AppUserManageService } from '../app-users-module/app-user-manage.service';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeeManageController],
  providers: [EmployeeManageService, DatabaseService, AppUserManageService],
  exports: [EmployeeManageService],
})
export class EmployeeManageModule {}
