import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsUniqueConstraint } from './constraint/is-unique-constraint';
import { SchemaModels } from './schema-models';

// Interface untuk opsi yang bisa Anda berikan ke dekorator @IsUnique()
interface IsUniqueDecoratorOptions {
  model: SchemaModels;
  field: string;
  excludeIdField?: string;
}

export function IsUnique(
  options: IsUniqueDecoratorOptions,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [options.model, options.field, options.excludeIdField],
      validator: IsUniqueConstraint,
    });
  };
}
