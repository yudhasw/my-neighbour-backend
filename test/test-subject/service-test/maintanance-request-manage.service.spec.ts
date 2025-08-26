import { Test, TestingModule } from '@nestjs/testing';
import { MaintananceRequestManageService } from '../../../src/modules/request-module/maintanance-request-module/maintanance-request-manage.service';

describe('MaintananceRequestManageService', () => {
  let service: MaintananceRequestManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintananceRequestManageService],
    }).compile();

    service = module.get<MaintananceRequestManageService>(MaintananceRequestManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
