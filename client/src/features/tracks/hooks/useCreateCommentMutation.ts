import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TRACKS_CACHE_KEY } from '../constants/cache-keys';
import { createComment } from '../api';
import { Track } from '../types';

export default function useCreateCommentMutation(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [TRACKS_CACHE_KEY, id],
    mutationFn: createComment,
    onMutate: (body) => {
      queryClient.cancelQueries({ queryKey: [TRACKS_CACHE_KEY, id] });
      const prevTrackCopy = queryClient.getQueryData<Track>([
        TRACKS_CACHE_KEY,
        id
      ]);
      queryClient.setQueryData([TRACKS_CACHE_KEY, id], (prevTrack: Track) => ({
        ...prevTrack,
        comments: [
          ...prevTrack.comments,
          { ...body, _id: prevTrack.comments.length.toString() }
        ]
      }));

      return prevTrackCopy;
    },
    onSuccess: (createdComment, _, prevTrack: Track | undefined) => {
      if (!prevTrack) return;
      queryClient.setQueryData([TRACKS_CACHE_KEY, id], () => ({
        ...prevTrack,
        comments: [...prevTrack.comments, createdComment]
      }));
    },
    onError: (error, __, prevTrack: Track | undefined) => {
      console.error('Error creating comment!', error);
      queryClient.setQueryData([TRACKS_CACHE_KEY, id], () => prevTrack);
    }
  });
}
