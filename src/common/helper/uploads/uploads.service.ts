import { Injectable } from '@nestjs/common';
import { GeneralHelper } from '../generalHelper';

export interface FileAttachment {
  path: string;
  originalName: string;
  size: number;
  mimetype: string;
  uploadedAt: Date;
}

@Injectable()
export class UploadsService {
  //uploading multiple files

  protected processFiles(files?: Express.Multer.File[]): string[] {
    if (!files || files.length === 0) return [];

    return files.map((file) => {
      const folderPath = GeneralHelper.getFolderExtension(file.mimetype);
      return `${folderPath}/${file.filename}`;
    });
  }

  protected processFilesWithMetadata(
    files?: Express.Multer.File[],
  ): FileAttachment[] {
    if (!files || files.length === 0) return [];

    return files.map((file) => {
      const folderPath = GeneralHelper.getFolderExtension(file.mimetype);
      return {
        path: `${folderPath}/${file.filename}`,
        originalName: file.originalname,
        size: file.size,
        mimetype: file.mimetype,
        uploadedAt: new Date(),
      };
    });
  }

  // uploading single file

  protected processSingleFiles(file?: Express.Multer.File): string {
    const folderPath = GeneralHelper.getFolderExtension(
      file?.mimetype as string,
    );
    return `${folderPath}/${file?.filename}`;
  }

  protected processSingleFileWithMetadata(
    file?: Express.Multer.File,
  ): FileAttachment | null {
    if (!file) return null;

    const folderPath = GeneralHelper.getFolderExtension(file.mimetype);
    return {
      path: `${folderPath}/${file.filename}`,
      originalName: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
      uploadedAt: new Date(),
    };
  }

  protected safeParseAttachments(attachments: unknown): string[] {
    if (!attachments) return [];

    if (Array.isArray(attachments)) {
      return attachments
        .map((item) =>
          typeof item === 'string' ? item : (item as FileAttachment).path || '',
        )
        .filter(Boolean);
    }

    if (typeof attachments === 'string') {
      try {
        const parsed: unknown = JSON.parse(attachments);
        if (Array.isArray(parsed)) {
          return parsed
            .map((item) =>
              typeof item === 'string'
                ? item
                : (item as FileAttachment).path || '',
            )
            .filter(Boolean);
        }
      } catch (error) {
        console.error('Error parsing attachments JSON:', error);
      }
    }

    return [];
  }

  protected async deletePhysicalFiles(attachments: unknown): Promise<void> {
    const attachmentPaths = this.safeParseAttachments(attachments);

    for (const filePath of attachmentPaths) {
      try {
        await GeneralHelper.deleteFileAsync(filePath);
      } catch (error) {
        console.error(`Error deleting file ${filePath}:`, error);
      }
    }
  }

  protected getFileInfo(
    attachments: unknown,
  ): Array<{ path: string; exists: boolean; size: number }> {
    const attachmentPaths = this.safeParseAttachments(attachments);

    return attachmentPaths.map((path) => ({
      path,
      exists: GeneralHelper.fileExists(path),
      size: GeneralHelper.getFileSize(path),
    }));
  }

  protected mergeAttachments(
    existingAttachments: unknown,
    newFiles?: Express.Multer.File[],
    replaceExisting = false,
  ): string[] {
    const newPaths = this.processFiles(newFiles);

    if (replaceExisting || !existingAttachments) {
      return newPaths;
    }

    const existingPaths = this.safeParseAttachments(existingAttachments);
    return [...existingPaths, ...newPaths];
  }
}
