import { State } from './store';

export const sectionsSelector = (state: State) => state.sections;
export const isHydratedSelector = (state: State) => state.isRehydrated;

export const setSectionsSelector = (state: State) => state.setSections;
export const setSectionIsOpenSelector = (state: State) =>
  state.setSectionIsOpen;
