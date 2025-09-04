import { Module } from '@nestjs/common';
import { FamilyApprovalManageService } from './family-approval-manage.service';
import { FamilyApprovalManageController } from './family-approval-manage.controller';

@Module({
  controllers: [FamilyApprovalManageController],
  providers: [FamilyApprovalManageService],
})
export class FamilyApprovalManageModule {}
