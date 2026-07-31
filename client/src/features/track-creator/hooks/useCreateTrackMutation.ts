import { useMutation, useQueryClient } from '@tanstack/react-query';
import { trackCacheKeys } from '@/entities/track';
import { createTrack } from '@/entities/track';

export default function useCreateTrackMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: trackCacheKeys.all(),
    mutationFn: createTrack,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: trackCacheKeys.all() });
    },
    onError: (error) => {
      console.error('Error creating track!', error);
    }
  });
}
