import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { CreateTrackDTO } from './dto/create-track.dto';

@Controller('tracks')
export class TracksController {
  constructor(private service: TracksService) {}

  @Post()
  async createTrack(@Body() createTrackDTO: CreateTrackDTO) {
    return await this.service.createTrack(createTrackDTO);
  }

  @Get()
  async getAllTracks() {
    return await this.service.getAllTracks();
  }

  @Get(':id')
  async getTrackById(@Param('id') id: string) {
    return await this.service.getTrackById(id);
  }

  @Delete(':id')
  async deleteTrackById(@Param('id') id: string) {
    return await this.service.deleteTrackById(id);
  }
}
