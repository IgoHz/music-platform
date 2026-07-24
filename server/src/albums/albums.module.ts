import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { Album, AlbumSchema } from './schemas/album.schema';
import { Track, TrackSchema } from 'src/tracks/schemas/track.schema';
import { FilesService } from 'src/files/files.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Album.name, schema: AlbumSchema },
      { name: Track.name, schema: TrackSchema }
    ])
  ],
  controllers: [AlbumsController],
  providers: [AlbumsService, FilesService],
  exports: [AlbumsService]
})
export class AlbumsModule {}
