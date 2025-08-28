import { Controller } from '@nestjs/common';
import { ExportsManageService } from './exports-manage.service';

@Controller('exports-manage')
export class ExportsManageController {
  constructor(private readonly exportsManageService: ExportsManageService) {}
}
