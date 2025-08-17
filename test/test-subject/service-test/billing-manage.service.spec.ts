import { Test, TestingModule } from '@nestjs/testing';
import { BillingManageService } from './billing-manage.service';

describe('BillingManageService', () => {
  let service: BillingManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillingManageService],
    }).compile();

    service = module.get<BillingManageService>(BillingManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
