import { Module } from '@nestjs/common';
import { ComplaintManageService } from './complaint-manage.service';
import { ComplaintManageController } from './complaint-manage.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { DatabaseService } from 'src/common/database/database.service';
import { EmployeeManageModule } from '../user-manage-module/employee-module/employee-manage.module';
import { ResidentManageModule } from '../user-manage-module/resident-module/resident-manage.module';
import { ResidentManageService } from '../user-manage-module/resident-module/resident-manage.service';
import { EmployeeManageService } from '../user-manage-module/employee-module/employee-manage.service';

@Module({
  imports: [DatabaseModule, EmployeeManageModule, ResidentManageModule],
  controllers: [ComplaintManageController],
  providers: [
    ComplaintManageService,
    DatabaseService,
    ResidentManageService,
    EmployeeManageService,
  ],
  exports: [ComplaintManageService],
})
export class ComplaintManageModule {}
