'use client';

import { Accordion } from '@/shared/components/accordion';
import {
  accordionIsHydratedSelector,
  accordionOpenedSectionIdSelector,
  accordionSectionStatusesSelector,
  initAccordionSectionsSelector,
  setAccordionOpenedSectionIdSelector
} from '@/shared/lib/accordion-sections/sections-selectors';
import { useTrackCreatorAccordionSectionsStore } from '../../model/accordion-sections-store';
import { AccordionSection } from '@/shared/components/accordion';
import { useEffect, useEffectEvent, useMemo } from 'react';
import { AccordionSectionStatus } from '@/shared/lib/accordion-sections/section-status';

interface Props {
  sections: AccordionSection[];
  className?: string;
}

export function AccordionWrapper({ sections, className }: Props) {
  const sectionStatuses = useTrackCreatorAccordionSectionsStore(
    accordionSectionStatusesSelector
  );
  const isHydrated = useTrackCreatorAccordionSectionsStore(
    accordionIsHydratedSelector
  );
  const openedSectionId = useTrackCreatorAccordionSectionsStore(
    accordionOpenedSectionIdSelector
  );

  const initSections = useTrackCreatorAccordionSectionsStore(
    initAccordionSectionsSelector
  );
  const setOpenedSectionId = useTrackCreatorAccordionSectionsStore(
    setAccordionOpenedSectionIdSelector
  );

  const hasSectionStatuses = !!Object.keys(sectionStatuses).length;

  const handleEffectEvent = useEffectEvent(() => {
    initSections(sections.map((item) => item.id));
  });
  useEffect(() => {
    if (isHydrated && !hasSectionStatuses) {
      handleEffectEvent();
    }
  }, [isHydrated, hasSectionStatuses]);

  const populatedSections = useMemo(
    () =>
      sections.map((item) => ({
        ...item,
        disabled: sectionStatuses[item.id] === AccordionSectionStatus.INVALID
      })),
    [sections, sectionStatuses]
  );

  return (
    <Accordion
      className={className}
      sections={populatedSections}
      openedSectionId={openedSectionId}
      setOpenedSectionId={setOpenedSectionId}
    />
  );
}
