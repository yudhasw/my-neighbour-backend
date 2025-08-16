import { Module } from '@nestjs/common';
import { BillingManageService } from './billing-manage.service';
import { BillingManageController } from './billing-manage.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { DatabaseService } from 'src/common/database/database.service';
import { UnitManageModule } from 'src/modules/unit-manage-module/unit-manage.module';
import { UnitManageService } from 'src/modules/unit-manage-module/unit-manage.service';
import { EmployeeManageModule } from 'src/modules/user-manage-module/employee-module/employee-manage.module';
import { EmployeeManageService } from 'src/modules/user-manage-module/employee-module/employee-manage.service';

@Module({
  imports: [DatabaseModule, EmployeeManageModule, UnitManageModule],
  controllers: [BillingManageController],
  providers: [
    BillingManageService,
    DatabaseService,
    EmployeeManageService,
    UnitManageService,
  ],
  exports: [BillingManageService],
})
export class BillingManageModule {}
