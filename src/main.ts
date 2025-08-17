/* eslint-disable @typescript-eslint/no-unsafe-return */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { useContainer, ValidationError } from 'class-validator';
import { CostumeValidationPipe } from './common/pipes/costume-validation.pipe';
import { Callback, Context, Handler } from 'aws-lambda';
import serverlessExpress from '@codegenie/serverless-express';
import {
  ExpressAdapter,
  type NestExpressApplication,
} from '@nestjs/platform-express';

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
  return serverlessExpress({ app: expressApp });
}

export const handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};

export default handler;
