/* eslint-disable @typescript-eslint/no-unsafe-call */
import { BadRequestException } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { GeneralHelper } from '../generalHelper';

export interface UploadConfig {
  maxFileSize?: number;
  maxFiles?: number;
  allowedMimetypes?: string[];
  subFolder?: string;
}

export class UploadsConfiguration {
  static createConfig(config: UploadConfig = {}): MulterOptions {
    const {
      maxFileSize = 10 * 1024 * 1024, // 10MB default
      maxFiles = 5,
      allowedMimetypes = [
        'image/jpg',
        'image/png',
        'image/jpeg',
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
        'text/plain',
        'text/csv',
        'application/vnd.ms-excel.sheet.macroenabled.12',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ],
      subFolder = '',
    } = config;

    return {
      limits: {
        fileSize: maxFileSize,
        files: maxFiles,
      },
      fileFilter: (req: any, file: Express.Multer.File, cb: any) => {
        if (allowedMimetypes.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(
            new BadRequestException(
              `File type ${file.mimetype} tidak diizinkan`,
            ),
            false,
          );
        }
      },
      storage: diskStorage({
        destination: (req, file, cb) => {
          const folderPath = GeneralHelper.getFolderExtension(file.mimetype);
          const fullPath = subFolder
            ? `src/common/uploads/${subFolder}/${folderPath}`
            : `src/common/uploads/${folderPath}`;

          GeneralHelper.ensureDirectoryExists(fullPath);
          cb(null, fullPath);
        },
        filename: (req, file, cb) => {
          const originalName = file.originalname;
          const fileExtension = extname(originalName);
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const sanitizedName = originalName
            .replace(fileExtension, '')
            .replace(/[^a-zA-Z0-9]/g, '_');

          const newFileName = `${sanitizedName}-${uniqueSuffix}${fileExtension}`;
          cb(null, newFileName);
        },
      }),
    };
  }

  // Definisi dimana upload file akan digunakan
  static get announcementConfig(): MulterOptions {
    return this.createConfig({
      maxFileSize: 10 * 1024 * 1024,
      maxFiles: 5,
      subFolder: 'announcements',
    });
  }

  static get employeeConfig(): MulterOptions {
    return this.createConfig({
      maxFileSize: 5 * 1024 * 1024,
      maxFiles: 3,
      allowedMimetypes: ['image/jpg', 'image/png', 'image/jpeg'],
      subFolder: 'employees',
    });
  }

  static get documentConfig(): MulterOptions {
    return this.createConfig({
      maxFileSize: 50 * 1024 * 1024, // 50MB for documents
      maxFiles: 10,
      allowedMimetypes: [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/plain',
      ],
      subFolder: 'documents',
    });
  }

  static get imageConfig(): MulterOptions {
    return this.createConfig({
      maxFileSize: 5 * 1024 * 1024, // 5MB for images
      maxFiles: 10,
      allowedMimetypes: ['image/jpg', 'image/png', 'image/jpeg'],
      subFolder: 'images',
    });
  }
}
