import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class CostumeValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
