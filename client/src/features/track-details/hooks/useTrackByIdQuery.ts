import { useQuery } from '@tanstack/react-query';
import { trackCacheKeys } from '@/entities/track/model/cache-keys-factory';
import { getTrackById } from '@/entities/track';

export default function useTrackByIdQuery(id: string) {
  return useQuery({
    queryKey: trackCacheKeys.detail(id),
    queryFn: () => getTrackById(id),
    staleTime: 60 * 1000
  });
}
