import { Track } from '../../types';
import TrackListItem from './track-list/track-list-item';

const tracksMock: Track[] = [
  {
    _id: 1,
    name: 'Track 1',
    artist: 'Artist 1',
    text: 'Text 1',
    listens: 0,
    picture: 'https://localhost:4000/',
    audio: 'audio',
    comments: []
  },
  {
    _id: 2,
    name: 'Track 2',
    artist: 'Artist 2',
    text: 'Text 2',
    listens: 0,
    picture: 'https://localhost:4000/',
    audio: 'audio',
    comments: []
  },
  {
    _id: 3,
    name: 'Track 3',
    artist: 'Artist 3',
    text: 'Text 3',
    listens: 0,
    picture: 'https://localhost:4000/',
    audio: 'audio',
    comments: []
  }
];

export default function TrackList() {
  return (
    <ul className="m-4">
      {tracksMock.map((track) => (
        <TrackListItem key={track._id} track={track} />
      ))}
    </ul>
  );
}
