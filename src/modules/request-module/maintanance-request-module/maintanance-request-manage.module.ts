import { Module } from '@nestjs/common';
import { MaintananceRequestManageService } from './maintanance-request-manage.service';
import { MaintananceRequestManageController } from './maintanance-request-manage.controller';
import { AppUserManageModule } from '../../../modules/user-manage-module/app-users-module/app-user-manage.module';
import { DatabaseModule } from '../../../common/database/database.module';
import { DatabaseService } from '../../../common/database/database.service';

@Module({
  controllers: [
    MaintananceRequestManageController,
    AppUserManageModule,
    DatabaseModule,
  ],
  providers: [MaintananceRequestManageService, DatabaseService],
  exports: [MaintananceRequestManageService],
})
export class MaintananceRequestManageModule {}
