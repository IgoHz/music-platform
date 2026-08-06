'use server';

import apiFetch from '@/shared/api/api-wrapper';
import type { Comment } from '../model/comment';
import { revalidateTag } from 'next/cache';
import { trackCacheTags } from '../model/cache-keys-factory';

interface CreateCommentBody extends Omit<Comment, '_id'> {
  trackId: string;
}

export async function createComment(body: CreateCommentBody) {
  try {
    const response = await apiFetch<Comment>('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    revalidateTag(trackCacheTags.detail(body.trackId), 'max');

    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
