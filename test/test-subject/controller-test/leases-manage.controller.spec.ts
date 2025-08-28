import { Test, TestingModule } from '@nestjs/testing';
import { LeasesManageController } from '../../../src/modules/financial-module/lease-module/leases-manage.controller';
import { LeasesManageService } from '../../../src/modules/financial-module/lease-module/leases-manage.service';

describe('LeasesManageController', () => {
  let controller: LeasesManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeasesManageController],
      providers: [LeasesManageService],
    }).compile();

    controller = module.get<LeasesManageController>(LeasesManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
