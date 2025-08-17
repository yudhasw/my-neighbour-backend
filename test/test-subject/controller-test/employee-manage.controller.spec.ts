import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeManageController } from './employee-manage.controller';
import { EmployeeManageService } from './employee-manage.service';

describe('EmployeeManageController', () => {
  let controller: EmployeeManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeManageController],
      providers: [EmployeeManageService],
    }).compile();

    controller = module.get<EmployeeManageController>(EmployeeManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
