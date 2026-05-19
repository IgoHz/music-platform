import api from '@/api/api-wrapper';
import { Track } from '@/features/tracks/types';
import { AxiosResponse } from 'axios';

export async function getTracks() {
  try {
    const response = await api.get<unknown, AxiosResponse<Array<Track>>>(
      '/tracks'
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
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
