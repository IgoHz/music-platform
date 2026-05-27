import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TRACKS_CACHE_KEY } from '../constants/cache-keys';
import { deleteTrackById } from '../api';
import { TracksData } from '../types';

export default function useDeleteTrackByIdMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [TRACKS_CACHE_KEY],
    mutationFn: deleteTrackById,
    onMutate: (id: string) => {
      queryClient.cancelQueries({ queryKey: [TRACKS_CACHE_KEY] });
      const prevTracksCopy = queryClient.getQueryData<TracksData>([
        TRACKS_CACHE_KEY
      ]);
      queryClient.setQueryData([TRACKS_CACHE_KEY], (prevTracks: TracksData) => {
        return {
          ...prevTracks,
          tracks: prevTracks.tracks.filter((track) => track._id !== id)
        };
      });

      return prevTracksCopy;
    },
    onSuccess: (removedTrack, __, prevTracks: TracksData | undefined) => {
      if (!prevTracks) return;
      queryClient.setQueryData([TRACKS_CACHE_KEY], (prevTracks: TracksData) => {
        return {
          ...prevTracks,
          tracks: prevTracks.tracks.filter(
            (track) => track._id !== removedTrack._id
          )
        };
      });
    },
    onError: (error, __, prevTracks: TracksData | undefined) => {
      console.error('Error deleting track!', error);
      queryClient.setQueryData([TRACKS_CACHE_KEY], () => prevTracks);
    }
  });
}
