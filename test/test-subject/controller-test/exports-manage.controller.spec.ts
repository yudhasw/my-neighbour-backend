import { Test, TestingModule } from '@nestjs/testing';
import { ExportsManageController } from '../../../src/common/helper/exports/exports-manage.controller';
import { ExportsManageService } from '../../../src/common/helper/exports/exports-manage.service';

describe('ExportsManageController', () => {
  let controller: ExportsManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExportsManageController],
      providers: [ExportsManageService],
    }).compile();

    controller = module.get<ExportsManageController>(ExportsManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
