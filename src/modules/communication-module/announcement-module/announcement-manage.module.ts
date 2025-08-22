import { Module } from '@nestjs/common';
import { AnnouncementManageService } from './announcement-manage.service';
import { AnnouncementManageController } from './announcement-manage.controller';
import { DatabaseService } from 'src/common/database/database.service';
import { GeneralHelper } from '../../../common/helper/generalHelper';
import { EmployeeManageModule } from '../../../modules/user-manage-module/employee-module/employee-manage.module';

@Module({
  imports: [EmployeeManageModule],
  controllers: [AnnouncementManageController],
  providers: [AnnouncementManageService, DatabaseService, GeneralHelper],
  exports: [AnnouncementManageService],
})
export class AnnouncementManageModule {}
