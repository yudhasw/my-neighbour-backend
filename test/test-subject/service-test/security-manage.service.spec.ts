import { Test, TestingModule } from '@nestjs/testing';
import { SecurityManageService } from '../../../src/modules/security-module/security-manage.service';

describe('SecurityManageService', () => {
  let service: SecurityManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecurityManageService],
    }).compile();

    service = module.get<SecurityManageService>(SecurityManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
