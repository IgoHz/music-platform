import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track } from './schemas/track.schema';
import { Model } from 'mongoose';
import { Comment } from './schemas/comment.schema';
import { CreateTrackDTO } from './dto/create-track.dto';

@Injectable()
export class TracksService {
  constructor(
    @InjectModel(Track.name) private trackRepository: Model<Track>,
    @InjectModel(Comment.name) private commentRepository: Model<Comment>
  ) {}

  async createTrack(createTrackDTO: CreateTrackDTO) {
    const createdTrack = await this.trackRepository.create({
      ...createTrackDTO,
      listens: 0
    });
    return createdTrack;
  }

  async getAllTracks() {
    return this.trackRepository.find();
  }

  async getTrackById(id: string) {
    const foundTrack = this.trackRepository.findById(id);
    return foundTrack;
  }

  async deleteTrackById(id: string) {
    const deletedTrack = this.trackRepository.findByIdAndDelete(id);
    return deletedTrack;
  }
}
