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
import TrackSearch from './tracks/track-search';

interface Props {
  query?: string;
  offset?: string;
}

export default async function Tracks({ query, offset }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [TRACKS_CACHE_KEY],
    queryFn: () => getTracks({ query, offset })
  });

  return (
    <>
      <div className="flex justify-between m-4">
        <Header className="content-center" type="h1">
          Tracks
        </Header>
        <TrackSearch />
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
