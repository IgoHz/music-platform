import { useMutation, useQueryClient } from '@tanstack/react-query';
import { trackCacheKeys } from '@/entities/track/';
import { createComment } from '@/entities/track';
import { Track } from '@/entities/track';

export default function useCreateCommentMutation(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: trackCacheKeys.detail(id),
    mutationFn: createComment,
    onMutate: (body) => {
      queryClient.cancelQueries({ queryKey: trackCacheKeys.detail(id) });
      const prevTrackCopy = queryClient.getQueryData<Track>(
        trackCacheKeys.detail(id)
      );
      queryClient.setQueryData(
        trackCacheKeys.detail(id),
        (prevTrack: Track) => ({
          ...prevTrack,
          comments: [
            ...prevTrack.comments,
            { ...body, _id: prevTrack.comments.length.toString() }
          ]
        })
      );

      return prevTrackCopy;
    },
    onSuccess: (createdComment, _, prevTrack: Track | undefined) => {
      if (!prevTrack) return;
      queryClient.setQueryData(trackCacheKeys.detail(id), () => ({
        ...prevTrack,
        comments: [...prevTrack.comments, createdComment]
      }));
    },
    onError: (error, __, prevTrack: Track | undefined) => {
      console.error('Error creating comment!', error);
      queryClient.setQueryData(trackCacheKeys.detail(id), () => prevTrack);
    }
  });
}
