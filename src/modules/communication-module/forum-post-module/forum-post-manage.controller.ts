import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ForumPostManageService } from './forum-post-manage.service';
import { CreateForumPostManageDto } from '../../../dtos/requests/create/create-forum-post-manage.dto';
import { UpdateForumPostManageDto } from '../../../dtos/requests/update/update-forum-post-manage.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class ForumPostManageController {
  constructor(
    private readonly forumPostManageService: ForumPostManageService,
  ) {}

  @Post()
  @UseInterceptors(FilesInterceptor('attachments', 5))
  create(
    @Body() createForumPostManageDto: CreateForumPostManageDto,
    @UploadedFiles() files?: Express.Multer.File[],
  ) {
    return this.forumPostManageService.create(createForumPostManageDto, files);
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
  @UseInterceptors(FilesInterceptor('attachments', 5))
  update(
    @Param('id') id: string,
    @Body() updateForumPostManageDto: UpdateForumPostManageDto,
    @UploadedFiles() files?: Express.Multer.File[],
  ) {
    return this.forumPostManageService.update(
      id,
      updateForumPostManageDto,
      files,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forumPostManageService.remove(id);
  }
}
