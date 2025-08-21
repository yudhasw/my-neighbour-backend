import { Test, TestingModule } from '@nestjs/testing';
import { MailerManageService } from './mailer-manage.service';

describe('MailerManageService', () => {
  let service: MailerManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailerManageService],
    }).compile();

    service = module.get<MailerManageService>(MailerManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
