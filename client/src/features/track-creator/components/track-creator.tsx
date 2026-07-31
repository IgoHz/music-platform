import Header from '@/shared/components/ui/header';
import BaseDataForm from './track-creator/base-data-form';
import PictureUploadForm from './track-creator/picture-upload-form';
import AudioUploadForm from './track-creator/audio-upload-form';
import Controls from './track-creator/controls';
import { AccordionWrapper } from './track-creator/accordion-wrapper';

export default function TrackCreator() {
  return (
    <>
      <Header type="h1">Create Track:</Header>
      <AccordionWrapper
        className="mt-2"
        sections={[
          {
            id: 'baseData',
            title: 'Base data',
            component: (
              <BaseDataForm sectionId="baseData" nextSectionId="picture" />
            )
          },
          {
            id: 'picture',
            title: 'Picture Upload',
            component: (
              <PictureUploadForm sectionId="picture" nextSectionId="audio" />
            )
          },
          {
            id: 'audio',
            title: 'Audio Upload',
            component: <AudioUploadForm sectionId="audio" nextSectionId="" />
          }
        ]}
      />
      <Controls className="mt-4" />
    </>
  );
}
