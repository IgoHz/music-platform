export interface TracksData {
  tracks: Track[];
  pages: number;
  currentPage: number;
}

// models
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

export interface Comment {
  _id: number;
  username: string;
  text: string;
}
