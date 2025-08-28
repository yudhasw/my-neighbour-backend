import { Test, TestingModule } from '@nestjs/testing';
import { ForumPostManageService } from 's../../../src/modules/communication-module/forum-post-module/forum-post-manage.service';

describe('ForumPostManageService', () => {
  let service: ForumPostManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForumPostManageService],
    }).compile();

    service = module.get<ForumPostManageService>(ForumPostManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
