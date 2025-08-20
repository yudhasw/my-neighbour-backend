import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class PrismaErrorInterceptor implements NestInterceptor {
    intercept(_context: ExecutionContext, next: CallHandler): Observable<any>;
    private handlePrismaKnownError;
    private handlePrismaValidationError;
    private handlePrismaUnknownError;
    private handlePrismaInitError;
}
