import { Test, TestingModule } from '@nestjs/testing';
import { ForumCommentManageService } from '../../../src/modules/communication-module/forum-comment-module/forum-comment-manage.service';

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
