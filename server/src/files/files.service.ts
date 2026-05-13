import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FileType } from './files.constants';
import { v4 } from 'uuid';
import { resolve } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

@Injectable()
export class FilesService {
  createFile(type: FileType, file: Express.Multer.File) {
    try {
      const [, fileExtension] = file.originalname.split('.');
      const fileName = v4() + '.' + fileExtension;
      const filePath = resolve(__dirname, '..', 'static', type);
      if (!existsSync(filePath)) {
        mkdirSync(filePath, { recursive: true });
      }
      writeFileSync(resolve(filePath, fileName), file.buffer);
      return type + '/' + fileName;
    } catch (e: unknown) {
      const message =
        e instanceof Error ? e.message : 'Unexpected error happened';
      throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  removeFile() {}
}
