import { State } from './store';

export const trackCreatorNameSelector = (state: State) => state.name;
export const trackCreatorArtistSelector = (state: State) => state.artist;
export const trackCreatorTextSelector = (state: State) => state.text;
export const trackCreatorPictureSelector = (state: State) => state.picture;
export const trackCreatorAudioSelector = (state: State) => state.audio;

export const setTrackCreatorBaseDataSelector = (state: State) =>
  state.setBaseData;
export const setTrackCreatorPictureSelector = (state: State) =>
  state.setPicture;
export const setTrackCreatorAudioSelector = (state: State) => state.setAudio;
export const resetTrackCreatorStoreSelector = (state: State) =>
  state.resetStore;
