import { Test, TestingModule } from '@nestjs/testing';
import { AppUserManageController } from './app-user-manage.controller';
import { AppUserManageService } from './app-user-manage.service';

describe('AppUserManageController', () => {
  let controller: AppUserManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppUserManageController],
      providers: [AppUserManageService],
    }).compile();

    controller = module.get<AppUserManageController>(AppUserManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
