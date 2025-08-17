import { Test, TestingModule } from '@nestjs/testing';
import { ResidentManageController } from './resident-manage.controller';
import { ResidentManageService } from './resident-manage.service';

describe('ResidentManageController', () => {
  let controller: ResidentManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResidentManageController],
      providers: [ResidentManageService],
    }).compile();

    controller = module.get<ResidentManageController>(ResidentManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
