import { useQuery } from '@tanstack/react-query';
import { getTracks, TRACKS_CACHE_KEY } from '@/entities/tracks/general';

export default function useTracksQuery(query?: string, offset?: string) {
  return useQuery({
    queryKey: [TRACKS_CACHE_KEY],
    queryFn: () => getTracks({ query, offset }),
    staleTime: 60 * 1000
  });
}
