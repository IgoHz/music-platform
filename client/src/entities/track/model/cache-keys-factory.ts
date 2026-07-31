export const trackCacheKeys = {
  all: () => ['tracks'] as const,

  detail: (id: string) => [...trackCacheKeys.all(), id] as const
};
