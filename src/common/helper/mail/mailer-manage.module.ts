import { Module } from '@nestjs/common';
import { MailerManageService } from './mailer-manage.service';
import { MailerManageController } from './mailer-manage.controller';

@Module({
  controllers: [MailerManageController],
  providers: [MailerManageService],
})
export class MailerManageModule {}
