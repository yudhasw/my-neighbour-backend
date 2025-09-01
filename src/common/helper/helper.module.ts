import { Module } from '@nestjs/common';
import { ExportsManageModule } from './exports/exports-manage.module';
import { MailerManageModule } from './mail/mailer-manage.module';
import { GeneralHelper } from './generalHelper';

@Module({
  imports: [ExportsManageModule, MailerManageModule],
  providers: [GeneralHelper],
  exports: [ExportsManageModule, MailerManageModule],
})
export class HelperModule {}
