import { Module } from '@nestjs/common';
import { FamilyCodeManageService } from './family-code-manage.service';
import { FamilyCodeManageController } from './family-code-manage.controller';

@Module({
  controllers: [FamilyCodeManageController],
  providers: [FamilyCodeManageService],
})
export class FamilyCodeManageModule {}
