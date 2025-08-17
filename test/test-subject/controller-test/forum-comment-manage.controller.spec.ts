import { Test, TestingModule } from '@nestjs/testing';
import { ForumCommentManageController } from './forum-comment-manage.controller';
import { ForumCommentManageService } from './forum-comment-manage.service';

describe('ForumCommentManageController', () => {
  let controller: ForumCommentManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForumCommentManageController],
      providers: [ForumCommentManageService],
    }).compile();

    controller = module.get<ForumCommentManageController>(ForumCommentManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
