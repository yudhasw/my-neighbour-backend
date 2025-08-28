import { BadRequestException, Module } from '@nestjs/common';
import { AnnouncementManageService } from './announcement-manage.service';
import { AnnouncementManageController } from './announcement-manage.controller';
import { DatabaseService } from 'src/common/database/database.service';
import { GeneralHelper } from '../../../common/helper/generalHelper';
import { EmployeeManageModule } from '../../../modules/user-manage-module/employee-module/employee-manage.module';
import { existsSync } from 'fs';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { MulterModule } from '@nestjs/platform-express';

export const multerOptions = {
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },

  storage: diskStorage({
    destination: (req, file, cb) => {
      const folderPath = GeneralHelper.getFolderExtension(file.mimetype);
      const fullPath = `src/common/uploads/${folderPath}`;

      GeneralHelper.ensureDirectoryExists(fullPath);
      cb(null, fullPath);
    },
    filename: (req, file, cb) => {
      const originalName = file.originalname;
      const fileExtension = extname(originalName);

      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const newFileName = `${originalName.replace(fileExtension, '')}-${uniqueSuffix}${fileExtension}`;

      if (
        existsSync(
          `src/common/uploads/${GeneralHelper.getFolderExtension(file.mimetype)}/${originalName}`,
        )
      ) {
        return new BadRequestException(`File "${originalName}" sudah ada.`);
      }

      cb(null, newFileName);
    },
  }),
};
@Module({
  imports: [EmployeeManageModule, MulterModule.register(multerOptions)],
  controllers: [AnnouncementManageController],
  providers: [AnnouncementManageService, DatabaseService, GeneralHelper],
  exports: [AnnouncementManageService],
})
export class AnnouncementManageModule {}
