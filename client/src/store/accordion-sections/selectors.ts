import { State } from './store';

export const accordionSectionsSelector = (state: State) => state.sections;
export const accordionOpenedSectionIdSelector = (state: State) =>
  state.openedSectionId;
export const accordionIsHydratedSelector = (state: State) => state.isRehydrated;

export const initAccordionSectionsSelector = (state: State) =>
  state.initSections;
export const setAccordionOpenedSectionIdSelector = (state: State) =>
  state.setOpenedSectionId;
export const setAccordionSectionStatusSelector = (state: State) =>
  state.setSectionStatus;
export const resetAccordionSectionsStoreSelector = (state: State) =>
  state.resetStore;
