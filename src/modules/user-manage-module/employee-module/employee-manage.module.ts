import { forwardRef, Module } from '@nestjs/common';
import { EmployeeManageService } from './employee-manage.service';
import { EmployeeManageController } from './employee-manage.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { DatabaseService } from 'src/common/database/database.service';
import { UserManageService } from '../users-module/user-manage.service';
import { UserManageModule } from '../users-module/user-manage.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => UserManageModule)],
  controllers: [EmployeeManageController],
  providers: [EmployeeManageService, DatabaseService, UserManageService],
  exports: [EmployeeManageService],
})
export class EmployeeManageModule {}
