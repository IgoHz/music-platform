import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AccordionSectionStatus } from './section-status';

type SectionStatuses = Record<string, AccordionSectionStatus>;

export interface State {
  sectionStatuses: SectionStatuses;
  openedSectionId: string;
  isRehydrated: boolean;

  initSections: (sectionIds: string[]) => void;
  setOpenedSectionId: (id: string) => void;
  setSectionStatus: (id: string, status: AccordionSectionStatus) => void;
  resetStore: () => void;
  setRehydrated: (rehydrated: boolean) => void;
}

function createAccordionSectionsStoreHook(domainName: string) {
  return create<State>()(
    devtools(
      persist(
        (set, get, store) => ({
          sectionStatuses: {},
          openedSectionId: '',
          isRehydrated: false,

          initSections: (sectionIds: string[]) => {
            const sectionStatuses: SectionStatuses = {};
            sectionIds.forEach((id) => {
              sectionStatuses[id] = AccordionSectionStatus.INVALID;
            });
            set(
              {
                sectionStatuses,
                openedSectionId: sectionIds[0]
              },
              undefined,
              `accordion-sections-${domainName}/set-sections`
            );
          },
          setOpenedSectionId: (id: string) => {
            set(
              {
                openedSectionId: id
              },
              undefined,
              `accordion-sections-${domainName}/set-opened-section-id`
            );
          },
          setSectionStatus: (id: string, status: AccordionSectionStatus) => {
            const sectionStatuses = get().sectionStatuses;
            set(
              {
                sectionStatuses: {
                  ...sectionStatuses,
                  [id]: status
                }
              },
              undefined,
              `accordion-sections-${domainName}/set-section-status`
            );
          },
          resetStore: () => {
            set({
              ...store.getInitialState(),
              isRehydrated: true
            });
          },
          setRehydrated: (rehydrated) => set({ isRehydrated: rehydrated })
        }),
        {
          name: `accordion-sections-${domainName}`,
          partialize: (state) => ({
            sectionStatuses: state.sectionStatuses,
            openedSectionId: state.openedSectionId
          }),
          onRehydrateStorage: () => (state) => {
            state?.setRehydrated(true); // set rehydrated to true when persistence is complete
          }
        }
      )
    )
  );
}

export default createAccordionSectionsStoreHook;
