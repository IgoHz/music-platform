import { Accordion, AccordionConfig } from '@/components/accordion';
import Header from '@/components/ui/header';
import BaseDataForm from './track-creator/base-data-form';
import PictureUploadForm from './track-creator/picture-upload-form';
import AudioUploadForm from './track-creator/audio-upload-form';

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
    <div>
      <Header type="h1">Create Track:</Header>
      <Accordion className="mt-2" config={accordionConfig} />
    </div>
  );
}
