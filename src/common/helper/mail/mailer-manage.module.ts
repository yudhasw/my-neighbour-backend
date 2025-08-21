import { Module } from '@nestjs/common';
import { MailerManageService } from './mailer-manage.service';
import { MailerManageController } from './mailer-manage.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { EmployeeManageModule } from 'src/modules/user-manage-module/employee-module/employee-manage.module';
import { ResidentManageModule } from 'src/modules/user-manage-module/resident-module/resident-manage.module';
import { EmployeeManageService } from 'src/modules/user-manage-module/employee-module/employee-manage.service';
import { ResidentManageService } from 'src/modules/user-manage-module/resident-module/resident-manage.service';
import { MailerModule } from '@nestjs-modules/mailer';
// import { GeneralHelper } from '../generalHelper';

@Module({
  imports: [
    DatabaseModule,
    EmployeeManageModule,
    ResidentManageModule,
    MailerModule.forRootAsync({}),
  ],
  controllers: [MailerManageController],
  providers: [
    MailerManageService,
    EmployeeManageService,
    ResidentManageService,
  ],
  exports: [MailerManageService],
})
export class MailerManageModule {}
