import { Injectable } from '@nestjs/common';
import { CreateAnnouncementManageDto } from '../../../dtos/requests/create/create-announcement-manage.dto';
import { UpdateAnnouncementManageDto } from '../../../dtos/requests/update/update-announcement-manage.dto';
@Injectable()
export class AnnouncementManageService {
  create(createRequest: CreateAnnouncementManageDto) {
    return 'This action adds a new announcementManage';
  }

  findAll() {
    return `This action returns all announcementManage`;
  }

  findOne(id: string) {
    return `This action returns a #${id} announcementManage`;
  }

  update(id: string, updateRequest: UpdateAnnouncementManageDto) {
    return `This action updates a #${id} announcementManage`;
  }

  remove(id: string) {
    return `This action removes a #${id} announcementManage`;
  }
}
