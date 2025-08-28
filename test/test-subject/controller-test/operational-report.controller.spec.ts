import { Test, TestingModule } from '@nestjs/testing';
import { OperationalReportController } from '../../../src/modules/reports-module/operational-report-module/operational-report.controller';
import { OperationalReportService } from '../../../src/modules/reports-module/operational-report-module/operational-report.service';

describe('OperationalReportController', () => {
  let controller: OperationalReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperationalReportController],
      providers: [OperationalReportService],
    }).compile();

    controller = module.get<OperationalReportController>(
      OperationalReportController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
