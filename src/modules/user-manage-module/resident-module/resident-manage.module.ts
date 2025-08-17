import { Module } from '@nestjs/common';
import { ResidentManageService } from './resident-manage.service';
import { ResidentManageController } from './resident-manage.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { DatabaseService } from 'src/common/database/database.service';
import { AppUserManageService } from '../app-users-module/app-user-manage.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ResidentManageController],
  providers: [ResidentManageService, DatabaseService, AppUserManageService],
  exports: [ResidentManageService],
})
export class ResidentManageModule {}
