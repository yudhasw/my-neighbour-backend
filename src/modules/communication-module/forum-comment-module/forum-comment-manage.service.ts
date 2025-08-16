import { Injectable } from '@nestjs/common';
import { CreateForumCommentManageDto } from '../../../dtos/requests/create/create-forum-comment-manage.dto';
import { UpdateForumCommentManageDto } from '../../../dtos/requests/update/update-forum-comment-manage.dto';

@Injectable()
export class ForumCommentManageService {
  create(createRequest: CreateForumCommentManageDto) {
    return 'This action adds a new forumCommentManage';
  }

  findAll() {
    return `This action returns all forumCommentManage`;
  }

  findOne(id: string) {
    return `This action returns a #${id} forumCommentManage`;
  }

  update(id: string, updateRequest: UpdateForumCommentManageDto) {
    return `This action updates a #${id} forumCommentManage`;
  }

  remove(id: string) {
    return `This action removes a #${id} forumCommentManage`;
  }
}
