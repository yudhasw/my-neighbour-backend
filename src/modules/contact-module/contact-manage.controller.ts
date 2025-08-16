import { Controller } from '@nestjs/common';
import { ContactManageService } from './contact-manage.service';

@Controller()
export class ContactManageController {
  constructor(private readonly contactManageService: ContactManageService) {}
}
