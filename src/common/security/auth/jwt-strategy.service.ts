import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { DatabaseService } from '../../../common/database/database.service';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
  constructor(private prisma: DatabaseService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'fallback-secret-key',
    });

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET environment variable is required');
    }
  }
  async validate(payload: any) {
    const user = await this.prisma.users.findUnique({
      where: { id: payload.sub },
      include: {
        Resident: {
          include: {
            unit: true,
          },
        },
        Employee: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }

    return {
      id: user.id,
      username: user.username,
      primaryEmail: user.primaryEmail,
      role: user.role,
      resident: user.Resident,
      employee: user.Employee,
    };
  }
}
