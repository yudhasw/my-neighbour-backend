import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { AnnouncementManageService } from './announcement-manage.service';
import { CreateAnnouncementManageDto } from '../../../dtos/requests/create/create-announcement-manage.dto';
import { UpdateAnnouncementManageDto } from '../../../dtos/requests/update/update-announcement-manage.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller()
export class AnnouncementManageController {
  constructor(
    private readonly announcementManageService: AnnouncementManageService,
  ) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  create(
    @Body() createAnnouncementManageDto: CreateAnnouncementManageDto,
    @UploadedFiles() files: Express.Multer.File,
  ) {
    return this.announcementManageService.create(
      createAnnouncementManageDto,
      files,
    );
  }

  @Post('files')
  @UseInterceptors(FilesInterceptor('file'))
  files(@UploadedFiles() file: Express.Multer.File) {
    return file;
  }

  @Get()
  findAll() {
    return this.announcementManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.announcementManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnnouncementManageDto: UpdateAnnouncementManageDto,
  ) {
    return this.announcementManageService.update(
      id,
      updateAnnouncementManageDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.announcementManageService.remove(id);
  }
}
