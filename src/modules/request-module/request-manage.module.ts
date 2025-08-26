import { Module } from '@nestjs/common';
import { ComplaintManageModule } from './compliant-module/complaint-manage.module';
import { MaintananceRequestManageModule } from './maintanance-request-module/maintanance-request-manage.module';
import { DatabaseModule } from '../../common/database/database.module';
import { UsersManageModule } from '../user-manage-module/users-manage.module';

@Module({
  imports: [
    DatabaseModule,
    ComplaintManageModule,
    MaintananceRequestManageModule,
    UsersManageModule,
  ],
  exports: [ComplaintManageModule, MaintananceRequestManageModule],
})
export class RequestManageModule {}
