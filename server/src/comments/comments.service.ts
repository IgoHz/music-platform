import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { Track, TrackDocument } from '../tracks/schemas/track.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private commentRepository: Model<CommentDocument>,
    @InjectModel(Track.name) private trackRepository: Model<TrackDocument>
  ) {}

  async createComment(createCommentDTO: CreateCommentDTO) {
    const foundTrack = await this.trackRepository
      .findById(createCommentDTO.trackId)
      .exec();

    if (!foundTrack) {
      throw new Error('Track not found');
    }

    const createdComment =
      await this.commentRepository.create(createCommentDTO);

    foundTrack.comments.push(createdComment._id);
    await foundTrack.save();

    return createdComment;
  }
}
