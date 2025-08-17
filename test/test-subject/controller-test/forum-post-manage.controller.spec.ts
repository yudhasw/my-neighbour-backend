import { Test, TestingModule } from '@nestjs/testing';
import { ForumPostManageController } from './forum-post-manage.controller';
import { ForumPostManageService } from './forum-post-manage.service';

describe('ForumPostManageController', () => {
  let controller: ForumPostManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForumPostManageController],
      providers: [ForumPostManageService],
    }).compile();

    controller = module.get<ForumPostManageController>(ForumPostManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
