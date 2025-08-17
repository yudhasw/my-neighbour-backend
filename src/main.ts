/* eslint-disable @typescript-eslint/no-unsafe-return */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { useContainer, ValidationError } from 'class-validator';
import { CostumeValidationPipe } from './common/pipes/costume-validation.pipe';
import { Callback, Context, Handler } from 'aws-lambda';
import { configure } from '@codegenie/serverless-express';
import {
  ExpressAdapter,
  type NestExpressApplication,
} from '@nestjs/platform-express';
import logger from '@codegenie/serverless-express/src/logger';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    {
      cors: true,
      bodyParser: true,
    },
  );

  useContainer(app.select(AppModule, { abortOnError: true }), {
    fallbackOnErrors: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        interface FormattedError {
          property: string;
          errors: string[];
        }
        const formatErrors = (errors: ValidationError[]): FormattedError[] => {
          const formattedErrors: FormattedError[] = [];
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
        return new BadRequestException({
          message: 'Input Validation Is Failed',
          errors: formatErrors(validationErrors),
        });
      },
    }),
    new CostumeValidationPipe(),
  );

  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  console.log(`Application Running in port ${process.env.BACKEND_PORT}`);

  return configure({
    app: expressApp,
    log: logger(),
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

export const handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  try {
    console.log('Lambda Event:', JSON.stringify(event, null, 2));
    console.log('Lambda Context:', JSON.stringify(context, null, 2));

    // Pastikan event memiliki struktur yang benar
    if (!event) {
      console.error('Event is undefined or null');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid event' }),
      };
    }

    server = server ?? (await bootstrap());
    return server(event, context, callback);
  } catch (error) {
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

export default handler;
