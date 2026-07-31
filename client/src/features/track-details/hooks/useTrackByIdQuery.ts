import { useQuery } from '@tanstack/react-query';
import { TRACKS_CACHE_KEY } from '@/entities/track/model/cache-keys';
import { getTrackById } from '@/entities/track';

export default function useTrackByIdQuery(id: string) {
  return useQuery({
    queryKey: [TRACKS_CACHE_KEY, id],
    queryFn: () => getTrackById(id),
    staleTime: 60 * 1000
  });
}
