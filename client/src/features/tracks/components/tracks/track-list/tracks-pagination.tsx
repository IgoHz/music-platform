import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import { useUpdateQuery } from '@/hooks/useUpdateQuery';
import {
  DEFAULT_PAGE_SIZE,
  PAGE_RANGE
} from '@/features/tracks/constants/pagination';

interface Props {
  className?: string;
  pages: number;
  currentPage: number;
}

export default function TracksPagination({
  className,
  pages,
  currentPage
}: Props) {
  const { updateQuery } = useUpdateQuery();

  if (!pages) {
    return null;
  }

  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);
  const currentIndex = pagesArray.indexOf(currentPage);
  const visiblePages = pagesArray.slice(
    Math.max(0, currentIndex - PAGE_RANGE),
    Math.min(pagesArray.length, currentIndex + PAGE_RANGE + 1)
  );

  function handlePageChange(page: number) {
    updateQuery('offset', ((page - 1) * DEFAULT_PAGE_SIZE).toString());
  }

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>
        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationButton
              isActive={page === currentPage}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PaginationButton>
          </PaginationItem>
        ))}
        {visiblePages.length < pages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            disabled={currentPage === pages}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
