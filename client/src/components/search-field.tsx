import * as React from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

type SearchFieldProps = Omit<React.ComponentProps<'input'>, 'type'> & {
  wrapperClassName?: string;
  onClear?: () => void;
};

function SearchField({
  className,
  wrapperClassName,
  value,
  onChange,
  onClear,
  ...props
}: SearchFieldProps) {
  const hasValue = String(value ?? '').length > 0;

  return (
    <div
      data-slot="search-field"
      className={cn(
        'relative flex items-center border border-input bg-transparent transition-colors',
        'focus-within:border-ring focus-within:ring-1 focus-within:ring-ring/50',
        'dark:bg-input/30',
        wrapperClassName
      )}
    >
      {/* Search icon */}
      <Icon
        iconName="search"
        aria-hidden
        className="pointer-events-none absolute left-2.5 size-[0.9rem] text-muted-foreground"
      />

      <input
        type="search"
        value={value}
        onChange={onChange}
        data-slot="search-field-input"
        className={cn(
          'h-8 w-full min-w-0 bg-transparent py-1 pl-8 pr-8 text-sm outline-none',
          'placeholder:text-muted-foreground',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'md:text-sm',

          /* Hide native search clear button */
          '[&::-webkit-search-cancel-button]:appearance-none',
          '[&::-webkit-search-decoration]:appearance-none',
          '[&::-webkit-search-results-button]:appearance-none',
          '[&::-webkit-search-results-decoration]:appearance-none',

          className
        )}
        {...props}
      />

      {/* Custom clear button */}
      {hasValue && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={onClear}
          className={cn(
            'absolute right-2 flex size-4 items-center justify-center',
            'text-muted-foreground transition-colors',
            'hover:text-foreground',
            'focus-visible:outline-none'
          )}
        >
          <Icon iconName="close" className="size-3.5" />
        </button>
      )}
    </div>
  );
}

export { SearchField };
