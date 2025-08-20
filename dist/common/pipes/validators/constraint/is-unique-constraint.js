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
exports.IsUniqueConstraint = void 0;
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../../database/generated/prisma");
let IsUniqueConstraint = class IsUniqueConstraint {
    prismaClient;
    constructor() {
        this.prismaClient = new prisma_1.PrismaClient();
    }
    async validate(value, args) {
        if (!this.prismaClient) {
            return false;
        }
        const [model, field, excludeIdField] = args.constraints;
        if (value === undefined || value === null || value === '') {
            return true;
        }
        const modelAccessor = this.prismaClient[model];
        if (!modelAccessor || typeof modelAccessor.findFirst !== 'function') {
            console.error(`IsUniqueConstraint: Model "${String(model)}" tidak ditemukan atau tidak mendukung findFirst.`);
            return false;
        }
        const whereCondition = {
            [field]: value,
        };
        if (excludeIdField &&
            args.object &&
            args.object[excludeIdField]) {
            const excludeId = args.object[excludeIdField];
            whereCondition.NOT = {
                id: excludeId,
            };
        }
        try {
            const existingRecord = await modelAccessor.findFirst({
                where: whereCondition,
            });
            return !existingRecord;
        }
        catch (error) {
            console.error(`IsUniqueConstraint: Database error checking uniqueness for ${model}.${field}:`, error);
            return false;
        }
    }
    defaultMessage(args) {
        const [, field] = args.constraints;
        return `Nilai '${args.value}' untuk field '${field}' sudah ada.`;
    }
};
exports.IsUniqueConstraint = IsUniqueConstraint;
exports.IsUniqueConstraint = IsUniqueConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isUnique', async: true }),
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __metadata("design:paramtypes", [])
], IsUniqueConstraint);
//# sourceMappingURL=is-unique-constraint.js.map