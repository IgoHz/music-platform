import { Comment } from '@/entities/track';

export interface Track {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: Comment[];
}
