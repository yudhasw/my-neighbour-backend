import { Module } from '@nestjs/common';
import { UnitManageService } from './unit-manage.service';
import { UnitManageController } from './unit-manage.controller';
import { DatabaseModule } from '../../common/database/database.module';
import { DatabaseService } from '../../common/database/database.service';
import { ResidentManageService } from '../user-manage-module/resident-module/resident-manage.service';
import { ResidentManageModule } from '../user-manage-module/resident-module/resident-manage.module';

@Module({
  imports: [DatabaseModule, ResidentManageModule],
  controllers: [UnitManageController],
  providers: [UnitManageService, DatabaseService, ResidentManageService],
  exports: [UnitManageService],
})
export class UnitManageModule {}
