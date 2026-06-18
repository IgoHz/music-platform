import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album {
  @Prop()
  declare name: string;

  @Prop()
  declare artist: string;

  @Prop({ type: String })
  declare coverImage: string;

  @Prop()
  declare releaseDate: Date;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Track'
  })
  declare tracks: mongoose.Types.ObjectId[];
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
