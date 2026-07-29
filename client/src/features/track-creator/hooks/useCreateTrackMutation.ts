import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TRACKS_CACHE_KEY } from '@/entities/tracks/general';
import { createTrack } from '@/entities/tracks/general';

export default function useCreateTrackMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [TRACKS_CACHE_KEY],
    mutationFn: createTrack,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TRACKS_CACHE_KEY] });
    },
    onError: (error) => {
      console.error('Error creating track!', error);
    }
  });
}
