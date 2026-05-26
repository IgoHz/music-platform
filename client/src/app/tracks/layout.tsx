import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata/seo-utils';

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = buildPageMetadata({
  title: 'Tracks',
  description:
    'Explore tracks, create new content, and manage music assets across the platform.',
  path: '/tracks'
});

export default function TracksLayout({ children }: Props) {
  return <main className="w-6/10 mx-auto">{children}</main>;
}
