'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from './ui/collapsible';
import { Button } from './ui/button';
import { JSX } from 'react';
import { Separator } from './ui/separator';
import Header from './ui/header';

interface AccordionProps {
  sections: AccordionSection[];
  openedSectionId: string | null;
  setOpenedSectionId: (sectionId: string) => void;
  className?: string;
}

export interface AccordionSection {
  id: string;
  title: string;
  component: JSX.Element;
  disabled?: boolean;
}

export function Accordion({
  sections,
  openedSectionId,
  setOpenedSectionId,
  className
}: AccordionProps) {
  if (!sections.length) {
    // TODO: Provide a proper skeleton
    return <div>Loading</div>;
  }

  return (
    <div className={className}>
      {sections.map((section) => (
        <AccordionSection
          key={section.id}
          id={section.id}
          title={section.title}
          disabled={section.disabled}
          openedSectionId={openedSectionId}
          setOpenedSectionId={setOpenedSectionId}
        >
          {section.component}
        </AccordionSection>
      ))}
    </div>
  );
}

interface AccordionSectionProps {
  id: string;
  title: string;
  disabled?: boolean;
  openedSectionId: string | null;
  setOpenedSectionId: (sectionId: string) => void;
  children: JSX.Element;
}

function AccordionSection({
  id,
  title,
  disabled,
  children,
  openedSectionId,
  setOpenedSectionId
}: AccordionSectionProps) {
  const isOpen = id === openedSectionId;

  function handleOpenChange(open: boolean) {
    if (open) {
      setOpenedSectionId(id);
    }
  }

  return (
    <Collapsible
      open={isOpen}
      disabled={!isOpen && disabled}
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
