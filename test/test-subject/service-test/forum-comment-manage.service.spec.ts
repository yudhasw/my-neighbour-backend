import { Test, TestingModule } from '@nestjs/testing';
import { ForumCommentManageService } from './forum-comment-manage.service';

describe('ForumCommentManageService', () => {
  let service: ForumCommentManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForumCommentManageService],
    }).compile();

    service = module.get<ForumCommentManageService>(ForumCommentManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
