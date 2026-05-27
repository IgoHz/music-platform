import { Button } from '@/components/ui/button';
import Link from 'next/link';
import MainDetails from './track-details/main-details';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query';
import { TRACKS_CACHE_KEY } from '../constants/cache-keys';
import { getTrackById } from '../api';
import ModalWrapper from '@/components/modal-wrapper';

interface Props {
  id: string;
  type: 'page' | 'modal';
}

export default async function TrackDetails({ id, type }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [TRACKS_CACHE_KEY, id],
    queryFn: () => getTrackById(id),
    staleTime: 60 * 1000
  });

  if (type === 'modal') {
    return (
      <ModalWrapper
        backUrl="/tracks"
        dialogTitle="Track Details"
        dialogDescription="View and manage track details here."
      >
        <HydrationBoundary state={dehydrate(queryClient)}>
          <MainDetails id={id} />
        </HydrationBoundary>
      </ModalWrapper>
    );
  }

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
