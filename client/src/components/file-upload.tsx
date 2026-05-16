'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import Icon from './ui/icon';

type FileUploadFieldProps = {
  value?: File | null;
  onChange: (file: File | null) => void;
  accept?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  description?: string;
  className?: string;
};

export function FileUploadField({
  value,
  onChange,
  accept,
  disabled,
  error,
  label = 'Upload file',
  description = 'Drag & drop or click to browse',
  className
}: FileUploadFieldProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = React.useState(false);

  const handleFile = (file?: File | null) => {
    if (!file) return;

    onChange(file);
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();

    onChange(null);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className={cn('space-y-3', className)}>
      {label && (
        <label className="font-mono text-base tracking-[-0.02em] text-zinc-900 dark:text-zinc-100">
          {label}
        </label>
      )}

      <div
        onClick={() => !disabled && inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();

          if (!disabled) {
            setDragging(true);
          }
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();

          setDragging(false);

          if (disabled) return;

          const file = e.dataTransfer.files?.[0];

          handleFile(file);
        }}
        className={cn(
          'group relative cursor-pointer border transition-colors duration-150',
          'bg-zinc-50 dark:bg-zinc-950',
          'border-zinc-300 dark:border-zinc-800',
          'hover:border-zinc-500 dark:hover:border-zinc-600',
          dragging &&
            'border-zinc-900 bg-zinc-100 dark:border-zinc-100 dark:bg-zinc-900',
          error && 'border-red-500',
          disabled && 'pointer-events-none opacity-50'
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          disabled={disabled}
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />

        {!value ? (
          <div className="flex min-h-46 flex-col items-center justify-center px-6 py-10 text-center">
            <div
              className={cn(
                'mb-5 flex h-12 w-12 items-center justify-center border',
                'border-zinc-300 dark:border-zinc-700',
                'bg-zinc-100 dark:bg-zinc-900',
                'transition-colors duration-150',
                dragging && 'border-zinc-900 dark:border-zinc-100'
              )}
            >
              <Icon
                iconName="upload"
                className={cn(
                  'h-5 w-5 text-zinc-700 dark:text-zinc-300',
                  dragging && 'text-zinc-950 dark:text-zinc-50'
                )}
              />
            </div>

            <p
              className={cn(
                'font-mono text-lg tracking-[-0.03em]',
                'text-zinc-900 dark:text-zinc-100'
              )}
            >
              {dragging ? 'Drop file here' : label}
            </p>

            <p
              className={cn(
                'mt-2 font-mono text-sm',
                'text-zinc-500 dark:text-zinc-500'
              )}
            >
              {description}
            </p>
          </div>
        ) : (
          <div
            className={cn(
              'flex items-center gap-4 px-4 py-4',
              'bg-zinc-100 dark:bg-zinc-900'
            )}
          >
            <div
              className={cn(
                'flex h-11 w-11 shrink-0 items-center justify-center border',
                'border-zinc-300 dark:border-zinc-700',
                'bg-zinc-50 dark:bg-zinc-950'
              )}
            >
              <Icon
                iconName="file"
                className="h-4.5 w-4.5 text-zinc-800 dark:text-zinc-200"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className={cn(
                  'truncate font-mono text-sm tracking-[-0.02em]',
                  'text-zinc-900 dark:text-zinc-100'
                )}
              >
                {value.name}
              </p>

              <p className={cn('mt-1 font-mono text-xs', 'text-zinc-500')}>
                {(value.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>

            <button
              type="button"
              onClick={removeFile}
              className={cn(
                'flex h-9 w-9 items-center justify-center border',
                'border-zinc-300 dark:border-zinc-700',
                'bg-zinc-50 dark:bg-zinc-950',
                'transition-colors duration-150',
                'hover:border-zinc-500 dark:hover:border-zinc-500'
              )}
            >
              <Icon
                iconName="close"
                className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300"
              />
            </button>
          </div>
        )}
      </div>

      {error && <p className="font-mono text-xs text-red-500">{error}</p>}
    </div>
  );
}
