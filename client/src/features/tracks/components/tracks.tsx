import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import TrackList from './tracks/track-list';

export default function Tracks() {
  return (
    <>
      <div className="flex justify-between m-4">
        <h2 className="text-lg">Track list</h2>
        <Button>
          <Link href="/tracks/create">Create</Link>
        </Button>
      </div>
      <Separator />
      <TrackList />
    </>
  );
}
