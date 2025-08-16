import { Module } from '@nestjs/common';
import { AnnouncementManageService } from './announcement-manage.service';
import { AnnouncementManageController } from './announcement-manage.controller';
import { DatabaseService } from 'src/common/database/database.service';
import { EmployeeManageService } from 'src/modules/user-manage-module/employee-module/employee-manage.service';

@Module({
  controllers: [AnnouncementManageController],
  providers: [
    AnnouncementManageService,
    DatabaseService,
    EmployeeManageService,
  ],
  exports: [AnnouncementManageService],
})
export class AnnouncementManageModule {}
