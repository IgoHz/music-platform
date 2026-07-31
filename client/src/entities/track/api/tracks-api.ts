'use server';

import api from '@/shared/api/api-wrapper';
import { AxiosResponse } from 'axios';
import { QueryClient } from '@tanstack/react-query';
import type { Track } from '../model/track';
import type { TracksData } from '../model/tracks-data';
import { trackCacheKeys } from '../model/cache-keys-factory';

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
    queryClient.invalidateQueries({ queryKey: trackCacheKeys.all() });

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
    queryClient.invalidateQueries({ queryKey: trackCacheKeys.detail(id) });
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
    queryClient.invalidateQueries({ queryKey: trackCacheKeys.all() });

    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
