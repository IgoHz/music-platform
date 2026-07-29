import { State } from './store';

export const playerTrackSelector = (state: State) => state.track;
export const playerStatusSelector = (state: State) => state.status;
export const playerTrackDurationSelector = (state: State) => state.duration;
export const playerTrackProgressSelector = (state: State) => state.progress;
export const playerVolumeSelector = (state: State) => state.volume;

export const setPlayerTrackSelector = (state: State) => state.setPlayerTrack;
export const setPlayerStatusSelector = (state: State) => state.setPlayerStatus;
export const setPlayerTrackDurationSelector = (state: State) =>
  state.setPlayerTrackDuration;
export const setPlayerTrackProgressSelector = (state: State) =>
  state.setPlayerTrackProgress;
export const setPlayerVolumeSelector = (state: State) => state.setPlayerVolume;
