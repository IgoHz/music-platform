'use client';

import { Button } from '@/shared/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet
} from '@/shared/components/ui/field';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import useTrackCreatorStore from '../../model/track-creator-store';
import {
  setTrackCreatorBaseDataSelector,
  trackCreatorArtistSelector,
  trackCreatorNameSelector,
  trackCreatorTextSelector
} from '../../model/track-creator-selectors';
import { useTrackCreatorAccordionSectionsStore } from '../../model/accordion-sections-store';
import {
  setAccordionOpenedSectionIdSelector,
  setAccordionSectionStatusSelector
} from '@/shared/lib/accordion-sections/sections-selectors';
import { AccordionSectionStatus } from '@/shared/lib/accordion-sections/section-status';

const formSchema = z.object({
  name: z.string().min(2, 'Track Name must be at least 2 characters!'),
  artist: z.string().min(2, 'Artist name must be at least 2 characters long!'),
  text: z.string().min(2, 'Track text must be at least 4 characters long!')
});

type FormData = z.output<typeof formSchema>;

interface Props {
  sectionId: string;
  nextSectionId: string;
}

export default function BaseDataForm({ sectionId, nextSectionId }: Props) {
  const trackCreatorName = useTrackCreatorStore(trackCreatorNameSelector);
  const trackCreatorArtist = useTrackCreatorStore(trackCreatorArtistSelector);
  const trackCreatorText = useTrackCreatorStore(trackCreatorTextSelector);

  const setTrackCreatorBaseData = useTrackCreatorStore(
    setTrackCreatorBaseDataSelector
  );

  const { register, formState, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    values: {
      name: trackCreatorName,
      artist: trackCreatorArtist,
      text: trackCreatorText
    }
  });
  const { errors } = formState;

  const setOpenedSectionId = useTrackCreatorAccordionSectionsStore(
    setAccordionOpenedSectionIdSelector
  );
  const setSectionStatus = useTrackCreatorAccordionSectionsStore(
    setAccordionSectionStatusSelector
  );

  function handleSubmitCallback(formData: FormData) {
    setTrackCreatorBaseData(formData);

    setOpenedSectionId(nextSectionId);
    setSectionStatus(sectionId, AccordionSectionStatus.VALID);
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitCallback)}>
      <FieldGroup>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="name">Track Name</FieldLabel>
            <Input {...register('name')} />
            <FieldError>{errors.name?.message}</FieldError>
          </Field>
          <Field>
            <FieldLabel htmlFor="artist">Artist</FieldLabel>
            <Input {...register('artist')} />
            <FieldError>{errors.artist?.message}</FieldError>
          </Field>
          <Field>
            <FieldLabel htmlFor="text">Track Text</FieldLabel>
            <Textarea {...register('text')} />
            <FieldError>{errors.text?.message}</FieldError>
          </Field>
        </FieldSet>
        <Field orientation="horizontal">
          <Button className="text-sm" size="lg" type="submit">
            Continue
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
