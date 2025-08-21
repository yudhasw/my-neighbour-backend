import { Module } from '@nestjs/common';
import { ForumCommentManageService } from './forum-comment-manage.service';
import { ForumCommentManageController } from './forum-comment-manage.controller';
import { EmployeeManageService } from '../../../modules/user-manage-module/employee-module/employee-manage.service';
import { ResidentManageService } from '../../../modules/user-manage-module/resident-module/resident-manage.service';
import { DatabaseService } from '../../../common/database/database.service';
import { GeneralHelper } from '../../../common/helper/generalHelper';

@Module({
  controllers: [ForumCommentManageController],
  providers: [
    ForumCommentManageService,
    EmployeeManageService,
    ResidentManageService,
    DatabaseService,
    GeneralHelper,
  ],
  exports: [ForumCommentManageService],
})
export class ForumCommentManageModule {}
