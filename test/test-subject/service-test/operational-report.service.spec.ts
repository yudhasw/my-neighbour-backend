import { Test, TestingModule } from '@nestjs/testing';
import { OperationalReportService } from '../../../src/modules/reports-module/operational-report-module/operational-report.service';

describe('OperationalReportService', () => {
  let service: OperationalReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationalReportService],
    }).compile();

    service = module.get<OperationalReportService>(OperationalReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
