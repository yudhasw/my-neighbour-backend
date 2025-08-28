import { Test, TestingModule } from '@nestjs/testing';
import { BillingManageController } from '../../../src/modules/financial-module/billing-module/billing-manage.controller';
import { BillingManageService } from '../../../src/modules/financial-module/billing-module/billing-manage.service';

describe('BillingManageController', () => {
  let controller: BillingManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillingManageController],
      providers: [BillingManageService],
    }).compile();

    controller = module.get<BillingManageController>(BillingManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
