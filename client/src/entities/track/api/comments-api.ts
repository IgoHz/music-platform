'use server';

import api from '@/shared/api/api-wrapper';
import { AxiosResponse } from 'axios';
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
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
