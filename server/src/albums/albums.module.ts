import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { Album, AlbumSchema } from './schemas/album.schema';
import { TracksModule } from 'src/tracks/tracks.module';
import { FilesService } from 'src/files/files.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }]),
    TracksModule
  ],
  controllers: [AlbumsController],
  providers: [AlbumsService, FilesService],
  exports: [AlbumsService]
})
export class AlbumsModule {}
