'use client';

import { SearchField } from '@/components/search-field';
import { useSearchParams } from 'next/navigation';
import { useEffect, useEffectEvent, useRef, useState } from 'react';
import { useUpdateQuery } from '@/hooks/useUpdateQuery';

export default function TrackSearch() {
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') ?? ''
  );

  const { updateQuery } = useUpdateQuery();

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
