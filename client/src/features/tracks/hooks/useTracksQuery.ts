import { useQuery } from '@tanstack/react-query';
import { getTracks, trackCacheKeys } from '@/entities/track';

export default function useTracksQuery(query?: string, offset?: string) {
  return useQuery({
    queryKey: trackCacheKeys.all(),
    queryFn: () => getTracks({ query, offset }),
    staleTime: 60 * 1000
  });
}
