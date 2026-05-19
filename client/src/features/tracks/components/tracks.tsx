import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import TrackList from './tracks/track-list';
import Header from '@/components/ui/header';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query';
import { getTracks } from '@/features/tracks/api';
import { TRACKS_CACHE_KEY } from '../constants/cache-keys';

export default async function Tracks() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [TRACKS_CACHE_KEY],
    queryFn: getTracks
  });

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
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TrackList />
      </HydrationBoundary>
    </>
  );
}
