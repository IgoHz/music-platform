'use client';

import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet
} from '@/components/ui/field';
import Header from '@/components/ui/header';
import { Input } from '@/components/ui/input';
import useCreateCommentMutation from '@/features/tracks/hooks/useCreateCommentMutation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  username: z.string().min(2, 'Name must be at least 2 characters!'),
  text: z.string().min(4, 'Comment must be at least 4 characters long!')
});

type FormData = z.output<typeof formSchema>;

interface Props {
  id: string;
}

export default function CreateCommentForm({ id }: Props) {
  const { register, formState, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });
  const { errors } = formState;

  const createCommentMutation = useCreateCommentMutation(id);

  async function handleSubmitCallback(formData: FormData) {
    await createCommentMutation.mutateAsync({
      ...formData,
      trackId: id
    });
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
            <FieldError>{errors.username?.message}</FieldError>
          </Field>
          <Field>
            <FieldLabel htmlFor="text">Text</FieldLabel>
            <Input {...register('text')} />
            <FieldError>{errors.text?.message}</FieldError>
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
