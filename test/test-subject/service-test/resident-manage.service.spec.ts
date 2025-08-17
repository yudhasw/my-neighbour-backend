import { Test, TestingModule } from '@nestjs/testing';
import { ResidentManageService } from './resident-manage.service';

describe('ResidentManageService', () => {
  let service: ResidentManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResidentManageService],
    }).compile();

    service = module.get<ResidentManageService>(ResidentManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
