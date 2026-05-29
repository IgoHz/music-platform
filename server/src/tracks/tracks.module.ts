import { forwardRef, Module } from '@nestjs/common';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from './schemas/track.schema';
import { FilesService } from 'src/files/files.service';
import { CommentsModule } from 'src/comments/comments.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    forwardRef(() => CommentsModule)
  ],
  controllers: [TracksController],
  providers: [TracksService, FilesService],
  exports: [MongooseModule]
})
export class TracksModule {}
