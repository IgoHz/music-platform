import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors
} from '@nestjs/common';
import { TracksService } from './tracks.service';
import { CreateTrackDTO } from './dto/create-track.dto';
import type { ObjectId } from 'mongoose';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('tracks')
export class TracksController {
  constructor(private service: TracksService) {}

  @Get()
  async getTracks(
    @Query('count') count: number,
    @Query('offset') offset: number,
    @Query('query') query: string
  ) {
    return await this.service.getTracks(count, offset, query);
  }

  @Get(':id')
  async getTrackById(@Param('id') id: ObjectId) {
    return await this.service.getTrackById(id);
  }

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 }
    ])
  )
  async createTrack(
    @Body() createTrackDTO: CreateTrackDTO,
    @UploadedFiles()
    files: {
      picture: Express.Multer.File[];
      audio: Express.Multer.File[];
    }
  ) {
    const { picture, audio } = files;
    return await this.service.createTrack(createTrackDTO, picture[0], audio[0]);
  }

  @Post('comment')
  async createComment(@Body() createCommentDTO: CreateCommentDTO) {
    return await this.service.createComment(createCommentDTO);
  }

  @Post('listens/:id')
  async addListensById(@Param('id') id: ObjectId) {
    await this.service.addListensById(id);
  }

  @Delete(':id')
  async deleteTrackById(@Param('id') id: ObjectId) {
    return await this.service.deleteTrackById(id);
  }
}
