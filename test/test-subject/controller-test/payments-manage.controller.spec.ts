import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsManageController } from './payments-manage.controller';
import { PaymentsManageService } from './payments-manage.service';

describe('PaymentsManageController', () => {
  let controller: PaymentsManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsManageController],
      providers: [PaymentsManageService],
    }).compile();

    controller = module.get<PaymentsManageController>(PaymentsManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
