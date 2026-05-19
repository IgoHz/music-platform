import { Accordion, AccordionConfig } from '@/components/accordion';
import Header from '@/components/ui/header';
import BaseDataForm from './track-creator/base-data-form';
import PictureUploadForm from './track-creator/picture-upload-form';
import AudioUploadForm from './track-creator/audio-upload-form';
import Controls from './track-creator/controls';

const accordionConfig: AccordionConfig = {
  baseData: {
    title: 'Base data',
    component: <BaseDataForm sectionId="baseData" nextSectionId="picture" />
  },
  picture: {
    title: 'Picture Upload',
    component: <PictureUploadForm sectionId="picture" nextSectionId="audio" />
  },
  audio: {
    title: 'Audio Upload',
    component: <AudioUploadForm sectionId="audio" nextSectionId="" />
  }
};

export default function TrackCreator() {
  return (
    <>
      <Header type="h1">Create Track:</Header>
      <Accordion className="mt-2" config={accordionConfig} />
      <Controls className="mt-4" />
    </>
  );
}
