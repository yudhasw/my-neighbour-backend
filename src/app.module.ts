import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './common/database/database.module';
import { FinancialModule } from './modules/financial-module/financial.module';
import { CommunicationModule } from './modules/communication-module/communication.module';
import { ComplaintManageModule } from './modules/compliant-module/complaint-manage.module';
import { ContactManageModule } from './modules/contact-module/contact-manage.module';
import { SecurityManageModule } from './modules/security-module/security-manage.module';
import { UnitManageModule } from './modules/unit-manage-module/unit-manage.module';
import { UsersManageModule } from './modules/user-manage-module/users-manage.module';
import { AnnouncementManageModule } from './modules/communication-module/announcement-module/announcement-manage.module';
import { ForumCommentManageModule } from './modules/communication-module/forum-comment-module/forum-comment-manage.module';
import { ForumPostManageModule } from './modules/communication-module/forum-post-module/forum-post-manage.module';
import { BillingManageModule } from './modules/financial-module/billing-module/billing-manage.module';
import { LeasesManageModule } from './modules/financial-module/lease-module/leases-manage.module';
import { PaymentsManageModule } from './modules/financial-module/payments-module/payments-manage.module';
import { EmployeeManageModule } from './modules/user-manage-module/employee-module/employee-manage.module';
import { ResidentManageModule } from './modules/user-manage-module/resident-module/resident-manage.module';
import { UserManageModule } from './modules/user-manage-module/users-module/user-manage.module';
import { BackendApiModule } from './modules/backend-api.module';

@Module({
  imports: [
    DatabaseModule,
    BackendApiModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    RouterModule.register([
      {
        path: 'api',
        module: BackendApiModule,
        children: [
          {
            path: 'users',
            module: UsersManageModule,
            children: [
              {
                path: 'user',
                module: UserManageModule,
              },
              {
                path: 'resident',
                module: ResidentManageModule,
              },
              {
                path: 'employee',
                module: EmployeeManageModule,
              },
            ],
          },
          {
            path: 'residential-units',
            module: UnitManageModule,
          },
          {
            path: 'security-reports',
            module: SecurityManageModule,
          },
          {
            path: 'financial-manage',
            module: FinancialModule,
            children: [
              {
                path: 'payments',
                module: PaymentsManageModule,
              },
              {
                path: 'billing',
                module: BillingManageModule,
              },
              {
                path: 'lease',
                module: LeasesManageModule,
              },
            ],
          },
          {
            path: 'contacts',
            module: ContactManageModule,
          },
          {
            path: 'resident-compliant',
            module: ComplaintManageModule,
          },
          {
            path: 'communications',
            module: CommunicationModule,
            children: [
              {
                path: 'announcements',
                module: AnnouncementManageModule,
              },
              {
                path: 'forum-post',
                module: ForumPostManageModule,
              },
              {
                path: 'forum-comment',
                module: ForumCommentManageModule,
              },
            ],
          },
        ],
      },
    ]),
  ],
})
export class AppModule {}
