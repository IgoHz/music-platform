import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TracksModule } from './tracks/tracks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/music-platform'),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static')
    }),
    TracksModule,
    FilesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
