import { TrackDetails } from '@/features/track-details';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/shared/lib/metadata/seo-utils';
import { getTrackById } from '@/entities/track';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const track = await getTrackById(id);
    const trackDescription =
      track.text?.trim() ||
      `Listen to ${track.artist} — ${track.name} on Music Platform.`;

    return buildPageMetadata({
      title: track.name,
      description: trackDescription,
      path: `/tracks/details/${id}`,
      openGraph: {
        type: 'music.song'
      }
    });
  } catch {
    return buildPageMetadata({
      title: 'Track Details',
      description:
        'Explore detailed information about a music track and listen to it directly on Music Platform.',
      path: `/tracks/details/${id}`
    });
  }
}

export default async function TrackDetailsPage({ params }: Props) {
  const { id } = await params;

  return <TrackDetails id={id} type="page" />;
}
