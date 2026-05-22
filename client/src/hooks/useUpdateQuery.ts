import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';

export function useUpdateQuery() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateQuery(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return { updateQuery };
}
