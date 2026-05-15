import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import TrackList from './tracks/track-list';
import Header from '@/components/ui/header';

export default function Tracks() {
  return (
    <>
      <div className="flex justify-between m-4">
        <Header className="content-center" type="h1">
          Tracks
        </Header>
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
