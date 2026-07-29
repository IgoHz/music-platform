import type { Metadata } from 'next';

const SITE_NAME = 'Music Platform';
const SITE_DESCRIPTION =
  'Discover, listen to, and share music tracks from artists around the world.';
const SITE_KEYWORDS = [
  'music platform',
  'tracks',
  'music discovery',
  'listen to music',
  'artist profile'
];

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
}

function getCanonicalUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}

function getCommonMetadata(path: string): Metadata {
  const canonicalUrl = getCanonicalUrl(path);

  return {
    metadataBase: new URL(getSiteUrl()),
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    keywords: SITE_KEYWORDS,
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'en_US'
    },
    twitter: {
      card: 'summary'
    }
  };
}

interface PageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  robots?: Metadata['robots'];
  openGraph?: Metadata['openGraph'];
  twitter?: Metadata['twitter'];
}

/**
 * Composes a readable, structured title consistently across the application.
 * @param siteName The name of the website.
 * @param routeName The specific route part (e.g., 'Track Details').
 * @param pageContentTitle The title passed from the page dynamic data.
 * @returns The composed title string.
 */
export function composeTitle(
  siteName: string,
  routeName: string,
  pageContentTitle: string
): string {
  const primaryTitle = pageContentTitle || routeName || '';
  const displayTitle = primaryTitle
    ? `${primaryTitle} | ${siteName}`
    : siteName;
  return displayTitle.trim();
}

/**
 * Defines the base metadata for the entire application.
 * @param siteName The canonical name of the platform.
 * @param globalDescription The general description used site-wide.
 * @param path The canonical path for the current page.
 * @returns A Metadata object.
 */
export function getBaseMetadata(
  siteName: string,
  globalDescription: string,
  path = '/',
  overrides: Partial<Metadata> = {}
): Metadata {
  const commonMetadata = getCommonMetadata(path);

  return {
    ...commonMetadata,
    ...overrides,
    title: siteName,
    description: globalDescription,
    openGraph: {
      ...commonMetadata.openGraph,
      ...overrides.openGraph,
      title: siteName,
      description: globalDescription
    },
    twitter: {
      ...commonMetadata.twitter,
      ...overrides.twitter,
      title: siteName,
      description: globalDescription
    }
  };
}

export function buildPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = '/',
  robots,
  openGraph,
  twitter
}: PageMetadataOptions = {}): Metadata {
  const commonMetadata = getCommonMetadata(path);
  const resolvedTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return {
    ...commonMetadata,
    title: resolvedTitle,
    description,
    robots: robots ?? { index: true, follow: true },
    openGraph: {
      ...commonMetadata.openGraph,
      ...openGraph,
      title: resolvedTitle,
      description
    },
    twitter: {
      ...commonMetadata.twitter,
      ...twitter,
      title: resolvedTitle,
      description
    }
  };
}
