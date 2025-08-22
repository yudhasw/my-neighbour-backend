import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailerManageService {
  constructor(private readonly mailService: MailerService) {}
}
