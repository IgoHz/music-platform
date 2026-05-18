import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface State {
  sections: Sections;
  openedSectionId: string;
  isRehydrated: boolean;

  initSections: (sectionIds: string[]) => void;
  setOpenedSectionId: (id: string) => void;
  setSectionStatus: (id: string, status: AccordionSectionStatus) => void;
  setRehydrated: (rehydrated: boolean) => void;
}

type Sections = Record<string, AccordionSectionStatus>;

export enum AccordionSectionStatus {
  VALID = 'valid',
  INVALID = 'invalid'
}

const useAccordionSectionsStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        sections: {},
        openedSectionId: '',
        isRehydrated: false,

        initSections: (sectionIds: string[]) => {
          const sections: Sections = {};
          sectionIds.forEach((id) => {
            sections[id] = AccordionSectionStatus.INVALID;
          });
          set(
            {
              sections,
              openedSectionId: sectionIds[0]
            },
            undefined,
            'accordion-sections/set-sections'
          );
        },
        setOpenedSectionId: (id: string) => {
          set(
            {
              openedSectionId: id
            },
            undefined,
            'accordion-sections/set-opened-section-id'
          );
        },
        setSectionStatus: (id: string, status: AccordionSectionStatus) => {
          const sections = get().sections;
          set(
            {
              sections: {
                ...sections,
                [id]: status
              }
            },
            undefined,
            'accordion-sections/set-section-status'
          );
        },
        setRehydrated: (rehydrated) => set({ isRehydrated: rehydrated })
      }),
      {
        name: 'accordion-sections',
        partialize: (state) => ({
          sections: state.sections,
          openedSectionId: state.openedSectionId
        }),
        onRehydrateStorage: () => (state) => {
          state?.setRehydrated(true); // set rehydrated to true when persistence is complete
        }
      }
    )
  )
);

export default useAccordionSectionsStore;
