export const trackCacheKeys = {
  all: () => ['tracks'] as const,

  detail: (id: string) => [...trackCacheKeys.all(), id] as const
};

export const trackCacheTags = {
  all: () => 'tracks' as const,

  detail: (id: string) => `${trackCacheTags.all()}:${id}` as const
};
