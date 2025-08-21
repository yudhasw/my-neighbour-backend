import { Injectable } from '@nestjs/common';

@Injectable()
export class GeneralHelper {
  twoDecimal(input: number) {
    return parseFloat((input * 100).toFixed(2));
  }
}
