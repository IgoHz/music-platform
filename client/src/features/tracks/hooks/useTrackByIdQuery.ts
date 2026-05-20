import { useQuery } from '@tanstack/react-query';
import { TRACKS_CACHE_KEY } from '../constants/cache-keys';
import { getTrackById } from '../api/tracks';

export default function useTrackByIdQuery(id: string) {
  return useQuery({
    queryKey: [TRACKS_CACHE_KEY, id],
    queryFn: () => getTrackById(id),
    staleTime: 60 * 1000
  });
}
