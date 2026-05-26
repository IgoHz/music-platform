import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata/seo-utils';

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export const metadata: Metadata = buildPageMetadata({
  title: 'Track Details',
  description:
    'View track details, listen to previews, and explore related content.',
  path: '/tracks/details'
});

export default function TrackDetailsLayout({ children, modal }: Props) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
