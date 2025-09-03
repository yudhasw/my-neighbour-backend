"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategyService = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const database_service_1 = require("../../../common/database/database.service");
let JwtStrategyService = class JwtStrategyService extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    prisma;
    constructor(prisma) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'fallback-secret-key',
        });
        this.prisma = prisma;
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET environment variable is required');
        }
    }
    async validate(payload) {
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
            throw new common_1.UnauthorizedException('Invalid token');
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
};
exports.JwtStrategyService = JwtStrategyService;
exports.JwtStrategyService = JwtStrategyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], JwtStrategyService);
//# sourceMappingURL=jwt-strategy.service.js.map