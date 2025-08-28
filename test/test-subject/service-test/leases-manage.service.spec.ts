import { Test, TestingModule } from '@nestjs/testing';
import { LeasesManageService } from '../../../src/modules/financial-module/lease-module/leases-manage.service';

describe('LeasesManageService', () => {
  let service: LeasesManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeasesManageService],
    }).compile();

    service = module.get<LeasesManageService>(LeasesManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
