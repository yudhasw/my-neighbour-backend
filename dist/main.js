"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const costume_validation_pipe_1 = require("./common/pipes/costume-validation.pipe");
const serverless_express_1 = require("@codegenie/serverless-express");
const platform_express_1 = require("@nestjs/platform-express");
const logger_1 = require("@codegenie/serverless-express/src/logger");
let server;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(), {
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
    const expressApp = app.getHttpAdapter().getInstance();
    console.log(`Application Running in port ${process.env.BACKEND_PORT}`);
    return (0, serverless_express_1.configure)({
        app: expressApp,
        log: (0, logger_1.default)(),
        binaryMimeTypes: [
            'application/javascript',
            'application/json',
            'application/octet-stream',
            'application/xml',
            'font/eot',
            'font/opentype',
            'font/otf',
            'image/jpeg',
            'image/png',
            'image/svg+xml',
            'text/comma-separated-values',
            'text/css',
            'text/html',
            'text/javascript',
            'text/plain',
            'text/text',
            'text/xml',
        ],
        resolutionMode: 'PROMISE',
    });
}
const handler = async (event, context, callback) => {
    try {
        console.log('Lambda Event:', JSON.stringify(event, null, 2));
        console.log('Lambda Context:', JSON.stringify(context, null, 2));
        if (!event) {
            console.error('Event is undefined or null');
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid event' }),
            };
        }
        server = server ?? (await bootstrap());
        return server(event, context, callback);
    }
    catch (error) {
        console.error('Handler error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Internal server error',
                message: error instanceof Error ? error.message : 'Unknown error',
            }),
        };
    }
};
exports.handler = handler;
exports.default = exports.handler;
//# sourceMappingURL=main.js.map