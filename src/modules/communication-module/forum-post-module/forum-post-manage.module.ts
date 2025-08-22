import { Module } from '@nestjs/common';
import { ForumPostManageService } from './forum-post-manage.service';
import { ForumPostManageController } from './forum-post-manage.controller';
import { DatabaseService } from '../../../common/database/database.service';
import { GeneralHelper } from '../../../common/helper/generalHelper';
import { AppUserManageModule } from '../../../modules/user-manage-module/app-users-module/app-user-manage.module';
import { EmployeeManageModule } from '../../../modules/user-manage-module/employee-module/employee-manage.module';
import { ResidentManageModule } from '../../../modules/user-manage-module/resident-module/resident-manage.module';

@Module({
  imports: [AppUserManageModule, EmployeeManageModule, ResidentManageModule],
  controllers: [ForumPostManageController],
  providers: [ForumPostManageService, DatabaseService, GeneralHelper],
  exports: [ForumPostManageService],
})
export class ForumPostManageModule {}
