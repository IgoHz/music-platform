'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from './ui/collapsible';
import { Button } from './ui/button';
import {
  accordionIsHydratedSelector,
  accordionOpenedSectionIdSelector,
  accordionSectionsSelector,
  setAccordionOpenedSectionIdSelector,
  initAccordionSectionsSelector,
  useAccordionSectionsStore
} from '@/store/accordion-sections';
import { JSX, useEffect, useEffectEvent } from 'react';
import { Separator } from './ui/separator';
import Header from './ui/header';
import { AccordionSectionStatus } from '@/store/accordion-sections/store';

export type AccordionConfig = Record<string, AccordionConfigItem>;

interface AccordionConfigItem {
  title: string;
  component: JSX.Element;
}

interface AccordionProps {
  config: AccordionConfig;
  className?: string;
}

export function Accordion({ config, className }: AccordionProps) {
  const sections = useAccordionSectionsStore(accordionSectionsSelector);
  const isHydrated = useAccordionSectionsStore(accordionIsHydratedSelector);

  const initSections = useAccordionSectionsStore(initAccordionSectionsSelector);

  const sectionKeys = Object.keys(sections);
  const sectionKeysLength = sectionKeys.length;

  const handleEffectEvent = useEffectEvent(() => {
    initSections(Object.keys(config));
  });
  useEffect(() => {
    if (isHydrated && !sectionKeysLength) {
      handleEffectEvent();
    }
  }, [isHydrated, sectionKeysLength]);

  if (!sectionKeysLength) {
    // TODO: Provide a proper skeleton
    return <div>Loading</div>;
  }

  return (
    <div className={className}>
      {sectionKeys.map((sectionKey) => (
        <AccordionSection
          key={sectionKey}
          id={sectionKey}
          title={config[sectionKey].title}
          status={sections[sectionKey]}
        >
          {config[sectionKey].component}
        </AccordionSection>
      ))}
    </div>
  );
}

interface AccordionSectionProps {
  id: string;
  title: string;
  status: AccordionSectionStatus;
  children: JSX.Element;
}

function AccordionSection({
  id,
  title,
  status,
  children
}: AccordionSectionProps) {
  const openedSectionId = useAccordionSectionsStore(
    accordionOpenedSectionIdSelector
  );
  const setOpenedSectionId = useAccordionSectionsStore(
    setAccordionOpenedSectionIdSelector
  );

  const isOpen = id === openedSectionId;
  const isInvalid = status === AccordionSectionStatus.INVALID;

  function handleOpenChange(open: boolean) {
    if (open) {
      setOpenedSectionId(id);
    }
  }

  return (
    <Collapsible
      open={isOpen}
      disabled={!isOpen && isInvalid}
      onOpenChange={handleOpenChange}
    >
      <div className="flex justify-end">
        <CollapsibleTrigger className="my-2" asChild>
          <Button variant="ghost" size="lg">
            <Header type="h2">{title}</Header>
          </Button>
        </CollapsibleTrigger>
      </div>
      <Separator />
      <CollapsibleContent className="m-2">{children}</CollapsibleContent>
    </Collapsible>
  );
}
