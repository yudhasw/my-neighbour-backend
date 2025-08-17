"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PrismaExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("../database/generated/prisma/runtime/library");
let PrismaExceptionFilter = PrismaExceptionFilter_1 = class PrismaExceptionFilter {
    logger = new common_1.Logger(PrismaExceptionFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Terjadi kesalahan tak terduga di server.';
        let errorType = 'InternalServerError';
        let prismaCode;
        let targetField;
        if (exception instanceof library_1.PrismaClientKnownRequestError) {
            prismaCode = exception.code;
            targetField = exception.meta?.target;
            switch (exception.code) {
                case 'P2000':
                    status = common_1.HttpStatus.BAD_REQUEST;
                    message = `Value too long for column: ${targetField || 'undefined'}.`;
                    errorType = 'BadRequest';
                    break;
                case 'P2002':
                    status = common_1.HttpStatus.CONFLICT;
                    message = `Data already exists fork ${targetField ? `column '${targetField}'` : 'unique entry'}.`;
                    errorType = 'Conflict';
                    break;
                case 'P2003':
                    status = common_1.HttpStatus.BAD_REQUEST;
                    message = `Data cannot be processed due to invalid relation.`;
                    errorType = 'ForeignKeyConstraintViolation';
                    break;
                case 'P2025':
                    status = common_1.HttpStatus.NOT_FOUND;
                    message = `Resource not found.`;
                    errorType = 'NotFound';
                    break;
                case 'P1000':
                case 'P1001':
                case 'P1002':
                    status = common_1.HttpStatus.SERVICE_UNAVAILABLE;
                    message =
                        'Unable to connect to the database. Please try again later.';
                    errorType = 'DatabaseConnectionError';
                    break;
                default:
                    status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
                    message = `A database error occurred: ${exception.message.split('\n')[0]}`;
                    errorType = 'PrismaKnownError';
                    break;
            }
            this.logger.error(`Prisma Known Error (${exception.code}): ${exception.message}`, exception.stack);
        }
        else if (exception instanceof library_1.PrismaClientValidationError) {
            status = common_1.HttpStatus.BAD_REQUEST;
            message = `Database query validation error. Please check your input.`;
            errorType = 'PrismaValidationError';
            this.logger.error(`Prisma Validation Error: ${exception.message}`, exception.stack);
        }
        else if (exception instanceof library_1.PrismaClientInitializationError) {
            status = common_1.HttpStatus.SERVICE_UNAVAILABLE;
            message = 'The application failed to connect to the database on startup.';
            errorType = 'PrismaInitializationError';
            this.logger.error(`Prisma Initialization Error: ${exception.message}`, exception.stack);
        }
        else if (exception instanceof library_1.PrismaClientRustPanicError) {
            status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            message = 'A fatal error occurred in the Prisma database engine.';
            errorType = 'PrismaRustPanicError';
            this.logger.error(`Prisma Rust Panic Error: ${exception.message}`, exception.stack);
        }
        response.status(status).json({
            statusCode: status,
            message: message,
            error: errorType,
            prismaCode: process.env.NODE_ENV !== 'production' ? prismaCode : undefined,
            target: process.env.NODE_ENV !== 'production' ? targetField : undefined,
        });
    }
};
exports.PrismaExceptionFilter = PrismaExceptionFilter;
exports.PrismaExceptionFilter = PrismaExceptionFilter = PrismaExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(library_1.PrismaClientKnownRequestError, library_1.PrismaClientValidationError, library_1.PrismaClientRustPanicError, library_1.PrismaClientInitializationError)
], PrismaExceptionFilter);
//# sourceMappingURL=prisma-exception.filter.js.map