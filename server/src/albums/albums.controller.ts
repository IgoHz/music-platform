import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Query
} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDTO } from './dto/create-album.dto';
import { UpdateAlbumDTO } from './dto/update-album.dto';
import { FindAlbumDto } from './dto/find-album.dto';
import type { ObjectId } from 'mongoose';

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
  async createAlbum(@Body() createAlbumDTO: CreateAlbumDTO) {
    return await this.service.createAlbum(createAlbumDTO);
  }

  @Patch(':id')
  async updateAlbum(@Param('id') id: ObjectId, @Body() updateAlbumDTO: UpdateAlbumDTO) {
    return await this.service.updateAlbum(id, updateAlbumDTO);
  }

  @Delete(':id')
  async deleteAlbumById(@Param('id') id: ObjectId) {
    return await this.service.deleteAlbumById(id);
  }
}
