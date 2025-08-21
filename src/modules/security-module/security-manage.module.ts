import { Module } from '@nestjs/common';
import { SecurityManageService } from './security-manage.service';
import { SecurityManageController } from './security-manage.controller';
import { DatabaseModule } from '../../common/database/database.module';
import { DatabaseService } from '../../common/database/database.service';
import { EmployeeManageModule } from '../user-manage-module/employee-module/employee-manage.module';
import { EmployeeManageService } from '../user-manage-module/employee-module/employee-manage.service';
import { GeneralHelper } from '../../common/helper/generalHelper';

@Module({
  imports: [DatabaseModule, EmployeeManageModule],
  controllers: [SecurityManageController],
  providers: [
    SecurityManageService,
    DatabaseService,
    EmployeeManageService,
    GeneralHelper,
  ],
  exports: [SecurityManageService],
})
export class SecurityManageModule {}
