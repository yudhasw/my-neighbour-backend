import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from './jwt-strategy.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { DatabaseService } from 'src/common/database/database.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService, DatabaseService],
})
export class AuthModule {}
