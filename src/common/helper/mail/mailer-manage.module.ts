import { Module } from '@nestjs/common';
import path from 'path';
import { MailerManageService } from './mailer-manage.service';
import { MailerManageController } from './mailer-manage.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { EmployeeManageModule } from 'src/modules/user-manage-module/employee-module/employee-manage.module';
import { ResidentManageModule } from 'src/modules/user-manage-module/resident-module/resident-manage.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    EmployeeManageModule,
    ResidentManageModule,
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('MAIL_HOST', 'smtp.gmail.com'),
          port: configService.get<number>('MAIL_PORT', 587),
          secure: configService.get<number>('MAIL_PORT', 587) === 465,
          auth: {
            user: configService.get<string>('MAIL_USER'),
            pass: configService.get<string>('MAIL_PASSWORD'),
          },
          tls: {
            rejectUnauthorized: false,
          },
        },
        defaults: {
          from: configService.get<string>(
            'MAIL_FROM_NAME',
            'noreply@example.com',
          ),
        },
        template: {
          dir: path.join(__dirname, '../templates'),
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  controllers: [MailerManageController],
  providers: [MailerManageService],
  exports: [MailerManageService],
})
export class MailerManageModule {}
