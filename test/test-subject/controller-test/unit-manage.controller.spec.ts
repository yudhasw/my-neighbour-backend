import { Test, TestingModule } from '@nestjs/testing';
import { UnitManageController } from './unit-manage.controller';
import { UnitManageService } from './unit-manage.service';

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
