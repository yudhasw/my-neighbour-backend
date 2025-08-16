import { Controller } from '@nestjs/common';
import { OperationalReportService } from './operational-report.service';

@Controller('operational-report')
export class OperationalReportController {
  constructor(
    private readonly operationalReportService: OperationalReportService,
  ) {}
}
