import { Module } from '@nestjs/common';
import { BillingManageService } from './billing-manage.service';
import { BillingManageController } from './billing-manage.controller';
import { DatabaseModule } from '../../../common/database/database.module';
import { DatabaseService } from '../../../common/database/database.service';
import { UnitManageModule } from '../../../modules/unit-manage-module/unit-manage.module';
import { UnitManageService } from '../../../modules/unit-manage-module/unit-manage.service';
import { EmployeeManageModule } from '../../../modules/user-manage-module/employee-module/employee-manage.module';
import { EmployeeManageService } from '../../../modules/user-manage-module/employee-module/employee-manage.service';
import { GeneralHelper } from '../../../common/helper/generalHelper';

@Module({
  imports: [DatabaseModule, EmployeeManageModule, UnitManageModule],
  controllers: [BillingManageController],
  providers: [
    BillingManageService,
    DatabaseService,
    EmployeeManageService,
    UnitManageService,
    GeneralHelper,
  ],
  exports: [BillingManageService],
})
export class BillingManageModule {}
