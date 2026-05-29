import { Body, Controller, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDTO } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('')
  async createComment(@Body() createCommentDTO: CreateCommentDTO) {
    return await this.commentsService.createComment(createCommentDTO);
  }
}
