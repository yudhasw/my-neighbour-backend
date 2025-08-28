import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class GeneralHelper {
  constructor(private readonly folderPath = 'src/common/uploads/') {}

  public twoDecimal(input: number) {
    return parseFloat((input * 100).toFixed(2));
  }

  public static readonly FileDictionary: Record<string, string> = {
    'image/jpg': 'image',
    'image/png': 'image',
    'image/jpeg': 'image',
    'application/pdf': 'document/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      'document/docx',
    'application/msword': 'document/docx',
    'text/plain': 'document/txt',
    'text/csv': 'document/xlsx_csv',
    'application/vnd.ms-excel.sheet.macroenabled.12': 'document/xlsx_csv',
  };

  public static getFolderExtension(mimetype: string): string {
    const mime = mimetype.toLowerCase();

    if (mime in this.FileDictionary) {
      return this.FileDictionary[mime];
    }

    return 'others';
  }

  public static ensureDirectoryExists(path: string) {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
  }

  // public async uploadFile(files: Express.Multer.File): Promise<void> {
  //   const mimeType = files.mimetype.toLowerCase();
  //   const targetFolder = GeneralHelper.GetFolderExtension();
  // }

  // public async updateFile(): Promise<void> {}

  // public async removeFile(): Promise<void> {}

  // public async findFile(): Promise<void> {}
}
