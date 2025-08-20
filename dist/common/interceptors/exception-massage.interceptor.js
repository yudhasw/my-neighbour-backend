"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaErrorInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const library_1 = require("@prisma/client/runtime/library");
let PrismaErrorInterceptor = class PrismaErrorInterceptor {
    intercept(_context, next) {
        return next.handle().pipe((0, operators_1.catchError)((error) => {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                return (0, rxjs_1.throwError)(() => this.handlePrismaKnownError(error));
            }
            if (error instanceof library_1.PrismaClientValidationError) {
                return (0, rxjs_1.throwError)(() => this.handlePrismaValidationError(error));
            }
            if (error instanceof library_1.PrismaClientUnknownRequestError) {
                return (0, rxjs_1.throwError)(() => this.handlePrismaUnknownError(error));
            }
            if (error instanceof library_1.PrismaClientInitializationError) {
                return (0, rxjs_1.throwError)(() => this.handlePrismaInitError(error));
            }
            return (0, rxjs_1.throwError)(() => error);
        }));
    }
    handlePrismaKnownError(error) {
        const { code, meta } = error;
        switch (code) {
            case 'P2000':
                return new common_1.HttpException('The provided value is too long for the field', common_1.HttpStatus.BAD_REQUEST);
            case 'P2001':
                return new common_1.HttpException('The record searched for does not exist', common_1.HttpStatus.NOT_FOUND);
            case 'P2002': {
                const target = meta?.target;
                const field = target ? target.join(', ') : 'field';
                return new common_1.HttpException(`Duplicate entry: ${field} already exists`, common_1.HttpStatus.CONFLICT);
            }
            case 'P2003':
                return new common_1.HttpException('Foreign key constraint failed', common_1.HttpStatus.BAD_REQUEST);
            case 'P2004':
                return new common_1.HttpException('A constraint failed on the database', common_1.HttpStatus.BAD_REQUEST);
            case 'P2005':
                return new common_1.HttpException('The value stored in the database is invalid for the field type', common_1.HttpStatus.BAD_REQUEST);
            case 'P2006':
                return new common_1.HttpException('The provided value is not valid', common_1.HttpStatus.BAD_REQUEST);
            case 'P2007':
                return new common_1.HttpException('Data validation error', common_1.HttpStatus.BAD_REQUEST);
            case 'P2008':
                return new common_1.HttpException('Failed to parse the query', common_1.HttpStatus.BAD_REQUEST);
            case 'P2009':
                return new common_1.HttpException('Failed to validate the query', common_1.HttpStatus.BAD_REQUEST);
            case 'P2010':
                return new common_1.HttpException('Raw query failed', common_1.HttpStatus.BAD_REQUEST);
            case 'P2011':
                return new common_1.HttpException('Null constraint violation', common_1.HttpStatus.BAD_REQUEST);
            case 'P2012':
                return new common_1.HttpException('Missing a required value', common_1.HttpStatus.BAD_REQUEST);
            case 'P2013':
                return new common_1.HttpException('Missing required argument', common_1.HttpStatus.BAD_REQUEST);
            case 'P2014':
                return new common_1.HttpException('The change would violate a relation constraint', common_1.HttpStatus.BAD_REQUEST);
            case 'P2015':
                return new common_1.HttpException('A related record could not be found', common_1.HttpStatus.NOT_FOUND);
            case 'P2016':
                return new common_1.HttpException('Query interpretation error', common_1.HttpStatus.BAD_REQUEST);
            case 'P2017':
                return new common_1.HttpException('The records for relation are not connected', common_1.HttpStatus.BAD_REQUEST);
            case 'P2018':
                return new common_1.HttpException('The required connected records were not found', common_1.HttpStatus.NOT_FOUND);
            case 'P2019':
                return new common_1.HttpException('Input error', common_1.HttpStatus.BAD_REQUEST);
            case 'P2020':
                return new common_1.HttpException('Value out of range for the type', common_1.HttpStatus.BAD_REQUEST);
            case 'P2021':
                return new common_1.HttpException('The table does not exist in the current database', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            case 'P2022':
                return new common_1.HttpException('The column does not exist in the current database', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            case 'P2025':
                return new common_1.HttpException('Record not found', common_1.HttpStatus.NOT_FOUND);
            default:
                return new common_1.HttpException(`Database error: ${error.message}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    handlePrismaValidationError(_error) {
        return new common_1.HttpException('Invalid query parameters or data validation failed', common_1.HttpStatus.BAD_REQUEST);
    }
    handlePrismaUnknownError(_error) {
        return new common_1.HttpException('An unknown database error occurred', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    handlePrismaInitError(_error) {
        return new common_1.HttpException('Database connection failed', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
exports.PrismaErrorInterceptor = PrismaErrorInterceptor;
exports.PrismaErrorInterceptor = PrismaErrorInterceptor = __decorate([
    (0, common_1.Injectable)()
], PrismaErrorInterceptor);
//# sourceMappingURL=exception-massage.interceptor.js.map