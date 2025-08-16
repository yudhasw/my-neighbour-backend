import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ForumPostManageService } from './forum-post-manage.service';
import { CreateForumPostManageDto } from '../../../dtos/requests/create/create-forum-post-manage.dto';
import { UpdateForumPostManageDto } from '../../../dtos/requests/update/update-forum-post-manage.dto';

@Controller()
export class ForumPostManageController {
  constructor(
    private readonly forumPostManageService: ForumPostManageService,
  ) {}

  @Post()
  create(@Body() createForumPostManageDto: CreateForumPostManageDto) {
    return this.forumPostManageService.create(createForumPostManageDto);
  }

  @Get()
  findAll() {
    return this.forumPostManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.forumPostManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateForumPostManageDto: UpdateForumPostManageDto,
  ) {
    return this.forumPostManageService.update(id, updateForumPostManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forumPostManageService.remove(id);
  }
}
