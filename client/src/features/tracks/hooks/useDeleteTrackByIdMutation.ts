import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTrackById, trackCacheKeys, TracksData } from '@/entities/track';

export default function useDeleteTrackByIdMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: trackCacheKeys.all(),
    mutationFn: deleteTrackById,
    onMutate: (id: string) => {
      queryClient.cancelQueries({ queryKey: trackCacheKeys.all() });
      const prevTracksCopy = queryClient.getQueryData<TracksData>(
        trackCacheKeys.all()
      );
      queryClient.setQueryData(
        trackCacheKeys.all(),
        (prevTracks: TracksData) => {
          return {
            ...prevTracks,
            tracks: prevTracks.tracks.filter((track) => track._id !== id)
          };
        }
      );

      return prevTracksCopy;
    },
    onSuccess: (removedTrack, __, prevTracks: TracksData | undefined) => {
      if (!prevTracks) return;
      queryClient.setQueryData(
        trackCacheKeys.all(),
        (prevTracks: TracksData) => {
          return {
            ...prevTracks,
            tracks: prevTracks.tracks.filter(
              (track) => track._id !== removedTrack._id
            )
          };
        }
      );
    },
    onError: (error, __, prevTracks: TracksData | undefined) => {
      console.error('Error deleting track!', error);
      queryClient.setQueryData(trackCacheKeys.all(), () => prevTracks);
    }
  });
}
