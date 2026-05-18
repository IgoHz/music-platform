import { Track } from '../../types';
import TrackListItem from './track-list/track-list-item';

const tracksMock: Track[] = [
  {
    _id: 1,
    name: 'Track 1',
    artist: 'Artist 1',
    text: 'Text 1',
    listens: 0,
    picture:
      'http://localhost:4000/picture/92cfb37f-0439-4a33-b481-8e54036b4dc8.jpg',
    audio:
      'http://localhost:4000/audio/4596a0be-8117-45d7-a01f-bf3268ca776d.mp3',
    comments: []
  },
  {
    _id: 2,
    name: 'Track 2',
    artist: 'Artist 2',
    text: 'Text 2',
    listens: 0,
    picture:
      'http://localhost:4000/picture/92cfb37f-0439-4a33-b481-8e54036b4dc8.jpg',
    audio:
      'http://localhost:4000/audio/4596a0be-8117-45d7-a01f-bf3268ca776d.mp3',
    comments: []
  },
  {
    _id: 3,
    name: 'Track 3',
    artist: 'Artist 3',
    text: 'Text 3',
    listens: 0,
    picture:
      'http://localhost:4000/picture/92cfb37f-0439-4a33-b481-8e54036b4dc8.jpg',
    audio:
      'http://localhost:4000/audio/4596a0be-8117-45d7-a01f-bf3268ca776d.mp3',
    comments: []
  },
  {
    _id: 4,
    name: 'Track 4',
    artist: 'Artist 4',
    text: 'Text 4',
    listens: 0,
    picture:
      'http://localhost:4000/picture/92cfb37f-0439-4a33-b481-8e54036b4dc8.jpg',
    audio:
      'http://localhost:4000/audio/4596a0be-8117-45d7-a01f-bf3268ca776d.mp3',
    comments: []
  },
  {
    _id: 5,
    name: 'Track 5',
    artist: 'Artist 5',
    text: 'Text 5',
    listens: 0,
    picture:
      'http://localhost:4000/picture/92cfb37f-0439-4a33-b481-8e54036b4dc8.jpg',
    audio:
      'http://localhost:4000/audio/4596a0be-8117-45d7-a01f-bf3268ca776d.mp3',
    comments: []
  },
  {
    _id: 6,
    name: 'Track 6',
    artist: 'Artist 6',
    text: 'Text 6',
    listens: 0,
    picture:
      'http://localhost:4000/picture/92cfb37f-0439-4a33-b481-8e54036b4dc8.jpg',
    audio:
      'http://localhost:4000/audio/4596a0be-8117-45d7-a01f-bf3268ca776d.mp3',
    comments: []
  },
  {
    _id: 7,
    name: 'Track 7',
    artist: 'Artist 7',
    text: 'Text 7',
    listens: 0,
    picture:
      'http://localhost:4000/picture/92cfb37f-0439-4a33-b481-8e54036b4dc8.jpg',
    audio:
      'http://localhost:4000/audio/4596a0be-8117-45d7-a01f-bf3268ca776d.mp3',
    comments: []
  },
  {
    _id: 8,
    name: 'Track 8',
    artist: 'Artist 8',
    text: 'Text 8',
    listens: 0,
    picture:
      'http://localhost:4000/picture/92cfb37f-0439-4a33-b481-8e54036b4dc8.jpg',
    audio:
      'http://localhost:4000/audio/4596a0be-8117-45d7-a01f-bf3268ca776d.mp3',
    comments: []
  },
  {
    _id: 9,
    name: 'Track 9',
    artist: 'Artist 9',
    text: 'Text 9',
    listens: 0,
    picture:
      'http://localhost:4000/picture/92cfb37f-0439-4a33-b481-8e54036b4dc8.jpg',
    audio:
      'http://localhost:4000/audio/4596a0be-8117-45d7-a01f-bf3268ca776d.mp3',
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
