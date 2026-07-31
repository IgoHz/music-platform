import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addListens, trackCacheKeys, Track } from '@/entities/track';

export default function useAddListensMutation(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: trackCacheKeys.detail(id),
    mutationFn: () => addListens(id),
    onMutate: () => {
      queryClient.cancelQueries({ queryKey: trackCacheKeys.detail(id) });
      const prevTrackCopy = queryClient.getQueryData<Track>(
        trackCacheKeys.detail(id)
      );
      if (!prevTrackCopy) return;
      queryClient.setQueryData(
        trackCacheKeys.detail(id),
        (prevTrack: Track) => ({
          ...prevTrack,
          listens: prevTrack.listens + 1
        })
      );

      return prevTrackCopy;
    },
    onSuccess: (_, __, prevTrack: Track | undefined) => {
      if (!prevTrack) return;
      queryClient.setQueryData(trackCacheKeys.detail(id), () => ({
        ...prevTrack,
        listens: prevTrack.listens + 1
      }));
    },
    onError: (error, __, prevTrack: Track | undefined) => {
      console.error('Error adding listens!', error);
      queryClient.setQueryData(trackCacheKeys.detail(id), () => prevTrack);
    }
  });
}
