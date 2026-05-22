'use client';

import TrackListItem from './track-list/track-list-item';
import useTracksQuery from '../../hooks/useTracksQuery';
import { useSearchParams } from 'next/navigation';
import TracksPagination from './track-list/tracks-pagination';

export default function TrackList() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const offset = searchParams.get('offset') ?? '';

  const { data: tracksData, isLoading } = useTracksQuery(query, offset);

  if (!tracksData) {
    return null;
  }

  const { tracks, pages, currentPage } = tracksData;

  if (isLoading) {
    // TODO: Provide proper skeleton
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul className="m-4">
        {tracks.map((track) => (
          <TrackListItem key={track._id} track={track} />
        ))}
      </ul>
      <TracksPagination
        className="m-4"
        pages={pages}
        currentPage={currentPage}
      />
    </>
  );
}
