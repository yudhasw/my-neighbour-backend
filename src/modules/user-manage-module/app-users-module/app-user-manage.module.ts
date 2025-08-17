import { Module } from '@nestjs/common';
import { AppUserManageService } from './app-user-manage.service';
import { AppUserManageController } from './app-user-manage.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { EmployeeManageModule } from '../employee-module/employee-manage.module';
import { ResidentManageModule } from '../resident-module/resident-manage.module';
import { DatabaseService } from 'src/common/database/database.service';
import { EmployeeManageService } from '../employee-module/employee-manage.service';
import { ResidentManageService } from '../resident-module/resident-manage.service';

@Module({
  imports: [DatabaseModule, ResidentManageModule, EmployeeManageModule],
  controllers: [AppUserManageController],
  providers: [
    AppUserManageService,
    DatabaseService,
    ResidentManageService,
    EmployeeManageService,
  ],
  exports: [AppUserManageService],
})
export class AppUserManageModule {}
