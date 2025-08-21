import { Module } from '@nestjs/common';
import { LeasesManageService } from './leases-manage.service';
import { LeasesManageController } from './leases-manage.controller';
import { DatabaseModule } from '../../../common/database/database.module';
import { UnitManageModule } from '../../../modules/unit-manage-module/unit-manage.module';
import { ResidentManageModule } from '../../../modules/user-manage-module/resident-module/resident-manage.module';
import { UnitManageService } from '../../../modules/unit-manage-module/unit-manage.service';
import { ResidentManageService } from '../../../modules/user-manage-module/resident-module/resident-manage.service';
import { DatabaseService } from '../../../common/database/database.service';
import { GeneralHelper } from 'src/common/helper/generalHelper';

@Module({
  imports: [DatabaseModule, UnitManageModule, ResidentManageModule],
  controllers: [LeasesManageController],
  providers: [
    LeasesManageService,
    DatabaseService,
    UnitManageService,
    ResidentManageService,
    GeneralHelper,
  ],
  exports: [LeasesManageService],
})
export class LeasesManageModule {}
