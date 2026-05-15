'use client';

import { Button } from '@/components/ui/button';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet
} from '@/components/ui/field';
import Header from '@/components/ui/header';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  username: z.string().min(2, 'Name must be at least 2 characters!'),
  text: z.string().min(4, 'Comment must be at least 4 characters ling!')
});

type FormData = z.output<typeof formSchema>;

export default function CreateCommentForm() {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  function handleSubmitCallback(formData: FormData) {
    console.log('formData: ', formData);
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitCallback)}>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>
            <Header type="h2">Comment Form:</Header>
          </FieldLegend>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input {...register('username')} />
          </Field>
          <Field>
            <FieldLabel htmlFor="text">Text</FieldLabel>
            <Input {...register('text')} />
          </Field>
        </FieldSet>
        <Field orientation="horizontal">
          <Button className="text-sm" size="lg" type="submit">
            Add comment
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
