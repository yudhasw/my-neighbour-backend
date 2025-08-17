import { Test, TestingModule } from '@nestjs/testing';
import { AppUserManageService } from './app-user-manage.service';

describe('AppUserManageService', () => {
  let service: AppUserManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppUserManageService],
    }).compile();

    service = module.get<AppUserManageService>(AppUserManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
