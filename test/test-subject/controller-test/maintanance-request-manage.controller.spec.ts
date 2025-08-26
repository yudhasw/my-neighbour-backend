import { Test, TestingModule } from '@nestjs/testing';
import { MaintananceRequestManageController } from '../../../src/modules/request-module/maintanance-request-module/maintanance-request-manage.controller';
import { MaintananceRequestManageService } from '../maintanance-request-manage.service';

describe('MaintananceRequestManageController', () => {
  let controller: MaintananceRequestManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintananceRequestManageController],
      providers: [MaintananceRequestManageService],
    }).compile();

    controller = module.get<MaintananceRequestManageController>(MaintananceRequestManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
