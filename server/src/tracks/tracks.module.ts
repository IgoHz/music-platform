import { Module } from '@nestjs/common';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from './schemas/track.schema';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { FilesService } from 'src/files/files.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Track.name, schema: TrackSchema },
      { name: Comment.name, schema: CommentSchema }
    ])
  ],
  controllers: [TracksController],
  providers: [TracksService, FilesService]
})
export class TracksModule {}
