import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { PaymentsManageModule } from '../financial-module/payments-module/payments-manage.module';
import { UnitManageModule } from '../unit-manage-module/unit-manage.module';
import { UsersManageModule } from '../user-manage-module/users-manage.module';
import { SecurityManageModule } from '../security-module/security-manage.module';
import { OperationalReportModule } from './operational-report-module/operational-report.module';
import { PaymentsReportModule } from './payments-report-module/payments-report.module';
import { RequestManageModule } from '../request-module/request-manage.module';

@Module({
  imports: [
    DatabaseModule,
    PaymentsManageModule,
    UnitManageModule,
    RequestManageModule,
    UsersManageModule,
    SecurityManageModule,
    OperationalReportModule,
    PaymentsReportModule,
  ],
  exports: [OperationalReportModule, PaymentsManageModule],
})
export class ReportsManageModule {}
