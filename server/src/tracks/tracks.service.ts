import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Model, type ObjectId } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateTrackDTO } from './dto/create-track.dto';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { FilesService } from 'src/files/files.service';
import { FileType } from 'src/files/files.constants';

@Injectable()
export class TracksService {
  constructor(
    @InjectModel(Track.name) private trackRepository: Model<TrackDocument>,
    @InjectModel(Comment.name)
    private commentRepository: Model<CommentDocument>,
    private filesService: FilesService
  ) {}

  async getAllTracks(count: number = 10, offset: number = 0) {
    return this.trackRepository.find().skip(offset).limit(count);
  }

  async getTrackById(id: ObjectId) {
    const foundTrack = this.trackRepository.findById(id).populate('comments');
    return foundTrack;
  }

  async searchTracks(query: string) {
    const foundTracks = await this.trackRepository.find({
      name: { $regex: new RegExp(query, 'i') }
    });
    return foundTracks;
  }

  async createTrack(
    createTrackDTO: CreateTrackDTO,
    picture: Express.Multer.File,
    audio: Express.Multer.File
  ) {
    const pictureMetaString = this.filesService.createFile(
      FileType.PICTURE,
      picture
    );
    const audioMetaString = this.filesService.createFile(FileType.AUDIO, audio);
    const createdTrack = await this.trackRepository.create({
      ...createTrackDTO,
      listens: 0,
      picture: pictureMetaString,
      audio: audioMetaString
    });
    return createdTrack;
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

  async addListensById(id: ObjectId) {
    const foundTrack = await this.trackRepository.findById(id);
    if (foundTrack) {
      foundTrack.listens += 1;
      await foundTrack.save();
    }
  }

  async deleteTrackById(id: ObjectId) {
    const deletedTrack = this.trackRepository.findByIdAndDelete(id);
    return deletedTrack;
  }
}
