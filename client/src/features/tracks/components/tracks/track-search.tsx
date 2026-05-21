'use client';

import { SearchField } from '@/components/search-field';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useEffectEvent, useRef, useState } from 'react';

export default function TrackSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') ?? ''
  );

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const updateQueryEffectEvent = useEffectEvent(() => {
    updateQuery('query', searchQuery);
  });
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      updateQueryEffectEvent();
    }, 500);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [searchQuery]);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  function handleClear() {
    setSearchQuery('');
  }

  return (
    <SearchField
      placeholder="Search tracks..."
      wrapperClassName="w-64"
      value={searchQuery}
      onChange={handleSearchChange}
      onClear={handleClear}
    />
  );
}
