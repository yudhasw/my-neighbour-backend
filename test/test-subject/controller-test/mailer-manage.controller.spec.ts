import { Test, TestingModule } from '@nestjs/testing';
import { MailerManageController } from './mailer-manage.controller';
import { MailerManageService } from './mailer-manage.service';

describe('MailerManageController', () => {
  let controller: MailerManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailerManageController],
      providers: [MailerManageService],
    }).compile();

    controller = module.get<MailerManageController>(MailerManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
