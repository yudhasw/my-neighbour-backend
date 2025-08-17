import { Test, TestingModule } from '@nestjs/testing';
import { ComplaintManageController } from './complaint-manage.controller';
import { ComplaintManageService } from './complaint-manage.service';

describe('ComplaintManageController', () => {
  let controller: ComplaintManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplaintManageController],
      providers: [ComplaintManageService],
    }).compile();

    controller = module.get<ComplaintManageController>(ComplaintManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
