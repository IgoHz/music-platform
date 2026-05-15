import { Accordion, AccordionConfig } from '@/components/accordion';
import Header from '@/components/ui/header';

function ComponentPlaceholder() {
  return <div>component</div>;
}

const accordionConfig: AccordionConfig = {
  baseData: {
    title: 'Base data',
    component: <ComponentPlaceholder />
  },
  picture: {
    title: 'Picture Upload',
    component: <ComponentPlaceholder />
  },
  audio: {
    title: 'Audio Upload',
    component: <ComponentPlaceholder />
  }
};

export default function TrackCreator() {
  return (
    <div>
      <Header type="h1">Create Track:</Header>
      <Accordion className="mt-2" config={accordionConfig} />
    </div>
  );
}
