import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Model, type ObjectId } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateTrackDTO } from './dto/create-track.dto';
import { CreateCommentDTO } from './dto/create-comment.dto';

@Injectable()
export class TracksService {
  constructor(
    @InjectModel(Track.name) private trackRepository: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentRepository: Model<CommentDocument>
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

  async getTrackById(id: ObjectId) {
    const foundTrack = this.trackRepository.findById(id).populate('comments');
    return foundTrack;
  }

  async deleteTrackById(id: ObjectId) {
    const deletedTrack = this.trackRepository.findByIdAndDelete(id);
    return deletedTrack;
  }

  async createComment(createCommentDTO: CreateCommentDTO) {
    const foundTrack = await this.trackRepository.findById(
      createCommentDTO.trackId
    );
    const createdComment =
      await this.commentRepository.create(createCommentDTO);
    foundTrack?.comments.push(createdComment._id);
    await foundTrack?.save();
    return createdComment;
  }
}
