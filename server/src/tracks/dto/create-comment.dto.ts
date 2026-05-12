import type { ObjectId } from 'mongoose';

export class CreateCommentDTO {
  declare readonly username: string;

  declare readonly text: string;

  declare readonly trackId: ObjectId;
}
