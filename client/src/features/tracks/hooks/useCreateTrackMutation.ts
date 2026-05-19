import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TRACKS_CACHE_KEY } from '../constants/cache-keys';
import { createTrack } from '../api/tracks';

export default function useCreateTrackMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [TRACKS_CACHE_KEY],
    mutationFn: createTrack,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TRACKS_CACHE_KEY] });
    },
    onError: () => {
      console.error('Error creating track!');
    }
  });
}
