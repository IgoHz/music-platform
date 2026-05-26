import { TrackDetails } from '@/features/tracks';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata/seo-utils';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  return buildPageMetadata({
    title: 'Track Details',
    description:
      'Preview detailed information about this track in the modal view.',
    path: `/tracks/details/${id}`,
    robots: {
      index: false,
      follow: false
    }
  });
}

export default async function TrackDetailsModalPage({ params }: Props) {
  const { id } = await params;

  return <TrackDetails id={id} type="modal" />;
}
