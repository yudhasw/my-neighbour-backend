import { ValidationOptions } from 'class-validator';
import { SchemaModels } from './schema-models';
interface IsUniqueDecoratorOptions {
    model: SchemaModels;
    field: string;
    excludeIdField?: string;
}
export declare function IsUnique(options: IsUniqueDecoratorOptions, validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
export {};
