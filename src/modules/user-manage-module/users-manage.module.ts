import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { EmployeeManageModule } from './employee-module/employee-manage.module';
import { ResidentManageModule } from './resident-module/resident-manage.module';

@Module({
  imports: [
    DatabaseModule,
    EmployeeManageModule,
    ResidentManageModule,
    UsersManageModule,
  ],
  exports: [EmployeeManageModule, ResidentManageModule, UsersManageModule],
})
export class UsersManageModule {}
