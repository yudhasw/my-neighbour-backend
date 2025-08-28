import { Test, TestingModule } from '@nestjs/testing';
import { ComplaintManageService } from '../../../src/modules/request-module/compliant-module/complaint-manage.service';

describe('ComplaintManageService', () => {
  let service: ComplaintManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplaintManageService],
    }).compile();

    service = module.get<ComplaintManageService>(ComplaintManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
