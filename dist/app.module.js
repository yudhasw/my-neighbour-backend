"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./common/database/database.module");
const financial_module_1 = require("./modules/financial-module/financial.module");
const communication_module_1 = require("./modules/communication-module/communication.module");
const complaint_manage_module_1 = require("./modules/compliant-module/complaint-manage.module");
const contact_manage_module_1 = require("./modules/contact-module/contact-manage.module");
const reports_manage_module_1 = require("./modules/reports-module/reports-manage.module");
const security_manage_module_1 = require("./modules/security-module/security-manage.module");
const unit_manage_module_1 = require("./modules/unit-manage-module/unit-manage.module");
const users_manage_module_1 = require("./modules/user-manage-module/users-manage.module");
const announcement_manage_module_1 = require("./modules/communication-module/announcement-module/announcement-manage.module");
const forum_comment_manage_module_1 = require("./modules/communication-module/forum-comment-module/forum-comment-manage.module");
const forum_post_manage_module_1 = require("./modules/communication-module/forum-post-module/forum-post-manage.module");
const billing_manage_module_1 = require("./modules/financial-module/billing-module/billing-manage.module");
const leases_manage_module_1 = require("./modules/financial-module/lease-module/leases-manage.module");
const payments_manage_module_1 = require("./modules/financial-module/payments-module/payments-manage.module");
const employee_manage_module_1 = require("./modules/user-manage-module/employee-module/employee-manage.module");
const resident_manage_module_1 = require("./modules/user-manage-module/resident-module/resident-manage.module");
const user_manage_module_1 = require("./modules/user-manage-module/users-module/user-manage.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            financial_module_1.FinancialModule,
            communication_module_1.CommunicationModule,
            complaint_manage_module_1.ComplaintManageModule,
            contact_manage_module_1.ContactManageModule,
            reports_manage_module_1.ReportsManageModule,
            security_manage_module_1.SecurityManageModule,
            unit_manage_module_1.UnitManageModule,
            users_manage_module_1.UsersManageModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            core_1.RouterModule.register([
                {
                    path: 'users',
                    module: users_manage_module_1.UsersManageModule,
                    children: [
                        {
                            path: 'user',
                            module: user_manage_module_1.UserManageModule,
                        },
                        {
                            path: 'resident',
                            module: resident_manage_module_1.ResidentManageModule,
                        },
                        {
                            path: 'employee',
                            module: employee_manage_module_1.EmployeeManageModule,
                        },
                    ],
                },
                {
                    path: 'residential-units',
                    module: unit_manage_module_1.UnitManageModule,
                },
                {
                    path: 'security-reports',
                    module: security_manage_module_1.SecurityManageModule,
                },
                {
                    path: 'financial-manage',
                    module: financial_module_1.FinancialModule,
                    children: [
                        {
                            path: 'payments',
                            module: payments_manage_module_1.PaymentsManageModule,
                        },
                        {
                            path: 'billing',
                            module: billing_manage_module_1.BillingManageModule,
                        },
                        {
                            path: 'lease',
                            module: leases_manage_module_1.LeasesManageModule,
                        },
                    ],
                },
                {
                    path: 'contacts',
                    module: contact_manage_module_1.ContactManageModule,
                },
                {
                    path: 'resident-compliant',
                    module: complaint_manage_module_1.ComplaintManageModule,
                },
                {
                    path: 'communications',
                    module: communication_module_1.CommunicationModule,
                    children: [
                        {
                            path: 'announcements',
                            module: announcement_manage_module_1.AnnouncementManageModule,
                        },
                        {
                            path: 'forum-post',
                            module: forum_post_manage_module_1.ForumPostManageModule,
                        },
                        {
                            path: 'forum-comment',
                            module: forum_comment_manage_module_1.ForumCommentManageModule,
                        },
                    ],
                },
            ]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map