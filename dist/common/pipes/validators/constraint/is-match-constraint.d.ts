import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class IsMatchConstraint implements ValidatorConstraintInterface {
    validate(value: any, validationArguments: ValidationArguments): Promise<boolean> | boolean;
    defaultMessage(validationArguments: ValidationArguments): string;
}
