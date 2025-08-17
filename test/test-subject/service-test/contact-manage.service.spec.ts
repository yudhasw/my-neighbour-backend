import { Test, TestingModule } from '@nestjs/testing';
import { ContactManageService } from './contact-manage.service';

describe('ContactManageService', () => {
  let service: ContactManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactManageService],
    }).compile();

    service = module.get<ContactManageService>(ContactManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
