import { Module } from '@nestjs/common';
import { UnitManageService } from './unit-manage.service';
import { UnitManageController } from './unit-manage.controller';
import { DatabaseModule } from '../../common/database/database.module';
import { DatabaseService } from '../../common/database/database.service';
import { ResidentManageService } from '../user-manage-module/resident-module/resident-manage.service';
import { ResidentManageModule } from '../user-manage-module/resident-module/resident-manage.module';
import { GeneralHelper } from 'src/common/helper/generalHelper';

@Module({
  imports: [DatabaseModule, ResidentManageModule],
  controllers: [UnitManageController],
  providers: [
    UnitManageService,
    DatabaseService,
    ResidentManageService,
    DatabaseService,
    GeneralHelper,
  ],
  exports: [UnitManageService],
})
export class UnitManageModule {}
