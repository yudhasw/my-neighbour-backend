import { Injectable } from '@nestjs/common';
import { CreateForumPostManageDto } from '../../../dtos/requests/create/create-forum-post-manage.dto';
import { UpdateForumPostManageDto } from '../../../dtos/requests/update/update-forum-post-manage.dto';

@Injectable()
export class ForumPostManageService {
  create(createRequest: CreateForumPostManageDto) {
    return 'This action adds a new forumPostManage';
  }

  findAll() {
    return `This action returns all forumPostManage`;
  }

  findOne(id: string) {
    return `This action returns a #${id} forumPostManage`;
  }

  update(id: string, updateRequest: UpdateForumPostManageDto) {
    return `This action updates a #${id} forumPostManage`;
  }

  remove(id: string) {
    return `This action removes a #${id} forumPostManage`;
  }
}
