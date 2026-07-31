'use client';

import { FileUploadField } from '@/shared/components/file-upload';
import { Button } from '@/shared/components/ui/button';
import { Field, FieldGroup, FieldSet } from '@/shared/components/ui/field';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useTrackCreatorAccordionSectionsStore } from '../../model/accordion-sections-store';
import {
  setAccordionOpenedSectionIdSelector,
  setAccordionSectionStatusSelector
} from '@/shared/lib/accordion-sections/sections-selectors';
import { AccordionSectionStatus } from '@/shared/lib/accordion-sections/section-status';
import useTrackCreatorStore from '../../model/track-creator-store';
import {
  setTrackCreatorAudioSelector,
  trackCreatorAudioSelector
} from '../../model/track-creator-selectors';

const formSchema = z.object({
  audio: z.instanceof(File)
});

type FormData = z.output<typeof formSchema>;

interface Props {
  sectionId: string;
  nextSectionId: string;
}

export default function AudioUploadForm({ sectionId, nextSectionId }: Props) {
  const trackCreatorAudio = useTrackCreatorStore(trackCreatorAudioSelector);

  const setTrackCreatorAudio = useTrackCreatorStore(
    setTrackCreatorAudioSelector
  );

  const { control, formState, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    values: trackCreatorAudio
      ? {
          audio: trackCreatorAudio
        }
      : undefined
  });
  const { isValid, errors } = formState;

  const setOpenedSectionId = useTrackCreatorAccordionSectionsStore(
    setAccordionOpenedSectionIdSelector
  );
  const setSectionStatus = useTrackCreatorAccordionSectionsStore(
    setAccordionSectionStatusSelector
  );

  async function handleSubmitCallback(formData: FormData) {
    setTrackCreatorAudio(formData.audio);

    setOpenedSectionId(nextSectionId);
    setSectionStatus(sectionId, AccordionSectionStatus.VALID);
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitCallback)}>
      <FieldGroup>
        <FieldSet>
          <Field>
            <Controller
              control={control}
              name="audio"
              rules={{
                required: 'Please upload a file'
              }}
              render={({ field }) => (
                <FileUploadField
                  label="Audio"
                  description="MP3, AAC up to 10MB"
                  accept=".mp3,.aac"
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.audio?.message}
                />
              )}
            />
          </Field>
        </FieldSet>
        <Field orientation="horizontal">
          <Button
            className="text-sm"
            size="lg"
            type="submit"
            disabled={!isValid}
          >
            Continue
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
