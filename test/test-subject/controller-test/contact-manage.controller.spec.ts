import { Test, TestingModule } from '@nestjs/testing';
import { ContactManageController } from './contact-manage.controller';
import { ContactManageService } from './contact-manage.service';

describe('ContactManageController', () => {
  let controller: ContactManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactManageController],
      providers: [ContactManageService],
    }).compile();

    controller = module.get<ContactManageController>(ContactManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
