import { Test, TestingModule } from '@nestjs/testing';
import { UnitManageController } from '../../../src/modules/unit-manage-module/unit-manage.controller';
import { UnitManageService } from '../../../src/modules/unit-manage-module/unit-manage.service';

describe('UnitManageController', () => {
  let controller: UnitManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnitManageController],
      providers: [UnitManageService],
    }).compile();

    controller = module.get<UnitManageController>(UnitManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
