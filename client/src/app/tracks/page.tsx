import { Tracks } from '@/features/tracks';

interface Props {
  searchParams: Promise<{ query?: string }>;
}

export default async function TracksPage({ searchParams }: Props) {
  const { query } = await searchParams;
  return <Tracks query={query} />;
}
