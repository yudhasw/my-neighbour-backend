import { Controller } from '@nestjs/common';
import { MailerManageService } from './mailer-manage.service';

@Controller()
export class MailerManageController {
  constructor(private readonly mailerManageService: MailerManageService) {}
}
