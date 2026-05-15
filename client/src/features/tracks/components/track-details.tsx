import { Button } from '@/components/ui/button';
import { Track } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import CreateCommentForm from './track-details/create-comment-form';
import Header from '@/components/ui/header';

const trackMock: Track = {
  _id: 1,
  name: 'Track 1',
  artist: 'Artist 1',
  text: 'Text 1',
  listens: 0,
  picture: 'https://localhost:4000/',
  audio: 'audio',
  comments: []
};

export default function TrackDetails() {
  return (
    <div className="flex flex-col justify-start gap-4">
      <Button className="w-fit" size="lg" variant="secondary">
        <Link className="text-sm" href="/tracks">
          Back to Tracks
        </Link>
      </Button>
      <div className="flex flex-nowrap gap-4">
        <Image
          className="bg-gray-50"
          width="256"
          height="256"
          src={trackMock.picture}
          alt={`${trackMock.name} track image`}
        />
        <div className="flex flex-col gap-2">
          <Header type="h1">Track name: {trackMock.name}</Header>
          <Header type="h2">Artist: {trackMock.artist}</Header>
          <Header type="h3">Listens: {trackMock.listens}</Header>
        </div>
      </div>
      <div>
        <article className="flex flex-col gap-2">
          <Header type="h2">Text:</Header>
          <p className="text-lg">{trackMock.text}</p>
        </article>
      </div>
      <CreateCommentForm />
    </div>
  );
}
