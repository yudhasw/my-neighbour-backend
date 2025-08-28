import { TestingModule, Test } from '@nestjs/testing';
import { PaymentsReportService } from '../../../src/modules/reports-module/payments-report-module/payments-report.service';

describe('PaymentsReportService', () => {
  let service: PaymentsReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentsReportService],
    }).compile();

    service = module.get<PaymentsReportService>(PaymentsReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
