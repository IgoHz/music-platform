import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Track } from '../../types';

export interface State extends BaseData {
  picture: File | null;
  audio: File | null;

  setBaseData: (baseData: BaseData) => void;
  setPicture: (picture: File) => void;
  setAudio: (audio: File) => void;
  resetStore: () => void;
}

type BaseData = Pick<Track, 'name' | 'artist' | 'text'>;

const useTrackCreatorStore = create<State>()(
  devtools(
    persist(
      (set, get, store) => ({
        name: '',
        artist: '',
        text: '',
        audio: null,
        picture: null,

        setBaseData: (baseData: BaseData) => {
          set(
            {
              ...baseData
            },
            undefined,
            'track-creator/set-base-data'
          );
        },
        setPicture: (picture: File) => {
          set(
            {
              picture
            },
            undefined,
            'track-creator/set-picture'
          );
        },
        setAudio: (audio: File) => {
          set(
            {
              audio
            },
            undefined,
            'track-creator/set-audio'
          );
        },
        resetStore: () => {
          set(store.getInitialState());
        }
      }),
      {
        name: 'track-creator',
        partialize: (state) => ({
          name: state.name,
          artist: state.artist,
          text: state.text
        })
      }
    )
  )
);

export default useTrackCreatorStore;
