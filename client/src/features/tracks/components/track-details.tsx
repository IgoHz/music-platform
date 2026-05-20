import { Button } from '@/components/ui/button';
import Link from 'next/link';
import MainDetails from './track-details/main-details';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query';
import { TRACKS_CACHE_KEY } from '../constants/cache-keys';
import { getTrackById } from '../api/tracks';

interface Props {
  id: string;
}

export default async function TrackDetails({ id }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [TRACKS_CACHE_KEY, id],
    queryFn: () => getTrackById(id),
    staleTime: 60 * 1000
  });

  return (
    <div className="flex flex-col justify-start gap-6">
      <Button className="w-fit" size="lg" variant="secondary">
        <Link className="text-sm" href="/tracks">
          Back to Tracks
        </Link>
      </Button>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MainDetails id={id} />
      </HydrationBoundary>
    </div>
  );
}
