import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TRACKS_CACHE_KEY } from '../constants/cache-keys';
import { addListens } from '../api';
import { Track } from '../types';

export default function useAddListensMutation(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [TRACKS_CACHE_KEY, id],
    mutationFn: () => addListens(id),
    onMutate: () => {
      queryClient.cancelQueries({ queryKey: [TRACKS_CACHE_KEY, id] });
      const prevTrackCopy = queryClient.getQueryData<Track>([
        TRACKS_CACHE_KEY,
        id
      ]);
      if (!prevTrackCopy) return;
      queryClient.setQueryData([TRACKS_CACHE_KEY, id], (prevTrack: Track) => ({
        ...prevTrack,
        listens: prevTrack.listens + 1
      }));

      return prevTrackCopy;
    },
    onSuccess: (_, __, prevTrack: Track | undefined) => {
      if (!prevTrack) return;
      queryClient.setQueryData([TRACKS_CACHE_KEY, id], () => ({
        ...prevTrack,
        listens: prevTrack.listens + 1
      }));
    },
    onError: (error, __, prevTrack: Track | undefined) => {
      console.error('Error adding listens!', error);
      queryClient.setQueryData([TRACKS_CACHE_KEY, id], () => prevTrack);
    }
  });
}
