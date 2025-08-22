import { Module } from '@nestjs/common';
import { MailerManageService } from './mailer-manage.service';
import { MailerManageController } from './mailer-manage.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { EmployeeManageModule } from 'src/modules/user-manage-module/employee-module/employee-manage.module';
import { ResidentManageModule } from 'src/modules/user-manage-module/resident-module/resident-manage.module';

@Module({
  imports: [DatabaseModule, EmployeeManageModule, ResidentManageModule],
  controllers: [MailerManageController],
  providers: [MailerManageService],
  exports: [MailerManageService],
})
export class MailerManageModule {}
