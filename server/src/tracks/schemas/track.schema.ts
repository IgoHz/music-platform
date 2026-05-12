import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type TrackDocument = HydratedDocument<Track>;

@Schema()
export class Track {
  @Prop()
  declare name: string;

  @Prop()
  declare artist: string;

  @Prop()
  declare text: string;

  @Prop()
  declare track: string;

  @Prop()
  declare listens: number;

  @Prop()
  declare picture: string;

  @Prop()
  declare audio: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  declare comments: mongoose.Types.ObjectId[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);
