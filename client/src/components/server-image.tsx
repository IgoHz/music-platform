import NextImage from 'next/image';
import { formatStaticResourcePath } from '@/lib/static';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ServerImage({
  src,
  alt,
  width,
  height,
  className
}: Props) {
  return (
    <NextImage
      className={`bg-gray-50 ${className ?? ''}`}
      width={width}
      height={height}
      src={formatStaticResourcePath(src)}
      alt={alt}
      unoptimized
    />
  );
}
