/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { existsSync } from 'fs';

import { AnnouncementManageService } from './announcement-manage.service';
import { AnnouncementManageController } from './announcement-manage.controller';
import { DatabaseService } from 'src/common/database/database.service';
import { GeneralHelper } from '../../../common/helper/generalHelper';
import { EmployeeManageModule } from '../../../modules/user-manage-module/employee-module/employee-manage.module';

export const multerOptions = {
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
    files: 5, // Maximum 5 files
  },
  fileFilter: (req: any, file: Express.Multer.File, cb: any) => {
    // Validate file types
    const allowedMimetypes = [
      'image/jpg',
      'image/png',
      'image/jpeg',
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword',
      'text/plain',
      'text/csv',
      'application/vnd.ms-excel.sheet.macroenabled.12',
    ];

    if (allowedMimetypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`File type ${file.mimetype} not allowed`), false);
    }
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
      const sanitizedName = originalName
        .replace(fileExtension, '')
        .replace(/[^a-zA-Z0-9]/g, '_'); // Sanitize filename

      const newFileName = `${sanitizedName}-${uniqueSuffix}${fileExtension}`;

      // Check if file already exists (though with unique suffix, this is unlikely)
      const folderPath = GeneralHelper.getFolderExtension(file.mimetype);
      const fullFilePath = `src/common/uploads/${folderPath}/${newFileName}`;

      if (existsSync(fullFilePath)) {
        // If somehow still exists, add additional random string
        const extraRandom = Math.random().toString(36).substring(7);
        const finalFileName = `${sanitizedName}-${uniqueSuffix}-${extraRandom}${fileExtension}`;
        cb(null, finalFileName);
      } else {
        cb(null, newFileName);
      }
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
