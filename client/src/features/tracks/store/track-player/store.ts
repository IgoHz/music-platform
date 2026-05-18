import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Track } from '../../types';

export interface State {
  track: Track | null;
  status: PlayerStatus;
  duration: number;
  progress: number;
  volume: number;

  setPlayerTrack: (track: Track) => void;
  setPlayerStatus: (status: PlayerStatus) => void;
  setPlayerTrackDuration: (duration: number) => void;
  setPlayerTrackProgress: (progress: number) => void;
  setPlayerVolume: (progress: number) => void;
}

export enum PlayerStatus {
  PLAY = 'play',
  PAUSE = 'pause'
}

const useTrackPlayerStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        track: null,
        status: PlayerStatus.PAUSE,
        duration: 0,
        progress: 0,
        volume: 50,

        setPlayerTrack: (track: Track) => {
          set(
            {
              track
            },
            undefined,
            'track-player/set-track'
          );
        },
        setPlayerStatus: (status: PlayerStatus) => {
          set(
            {
              status
            },
            undefined,
            'track-player/set-player-status'
          );
        },
        setPlayerTrackDuration: (duration: number) => {
          set(
            {
              duration
            },
            undefined,
            'track-player/set-player-track-duration'
          );
        },
        setPlayerTrackProgress: (progress: number) => {
          set(
            {
              progress
            },
            undefined,
            'track-player/set-player-track-progress'
          );
        },
        setPlayerVolume: (volume: number) => {
          set(
            {
              volume
            },
            undefined,
            'track-player/set-player-volume'
          );
        }
      }),
      {
        name: 'track-player',
        partialize: (state) => ({
          volume: state.volume
        })
      }
    )
  )
);

export default useTrackPlayerStore;
