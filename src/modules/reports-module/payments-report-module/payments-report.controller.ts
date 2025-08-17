import { Controller } from '@nestjs/common';
import { PaymentsReportService } from './payments-report.service';

@Controller()
export class PaymentsReportController {
  constructor(private readonly paymentsReportService: PaymentsReportService) {}
}
