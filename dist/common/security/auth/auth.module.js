"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_service_1 = require("./jwt-strategy.service");
const database_module_1 = require("../../database/database.module");
const database_service_1 = require("../../database/database.service");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const mailer_manage_module_1 = require("../../helper/mail/mailer-manage.module");
const platform_express_1 = require("@nestjs/platform-express");
const uploads_configuration_1 = require("../../helper/uploads/uploads-configuration");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: '1h' },
                }),
                inject: [config_1.ConfigService],
            }),
            platform_express_1.MulterModule.register(uploads_configuration_1.UploadsConfiguration.defaultConfig),
            database_module_1.DatabaseModule,
            mailer_manage_module_1.MailerManageModule,
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_service_1.JwtStrategyService, database_service_1.DatabaseService],
        exports: [auth_service_1.AuthService, jwt_strategy_service_1.JwtStrategyService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map