'use client';

import { FileUploadField } from '@/components/file-upload';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldSet } from '@/components/ui/field';
import {
  setOpenedSectionIdSelector,
  setSectionStatusSelector,
  useAccordionSectionsStore
} from '@/store/accordion-sections';
import { AccordionSectionStatus } from '@/store/accordion-sections/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  picture: z.instanceof(File)
});

type FormData = z.output<typeof formSchema>;

interface Props {
  sectionId: string;
  nextSectionId: string;
}

export default function PictureUploadForm({ sectionId, nextSectionId }: Props) {
  const { control, formState, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });
  const { isValid, errors } = formState;

  const setOpenedSectionId = useAccordionSectionsStore(
    setOpenedSectionIdSelector
  );
  const setSectionStatus = useAccordionSectionsStore(setSectionStatusSelector);

  function handleSubmitCallback(formData: FormData) {
    console.log('formData: ', formData);

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
              name="picture"
              rules={{
                required: 'Please upload a file'
              }}
              render={({ field }) => (
                <FileUploadField
                  label="Picture"
                  description="JPG, PNG up to 10MB"
                  accept=".jpg,.png"
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.picture?.message}
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
