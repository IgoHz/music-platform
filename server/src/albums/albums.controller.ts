import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors
} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDTO } from './dto/create-album.dto';
import { FindAlbumDto } from './dto/find-album.dto';
import type { ObjectId } from 'mongoose';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AttachTracksToAlbumDTO } from './dto/attach-tracks-to-album.dto';

@Controller('albums')
export class AlbumsController {
  constructor(private service: AlbumsService) {}

  @Get()
  async getAllAlbums(@Query() query?: FindAlbumDto) {
    return await this.service.getAllAlbums(query);
  }

  @Get(':id')
  async getAlbumById(@Param('id') id: ObjectId) {
    return await this.service.getAlbumById(id);
  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  async createAlbum(
    @Body() createAlbumDTO: CreateAlbumDTO,
    @UploadedFiles()
    files: {
      picture: Express.Multer.File[];
    }
  ) {
    const { picture } = files;
    return await this.service.createAlbum(createAlbumDTO, picture[0]);
  }

  @Patch(':id/tracks')
  async attachTracksToAlbum(
    @Param('id') id: ObjectId,
    @Body() body: AttachTracksToAlbumDTO
  ) {
    return await this.service.attachTracksToAlbum(id, body);
  }

  @Delete(':id')
  async deleteAlbumById(@Param('id') id: ObjectId) {
    return await this.service.deleteAlbumById(id);
  }
}
