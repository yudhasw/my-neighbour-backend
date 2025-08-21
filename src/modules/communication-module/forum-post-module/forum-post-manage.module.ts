import { Module } from '@nestjs/common';
import { ForumPostManageService } from './forum-post-manage.service';
import { ForumPostManageController } from './forum-post-manage.controller';
import { DatabaseService } from '../../../common/database/database.service';
import { EmployeeManageService } from '../../../modules/user-manage-module/employee-module/employee-manage.service';
import { ResidentManageService } from '../../../modules/user-manage-module/resident-module/resident-manage.service';
import { GeneralHelper } from '../../../common/helper/generalHelper';

@Module({
  controllers: [ForumPostManageController],
  providers: [
    ForumPostManageService,
    DatabaseService,
    EmployeeManageService,
    ResidentManageService,
    GeneralHelper,
  ],
  exports: [ForumPostManageService],
})
export class ForumPostManageModule {}
