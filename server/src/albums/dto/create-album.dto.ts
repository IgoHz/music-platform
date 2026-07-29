import { Transform } from 'class-transformer';
import { IsMongoId } from 'class-validator';

export class CreateAlbumDTO {
  declare readonly name: string;

  declare readonly artist: string;

  declare readonly releaseDate: string;

  @Transform(({ value }: { value: string | string[] }) => {
    if (!value) {
      return undefined;
    }

    return typeof value === 'string' ? (JSON.parse(value) as string[]) : value;
  })
  @IsMongoId({ each: true })
  declare readonly trackIds?: string[];
}
