import { TrackCreator } from '@/features/tracks';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata/seo-utils';

export const metadata: Metadata = buildPageMetadata({
  title: 'Create Track',
  description:
    'Use the track creator to upload, describe, and publish your own music content.',
  path: '/tracks/create'
});

export default function CreateTrackPage() {
  return <TrackCreator />;
}
