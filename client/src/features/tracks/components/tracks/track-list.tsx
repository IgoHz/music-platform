'use client';

import TrackListItem from './track-list/track-list-item';
import useTracksQuery from '../../hooks/useTracksQuery';

export default function TrackList() {
  const { data: tracks, isLoading } = useTracksQuery();

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
