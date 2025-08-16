import { Module } from '@nestjs/common';
import { PaymentsManageService } from '../payments-module/payments-manage.service';
import { PaymentsManageController } from './payments-manage.controller';
import { BillingManageModule } from '../billing-module/billing-manage.module';
import { LeasesManageModule } from '../lease-module/leases-manage.module';
import { ResidentManageModule } from '../../user-manage-module/resident-module/resident-manage.module';
import { UnitManageModule } from '../../unit-manage-module/unit-manage.module';
import { DatabaseService } from 'src/common/database/database.service';
import { ResidentManageService } from 'src/modules/user-manage-module/resident-module/resident-manage.service';
import { UnitManageService } from 'src/modules/unit-manage-module/unit-manage.service';

@Module({
  imports: [
    BillingManageModule,
    LeasesManageModule,
    ResidentManageModule,
    UnitManageModule,
  ],
  controllers: [PaymentsManageController],
  providers: [
    PaymentsManageService,
    DatabaseService,
    ResidentManageService,
    UnitManageService,
  ],
  exports: [PaymentsManageService],
})
export class PaymentsManageModule {}
