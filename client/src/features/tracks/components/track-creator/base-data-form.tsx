'use client';

import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  setOpenedSectionIdSelector,
  setSectionStatusSelector,
  useAccordionSectionsStore
} from '@/store/accordion-sections';
import { AccordionSectionStatus } from '@/store/accordion-sections/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
  const { register, formState, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });
  const { errors } = formState;

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
