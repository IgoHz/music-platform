import { IsMongoId } from 'class-validator';

export class AttachTracksToAlbumDTO {
  @IsMongoId({ each: true })
  declare readonly trackIds: string[];
}
