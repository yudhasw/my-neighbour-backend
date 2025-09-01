import { Module } from '@nestjs/common';
import { ExportsManageModule } from './exports/exports-manage.module';
import { MailerManageModule } from './mail/mailer-manage.module';
import { GeneralHelper } from './generalHelper';
import { MidtransModule } from './midtrans/midtrans.module';

@Module({
  imports: [ExportsManageModule, MailerManageModule, MidtransModule],
  providers: [GeneralHelper],
  exports: [ExportsManageModule, MailerManageModule],
})
export class HelperModule {}
