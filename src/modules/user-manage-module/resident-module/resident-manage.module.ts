import { Module } from '@nestjs/common';
import { ResidentManageService } from './resident-manage.service';
import { ResidentManageController } from './resident-manage.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { DatabaseService } from 'src/common/database/database.service';
import { AppUserManageService } from '../app-users-module/app-user-manage.service';
import { GeneralHelper } from 'src/common/helper/generalHelper';

@Module({
  imports: [DatabaseModule],
  controllers: [ResidentManageController],
  providers: [
    ResidentManageService,
    DatabaseService,
    AppUserManageService,
    GeneralHelper,
  ],
  exports: [ResidentManageService],
})
export class ResidentManageModule {}
