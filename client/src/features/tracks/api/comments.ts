import api from '@/api/api-wrapper';
import { QueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { TRACKS_CACHE_KEY } from '../constants/cache-keys';
import { Comment } from '../types';

interface CreateCommentBody extends Omit<Comment, '_id'> {
  trackId: string;
}

export async function createComment(body: CreateCommentBody) {
  try {
    const response = await api.post<unknown, AxiosResponse<Comment>>(
      '/comments',
      body
    );

    const queryClient = new QueryClient();
    queryClient.invalidateQueries({
      queryKey: [TRACKS_CACHE_KEY, body.trackId]
    });

    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
