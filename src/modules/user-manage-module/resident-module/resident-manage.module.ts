import { forwardRef, Module } from '@nestjs/common';
import { ResidentManageService } from './resident-manage.service';
import { ResidentManageController } from './resident-manage.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { UserManageModule } from '../users-module/user-manage.module';
import { DatabaseService } from 'src/common/database/database.service';
import { UserManageService } from '../users-module/user-manage.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => UserManageModule)],
  controllers: [ResidentManageController],
  providers: [ResidentManageService, DatabaseService, UserManageService],
  exports: [ResidentManageService],
})
export class ResidentManageModule {}
