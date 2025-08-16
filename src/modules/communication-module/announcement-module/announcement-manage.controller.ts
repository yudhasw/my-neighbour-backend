import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnnouncementManageService } from './announcement-manage.service';
import { CreateAnnouncementManageDto } from '../../../dtos/requests/create/create-announcement-manage.dto';
import { UpdateAnnouncementManageDto } from '../../../dtos/requests/update/update-announcement-manage.dto';

@Controller()
export class AnnouncementManageController {
  constructor(
    private readonly announcementManageService: AnnouncementManageService,
  ) {}

  @Post()
  create(@Body() createAnnouncementManageDto: CreateAnnouncementManageDto) {
    return this.announcementManageService.create(createAnnouncementManageDto);
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
