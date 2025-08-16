import { Module } from '@nestjs/common';
import { ForumPostManageService } from './forum-post-manage.service';
import { ForumPostManageController } from './forum-post-manage.controller';
import { DatabaseService } from 'src/common/database/database.service';
import { EmployeeManageService } from 'src/modules/user-manage-module/employee-module/employee-manage.service';
import { ResidentManageService } from 'src/modules/user-manage-module/resident-module/resident-manage.service';

@Module({
  controllers: [ForumPostManageController],
  providers: [
    ForumPostManageService,
    DatabaseService,
    EmployeeManageService,
    ResidentManageService,
  ],
  exports: [ForumPostManageService],
})
export class ForumPostManageModule {}
