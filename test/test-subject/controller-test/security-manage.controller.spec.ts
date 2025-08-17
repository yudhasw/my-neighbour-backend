import { Test, TestingModule } from '@nestjs/testing';
import { SecurityManageController } from './security-manage.controller';
import { SecurityManageService } from './security-manage.service';

describe('SecurityManageController', () => {
  let controller: SecurityManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecurityManageController],
      providers: [SecurityManageService],
    }).compile();

    controller = module.get<SecurityManageController>(SecurityManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
