import { Module } from '@nestjs/common';
import { CommunicationModule } from './communication-module/communication.module';
import { ContactManageModule } from './contact-module/contact-manage.module';
import { FinancialModule } from './financial-module/financial.module';
import { ReportsManageModule } from './reports-module/reports-manage.module';
import { SecurityManageModule } from './security-module/security-manage.module';
import { UnitManageModule } from './unit-manage-module/unit-manage.module';
import { UsersManageModule } from './user-manage-module/users-manage.module';
import { RequestManageModule } from './request-module/request-manage.module';

@Module({
  imports: [
    FinancialModule,
    CommunicationModule,
    ContactManageModule,
    ReportsManageModule,
    SecurityManageModule,
    UnitManageModule,
    UsersManageModule,
    RequestManageModule,
  ],
  exports: [
    FinancialModule,
    CommunicationModule,
    ContactManageModule,
    ReportsManageModule,
    SecurityManageModule,
    UnitManageModule,
    UsersManageModule,
    RequestManageModule,
  ],
})
export class BackendApiModule {}
