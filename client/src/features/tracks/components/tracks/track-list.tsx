'use client';

import TrackListItem from './track-list/track-list-item';
import useTracksQuery from '../../hooks/useTracksQuery';
import { useSearchParams } from 'next/navigation';

export default function TrackList() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const { data: tracks, isLoading } = useTracksQuery(query);

  if (!tracks) {
    return null;
  }

  if (isLoading) {
    // TODO: Provide proper skeleton
    return <div>Loading...</div>;
  }

  return (
    <ul className="m-4">
      {tracks.map((track) => (
        <TrackListItem key={track._id} track={track} />
      ))}
    </ul>
  );
}
