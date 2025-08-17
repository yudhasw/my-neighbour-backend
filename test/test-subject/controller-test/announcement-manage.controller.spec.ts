import { Test, TestingModule } from '@nestjs/testing';
import { AnnouncementManageController } from './announcement-manage.controller';
import { AnnouncementManageService } from './announcement-manage.service';

describe('AnnouncementManageController', () => {
  let controller: AnnouncementManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnouncementManageController],
      providers: [AnnouncementManageService],
    }).compile();

    controller = module.get<AnnouncementManageController>(AnnouncementManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
