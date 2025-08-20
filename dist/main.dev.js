"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const costume_validation_pipe_1 = require("./common/pipes/costume-validation.pipe");
const platform_express_1 = require("@nestjs/platform-express");
const response_mapping_interceptor_1 = require("./common/interceptors/response-mapping.interceptor");
const exception_massage_interceptor_1 = require("./common/interceptors/exception-massage.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(), {
        cors: true,
        bodyParser: true,
    });
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule, { abortOnError: true }), {
        fallbackOnErrors: true,
    });
    app.useGlobalInterceptors(new response_mapping_interceptor_1.ResponseMappingInterceptor(), new exception_massage_interceptor_1.PrismaErrorInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        exceptionFactory: (validationErrors = []) => {
            const formatErrors = (errors) => {
                const formattedErrors = [];
                for (const error of errors) {
                    if (error.constraints) {
                        formattedErrors.push({
                            property: error.property,
                            errors: Object.values(error.constraints),
                        });
                    }
                    if (error.children && error.children.length > 0) {
                        formattedErrors.push(...formatErrors(error.children));
                    }
                }
                return formattedErrors;
            };
            return new common_1.BadRequestException({
                message: 'Input Validation Is Failed',
                errors: formatErrors(validationErrors),
            });
        },
    }), new costume_validation_pipe_1.CostumeValidationPipe());
    const port = process.env.BACKEND_PORT || process.env.PORT || 3000;
    await app.listen(port);
    console.log(`🚀 Application is running on: http://localhost:${port}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
}
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});
bootstrap().catch((error) => {
    console.error('Application failed to start:', error);
    process.exit(1);
});
//# sourceMappingURL=main.dev.js.map