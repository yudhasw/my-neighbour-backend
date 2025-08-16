import { Module } from '@nestjs/common';
import { UserManageService } from './user-manage.service';
import { UserManageController } from './user-manage.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { ResidentManageModule } from '../resident-module/resident-manage.module';
import { EmployeeManageModule } from '../employee-module/employee-manage.module';
import { DatabaseService } from 'src/common/database/database.service';
import { ResidentManageService } from '../resident-module/resident-manage.service';
import { EmployeeManageService } from '../employee-module/employee-manage.service';

@Module({
  imports: [DatabaseModule, ResidentManageModule, EmployeeManageModule],
  controllers: [UserManageController],
  providers: [
    UserManageService,
    DatabaseService,
    ResidentManageService,
    EmployeeManageService,
  ],
  exports: [UserManageService],
})
export class UserManageModule {}
