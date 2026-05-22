import { Tracks } from '@/features/tracks';

interface Props {
  searchParams: Promise<{ query?: string; offset?: string }>;
}

export default async function TracksPage({ searchParams }: Props) {
  const { query, offset } = await searchParams;
  return <Tracks query={query} offset={offset} />;
}
