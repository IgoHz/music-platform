import { useQuery } from '@tanstack/react-query';
import { TRACKS_CACHE_KEY } from '../constants/cache-keys';
import { getTracks } from '../api';

export default function useTracksQuery(query?: string) {
  return useQuery({
    queryKey: [TRACKS_CACHE_KEY],
    queryFn: () => getTracks({ query }),
    staleTime: 60 * 1000
  });
}
