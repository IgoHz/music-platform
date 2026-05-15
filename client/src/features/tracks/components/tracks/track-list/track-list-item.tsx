'use client';

import { Button } from '@/components/ui/button';
import { Track } from '../../../types';
import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  track: Track;
}

export default function TrackListItem({ track }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayPauseClick() {
    setIsPlaying(!isPlaying);
  }

  return (
    <li className="flex justify-between not-first:mt-4">
      <div className="flex justify-start items-center gap-4">
        <Button size="icon-xl" variant="ghost" onClick={handlePlayPauseClick}>
          <Icon iconName={isPlaying ? 'pause' : 'play'} className="size-10" />
        </Button>
        <Image
          className="bg-gray-50"
          width="96"
          height="96"
          src={track.picture}
          alt={`${track.name} track image`}
        />
        <div className="flex flex-col">
          <span className="text-base">{track.name}</span>
          <span className="text-sm">{track.artist}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button size="icon" variant="ghost">
          <Link href={`/tracks/${track._id}`}>
            <Icon iconName="info" className="size-6" />
          </Link>
        </Button>
        <Button size="icon" variant="ghost">
          <Icon iconName="trash" className="size-6" />
        </Button>
      </div>
    </li>
  );
}
