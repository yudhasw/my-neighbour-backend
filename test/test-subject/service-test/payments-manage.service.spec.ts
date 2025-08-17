import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsManageService } from './payments-manage.service';

describe('PaymentsManageService', () => {
  let service: PaymentsManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentsManageService],
    }).compile();

    service = module.get<PaymentsManageService>(PaymentsManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
