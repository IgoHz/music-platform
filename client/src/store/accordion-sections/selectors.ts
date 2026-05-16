import { State } from './store';

export const sectionsSelector = (state: State) => state.sections;
export const openedSectionIdSelector = (state: State) => state.openedSectionId;
export const isHydratedSelector = (state: State) => state.isRehydrated;

export const initSectionsSelector = (state: State) => state.initSections;
export const setOpenedSectionIdSelector = (state: State) =>
  state.setOpenedSectionId;
export const setSectionStatusSelector = (state: State) =>
  state.setSectionStatus;
