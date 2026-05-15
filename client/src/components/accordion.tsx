'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from './ui/collapsible';
import { Button } from './ui/button';
import {
  isHydratedSelector,
  sectionsSelector,
  setSectionIsOpenSelector,
  setSectionsSelector,
  useAccordionSectionsStore
} from '@/store/accordion-sections';
import { JSX, useEffect, useEffectEvent } from 'react';
import { Separator } from './ui/separator';
import Header from './ui/header';

export type AccordionConfig = Record<string, AccordionConfigItem>;

interface AccordionConfigItem {
  title: string;
  component: JSX.Element;
}

interface AccordionProps {
  className: string;
  config: AccordionConfig;
}

export function Accordion({ className, config }: AccordionProps) {
  const sections = useAccordionSectionsStore(sectionsSelector);
  const isHydrated = useAccordionSectionsStore(isHydratedSelector);

  const setSections = useAccordionSectionsStore(setSectionsSelector);

  const sectionKeys = Object.keys(sections);
  const sectionKeysLength = sectionKeys.length;

  const handleEffectEvent = useEffectEvent(() => {
    setSections(Object.keys(config));
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
          isOpen={sections[sectionKey]}
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
  children: JSX.Element;
  isOpen: boolean;
}

function AccordionSection({
  id,
  title,
  children,
  isOpen
}: AccordionSectionProps) {
  const setSectionIsOpen = useAccordionSectionsStore(setSectionIsOpenSelector);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={(open: boolean) => setSectionIsOpen(id, open)}
    >
      <div className="flex justify-end">
      <CollapsibleTrigger className="my-2" asChild>
        <Button variant="ghost" size="lg">
          <Header type="h2">{title}</Header>
        </Button>
      </CollapsibleTrigger>
      </div>
      <Separator />
      <CollapsibleContent className="m-2">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
