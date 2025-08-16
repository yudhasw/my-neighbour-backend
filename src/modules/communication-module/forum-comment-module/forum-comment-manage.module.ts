import { Module } from '@nestjs/common';
import { ForumCommentManageService } from './forum-comment-manage.service';
import { ForumCommentManageController } from './forum-comment-manage.controller';
import { EmployeeManageService } from 'src/modules/user-manage-module/employee-module/employee-manage.service';
import { ResidentManageService } from 'src/modules/user-manage-module/resident-module/resident-manage.service';
import { DatabaseService } from 'src/common/database/database.service';

@Module({
  controllers: [ForumCommentManageController],
  providers: [
    ForumCommentManageService,
    EmployeeManageService,
    ResidentManageService,
    DatabaseService,
  ],
  exports: [ForumCommentManageService],
})
export class ForumCommentManageModule {}
