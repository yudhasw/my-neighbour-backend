import { Module } from '@nestjs/common';
import { PaymentsReportService } from './payments-report.service';
import { PaymentsReportController } from './payments-report.controller';

@Module({
  controllers: [PaymentsReportController],
  providers: [PaymentsReportService],
})
export class PaymentsReportModule {}
