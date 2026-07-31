'use client';

import { Button } from '@/shared/components/ui/button';
import {
  resetTrackCreatorStoreSelector,
  trackCreatorArtistSelector,
  trackCreatorAudioSelector,
  trackCreatorNameSelector,
  trackCreatorPictureSelector,
  trackCreatorTextSelector,
  useTrackCreatorStore
} from '@/entities/tracks/track-creator';
import { useRouter } from 'next/navigation';
import useCreateTrackMutation from '../../hooks/useCreateTrackMutation';
import { useTrackCreatorAccordionSectionsStore } from '../../model/accordion-sections-store';
import {
  accordionSectionStatusesSelector,
  resetAccordionSectionsStoreSelector
} from '@/shared/lib/accordion-sections/selectors';
import { AccordionSectionStatus } from '@/shared/lib/accordion-sections/section-status';

interface Props {
  className?: string;
}

export default function Controls({ className }: Props) {
  const router = useRouter();

  const accordionSections = useTrackCreatorAccordionSectionsStore(
    accordionSectionStatusesSelector
  );

  const resetAccordionSectionsStore = useTrackCreatorAccordionSectionsStore(
    resetAccordionSectionsStoreSelector
  );

  const trackCreatorName = useTrackCreatorStore(trackCreatorNameSelector);
  const trackCreatorArtist = useTrackCreatorStore(trackCreatorArtistSelector);
  const trackCreatorText = useTrackCreatorStore(trackCreatorTextSelector);
  const trackCreatorPicture = useTrackCreatorStore(trackCreatorPictureSelector);
  const trackCreatorAudio = useTrackCreatorStore(trackCreatorAudioSelector);

  const resetTrackCreatorStore = useTrackCreatorStore(
    resetTrackCreatorStoreSelector
  );

  const createTrackMutation = useCreateTrackMutation();

  const areSectionsValid = Object.keys(accordionSections).every(
    (sectionKey) =>
      accordionSections[sectionKey] === AccordionSectionStatus.VALID
  );

  async function handleCreateTrackClick() {
    const formData = new FormData();
    formData.append('name', trackCreatorName);
    formData.append('artist', trackCreatorArtist);
    formData.append('text', trackCreatorText);
    if (trackCreatorPicture) {
      formData.append('picture', trackCreatorPicture);
    }
    if (trackCreatorAudio) {
      formData.append('audio', trackCreatorAudio);
    }

    await createTrackMutation.mutateAsync(formData);

    router.push('/tracks');

    resetAccordionSectionsStore();
    resetTrackCreatorStore();
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <Button
        className="text-sm"
        size="lg"
        disabled={!areSectionsValid}
        onClick={handleCreateTrackClick}
      >
        Create
      </Button>
    </div>
  );
}
