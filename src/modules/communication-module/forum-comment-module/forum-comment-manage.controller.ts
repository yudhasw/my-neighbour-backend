import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ForumCommentManageService } from './forum-comment-manage.service';
import { CreateForumCommentManageDto } from '../../../dtos/requests/create/create-forum-comment-manage.dto';
import { UpdateForumCommentManageDto } from '../../../dtos/requests/update/update-forum-comment-manage.dto';

@Controller()
export class ForumCommentManageController {
  constructor(
    private readonly forumCommentManageService: ForumCommentManageService,
  ) {}

  @Post()
  create(@Body() createForumCommentManageDto: CreateForumCommentManageDto) {
    return this.forumCommentManageService.create(createForumCommentManageDto);
  }

  @Get()
  findAll() {
    return this.forumCommentManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.forumCommentManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateForumCommentManageDto: UpdateForumCommentManageDto,
  ) {
    return this.forumCommentManageService.update(
      id,
      updateForumCommentManageDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forumCommentManageService.remove(id);
  }
}
