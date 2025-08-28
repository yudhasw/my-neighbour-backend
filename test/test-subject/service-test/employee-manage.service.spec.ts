import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeManageService } from '../../../src/modules/user-manage-module/employee-module/employee-manage.service';

describe('EmployeeManageService', () => {
  let service: EmployeeManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeManageService],
    }).compile();

    service = module.get<EmployeeManageService>(EmployeeManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
