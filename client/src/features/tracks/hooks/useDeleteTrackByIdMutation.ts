import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TRACKS_CACHE_KEY } from '../constants/cache-keys';
import { deleteTrackById } from '../api/tracks';
import { Track } from '../types';

export default function useDeleteTrackByIdMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [TRACKS_CACHE_KEY],
    mutationFn: deleteTrackById,
    onMutate: (id: string) => {
      queryClient.cancelQueries({ queryKey: [TRACKS_CACHE_KEY] });
      const prevTracksCopy = queryClient.getQueryData<Array<Track>>([
        TRACKS_CACHE_KEY
      ]);
      queryClient.setQueryData(
        [TRACKS_CACHE_KEY],
        (prevTracks: Array<Track>) => {
          return prevTracks.filter((track) => track._id !== id);
        }
      );

      return prevTracksCopy;
    },
    onSuccess: (removedTrack, __, prevTracks: Array<Track> | undefined) => {
      if (!prevTracks) return;
      queryClient.setQueryData(
        [TRACKS_CACHE_KEY],
        (prevTracks: Array<Track>) => {
          return prevTracks.filter((track) => track._id !== removedTrack._id);
        }
      );
    },
    onError: (_, __, prevTracks: Array<Track> | undefined) => {
      console.error('Error deleting track!');
      queryClient.setQueryData([TRACKS_CACHE_KEY], () => prevTracks);
    }
  });
}
