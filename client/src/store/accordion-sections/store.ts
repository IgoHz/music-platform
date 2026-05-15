import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface State {
  sections: Sections;
  isRehydrated: boolean;

  setSections: (sectionIds: string[]) => void;
  setSectionIsOpen: (id: string, isOpen: boolean) => void;
  setRehydrated: (rehydrated: boolean) => void;
}

type Sections = Record<string, boolean>;

const useAccordionSectionsStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        sections: {},
        isRehydrated: false,

        setSections: (sectionIds: string[]) => {
          const sections: Sections = {};
          sectionIds.forEach((id) => {
            sections[id] = false;
          });
          set({ sections }, undefined, 'accordionSections/set-sections');
        },
        setSectionIsOpen: (id: string, isOpen: boolean) => {
          const sections = get().sections;
          set(
            {
              sections: {
                ...sections,
                [id]: isOpen
              }
            },
            undefined,
            'accordionSections/set-section-is-open'
          );
        },
        setRehydrated: (rehydrated) => set({ isRehydrated: rehydrated })
      }),
      {
        name: 'accordion-sections',
        partialize: (state) => ({
          sections: state.sections
        }),
        onRehydrateStorage: () => (state) => {
          state?.setRehydrated(true); // set rehydrated to true when persistence is complete
        }
      }
    )
  )
);

export default useAccordionSectionsStore;
