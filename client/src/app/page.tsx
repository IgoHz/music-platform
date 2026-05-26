import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata/seo-utils';

export const metadata: Metadata = buildPageMetadata({
  title: 'Home',
  description:
    'Discover trending tracks, listen live, and explore new music in one place.',
  path: '/'
});

export default function HomePage() {
  return <div>Home page</div>;
}
