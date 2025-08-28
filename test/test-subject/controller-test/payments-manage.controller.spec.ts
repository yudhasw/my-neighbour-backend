import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsManageController } from '../../../src/modules/financial-module/payments-module/payments-manage.controller';
import { PaymentsManageService } from '../../../src/modules/financial-module/payments-module/payments-manage.service';

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
