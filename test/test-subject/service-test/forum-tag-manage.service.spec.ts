import { Test, TestingModule } from '@nestjs/testing';
import { ForumTagManageService } from '../../../src/modules/communication-module/forum-tag-module/forum-tag-manage.service';

describe('ForumTagManageService', () => {
  let service: ForumTagManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForumTagManageService],
    }).compile();

    service = module.get<ForumTagManageService>(ForumTagManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
