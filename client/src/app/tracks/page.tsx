import { Tracks } from '@/features/tracks';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata/seo-utils';

interface Props {
  searchParams: Promise<{ query?: string; offset?: string }>;
}

export const metadata: Metadata = buildPageMetadata({
  title: 'Tracks',
  description:
    'Browse the latest and most exciting music tracks from all genres and discover new favorites.',
  path: '/tracks'
});

export default async function TracksPage({ searchParams }: Props) {
  const { query, offset } = await searchParams;
  return <Tracks query={query} offset={offset} />;
}
