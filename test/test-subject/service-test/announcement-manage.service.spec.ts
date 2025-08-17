import { Test, TestingModule } from '@nestjs/testing';
import { AnnouncementManageService } from './announcement-manage.service';

describe('AnnouncementManageService', () => {
  let service: AnnouncementManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnouncementManageService],
    }).compile();

    service = module.get<AnnouncementManageService>(AnnouncementManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
