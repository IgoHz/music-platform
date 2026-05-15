import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import TrackList from './tracks/track-list';

export default function Tracks() {
  return (
    <>
      <div className="flex justify-between m-4">
        <h1 className="text-xl content-center">Track list</h1>
        <Button size="lg">
          <Link className="text-sm" href="/tracks/create">
            Create
          </Link>
        </Button>
      </div>
      <Separator />
      <TrackList />
    </>
  );
}
