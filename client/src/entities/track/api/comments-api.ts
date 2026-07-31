'use server';

import api from '@/shared/api/api-wrapper';
import { QueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { trackCacheKeys } from '@/entities/track/model/cache-keys-factory';
import type { Comment } from '../model/comment';

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
      queryKey: trackCacheKeys.detail(body.trackId)
    });

    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
