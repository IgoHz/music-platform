'use client';

import { useQuery } from '@tanstack/react-query';
import TrackListItem from './track-list/track-list-item';
import { TRACKS_CACHE_KEY } from '../../constants/cache-keys';
import { getTracks } from '../../api';

export default function TrackList() {
  const { data: tracks, isLoading } = useQuery({
    queryKey: [TRACKS_CACHE_KEY],
    queryFn: getTracks
  });

  if (!tracks) {
    return null;
  }

  if (isLoading) {
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
