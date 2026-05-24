'use server';

import api from '@/api/api-wrapper';
import { Comment, Track, TracksData } from '@/features/tracks/types';
import { AxiosResponse } from 'axios';
import { TRACKS_CACHE_KEY } from '../constants/cache-keys';
import { QueryClient } from '@tanstack/react-query';

interface GetTracksParams {
  query?: string;
  offset?: string;
}

export async function getTracks(params?: GetTracksParams) {
  try {
    const response = await api.get<unknown, AxiosResponse<TracksData>>(
      '/tracks',
      {
        params
      }
    );
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function getTrackById(id: string) {
  try {
    const response = await api.get<unknown, AxiosResponse<Track>>(
      `/tracks/${id}`
    );
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function createTrack(formData: FormData) {
  try {
    const response = await api.post<unknown, AxiosResponse<Track>>(
      '/tracks',
      formData
    );

    const queryClient = new QueryClient();
    queryClient.invalidateQueries({ queryKey: [TRACKS_CACHE_KEY] });

    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

interface CreateCommentBody extends Omit<Comment, '_id'> {
  trackId: string;
}

export async function createComment(body: CreateCommentBody) {
  try {
    const response = await api.post<unknown, AxiosResponse<Comment>>(
      '/tracks/comment',
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

export async function addListens(id: string) {
  try {
    await api.post<unknown, AxiosResponse<Track>>(`/tracks/listens/${id}`);

    const queryClient = new QueryClient();
    queryClient.invalidateQueries({ queryKey: [TRACKS_CACHE_KEY, id] });
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function deleteTrackById(id: string) {
  try {
    const response = await api.delete<unknown, AxiosResponse<Track>>(
      `/tracks/${id}`
    );

    const queryClient = new QueryClient();
    queryClient.invalidateQueries({ queryKey: [TRACKS_CACHE_KEY] });

    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
