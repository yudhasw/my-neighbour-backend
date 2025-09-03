import { Test, TestingModule } from '@nestjs/testing';
import { ForumTagManageController } from '../../../src/modules/communication-module/forum-tag-module/forum-tag-manage.controller';
import { ForumTagManageService } from '../../../src/modules/communication-module/forum-tag-module/forum-tag-manage.service';

describe('ForumTagManageController', () => {
  let controller: ForumTagManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForumTagManageController],
      providers: [ForumTagManageService],
    }).compile();

    controller = module.get<ForumTagManageController>(ForumTagManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
