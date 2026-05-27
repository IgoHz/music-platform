import { forwardRef, Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { TracksModule } from 'src/tracks/tracks.module';

@Module({
  imports: [
    MongooseModule.forFeature([
          { name: Comment.name, schema: CommentSchema }
        ]),
        forwardRef(() => TracksModule),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [],
})
export class CommentsModule {}