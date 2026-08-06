'use server';

import apiFetch from '@/shared/api/api-wrapper';
import type { Track } from '../model/track';
import type { TracksData } from '../model/tracks-data';
import { trackCacheTags } from '../model/cache-keys-factory';
import { revalidateTag } from 'next/cache';

interface GetTracksParams {
  query?: string;
  offset?: string;
}

export async function getTracks(params?: GetTracksParams) {
  try {
    const query = new URLSearchParams();
    if (params?.query) {
      query.append('query', params.query);
    }
    if (params?.offset) {
      query.append('offset', params.offset);
    }
    const response = await apiFetch<TracksData>(`/tracks?${query.toString()}`, {
      next: {
        tags: [trackCacheTags.all()]
      }
    });
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function getTrackById(id: string) {
  try {
    const response = await apiFetch<Track>(`/tracks/${id}`, {
      next: {
        tags: [trackCacheTags.detail(id)]
      }
    });
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function createTrack(formData: FormData) {
  try {
    const response = await apiFetch<Track>('/tracks', {
      method: 'POST',
      body: formData
    });
    revalidateTag(trackCacheTags.all(), 'max');
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function addListens(id: string) {
  try {
    await apiFetch<void>(`/tracks/listens/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    revalidateTag(trackCacheTags.detail(id), 'max');
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function deleteTrackById(id: string) {
  try {
    const response = await apiFetch<Track>(`/tracks/${id}`, {
      method: 'DELETE'
    });
    revalidateTag(trackCacheTags.all(), 'max');
    revalidateTag(trackCacheTags.detail(id), 'max');
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
