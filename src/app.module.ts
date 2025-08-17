import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinancialModule } from './modules/financial-module/financial.module';
import { CommunicationModule } from './modules/communication-module/communication.module';
import { ComplaintManageModule } from './modules/compliant-module/complaint-manage.module';
import { ContactManageModule } from './modules/contact-module/contact-manage.module';
import { ReportsManageModule } from './modules/reports-module/reports-manage.module';
import { SecurityManageModule } from './modules/security-module/security-manage.module';
import { UnitManageModule } from './modules/unit-manage-module/unit-manage.module';
import { UsersManageModule } from './modules/user-manage-module/users-manage.module';

@Module({
  imports: [
    FinancialModule,
    CommunicationModule,
    ComplaintManageModule,
    ContactManageModule,
    ReportsManageModule,
    SecurityManageModule,
    UnitManageModule,
    UsersManageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
