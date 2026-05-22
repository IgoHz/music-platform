import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex items-center gap-0.5', className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<typeof Button>;

function PaginationButton({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) {
  return (
    <Button
      variant={isActive ? 'outline' : 'ghost'}
      size={size}
      className={cn(className)}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  text = 'Previous',
  ...props
}: React.ComponentProps<typeof PaginationButton> & { text?: string }) {
  return (
    <PaginationButton
      aria-label="Go to previous page"
      size="default"
      className={cn('pl-1.5!', className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        <Icon
          iconName="chevronLeft"
          data-icon="inline-start"
          className="size-4"
        />
        <span className="hidden sm:block">{text}</span>
      </div>
    </PaginationButton>
  );
}

function PaginationNext({
  className,
  text = 'Next',
  ...props
}: React.ComponentProps<typeof PaginationButton> & { text?: string }) {
  return (
    <PaginationButton
      aria-label="Go to next page"
      size="default"
      className={cn('pr-1.5!', className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className="hidden sm:block">{text}</span>
        <Icon
          iconName="chevronRight"
          data-icon="inline-end"
          className="size-4"
        />
      </div>
    </PaginationButton>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-8 items-center justify-center [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <Icon iconName="ellipsis" className="size-4" />
        <span className="sr-only">More pages</span>
      </div>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious
};
