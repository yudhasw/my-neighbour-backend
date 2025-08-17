import { Test, TestingModule } from '@nestjs/testing';
import { UnitManageService } from './unit-manage.service';

describe('UnitManageService', () => {
  let service: UnitManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitManageService],
    }).compile();

    service = module.get<UnitManageService>(UnitManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
