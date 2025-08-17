"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const costume_validation_pipe_1 = require("./common/pipes/costume-validation.pipe");
const platform_express_1 = require("@nestjs/platform-express");
let app;
async function bootstrap() {
    if (app) {
        return app;
    }
    app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(), {
        cors: true,
        bodyParser: true,
    });
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule, { abortOnError: true }), {
        fallbackOnErrors: true,
    });
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
    await app.init();
    await app.listen(process.env.BACKEND_PORT || 3000);
    console.log('NestJS application initialized for Vercel');
    return app;
}
async function handler(req, res) {
    try {
        const nestApp = await bootstrap();
        const expressApp = nestApp.getHttpAdapter().getInstance();
        return expressApp(req, res);
    }
    catch (error) {
        console.error('Handler error:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: error instanceof Error ? error.message : 'Unknown error',
        });
    }
}
//# sourceMappingURL=main.js.map