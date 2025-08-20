import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsUniqueConstraint implements ValidatorConstraintInterface {
    private prismaClient;
    constructor();
    validate(value: any, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
