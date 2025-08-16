import { Module } from '@nestjs/common';
import { LeasesManageService } from './leases-manage.service';
import { LeasesManageController } from './leases-manage.controller';
import { DatabaseModule } from '../../../common/database/database.module';
import { UnitManageModule } from 'src/modules/unit-manage-module/unit-manage.module';
import { ResidentManageModule } from 'src/modules/user-manage-module/resident-module/resident-manage.module';
import { UnitManageService } from 'src/modules/unit-manage-module/unit-manage.service';
import { ResidentManageService } from 'src/modules/user-manage-module/resident-module/resident-manage.service';
import { DatabaseService } from 'src/common/database/database.service';

@Module({
  imports: [DatabaseModule, UnitManageModule, ResidentManageModule],
  controllers: [LeasesManageController],
  providers: [
    LeasesManageService,
    DatabaseService,
    UnitManageService,
    ResidentManageService,
  ],
  exports: [LeasesManageService],
})
export class LeasesManageModule {}
