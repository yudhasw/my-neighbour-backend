import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsReportController } from 'src/modules/reports-module/payments-report-module/payments-report.controller';
import { PaymentsReportService } from 'src/modules/reports-module/payments-report-module/payments-report.service';

describe('PaymentsReportController', () => {
  let controller: PaymentsReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsReportController],
      providers: [PaymentsReportService],
    }).compile();

    controller = module.get<PaymentsReportController>(PaymentsReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
