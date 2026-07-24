import type { ObjectId } from 'mongoose';

export class CreateAlbumDTO {
  declare readonly name: string;

  declare readonly artist: string;

  declare readonly releaseDate: string;

  declare readonly trackIds?: ObjectId[];
}
