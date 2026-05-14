'use client';

import { Button } from '@/components/ui/button';
import { Track } from '../../../types';
import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Image from 'next/image';

interface Props {
  track: Track;
}

export default function TrackListItem({ track }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayPauseClick() {
    setIsPlaying(!isPlaying);
  }

  return (
    <li className="flex justify-between items-center not-first:mt-2">
      <div className="flex justify-start items-center gap-4">
        <Button size="icon" onClick={handlePlayPauseClick}>
          <Icon iconName={isPlaying ? 'pause' : 'play'} />
        </Button>
        <Image
          className="max-h-16"
          width="64"
          height="64"
          src={track.picture}
          alt={`${track.name} track image`}
        />
        <div className="flex flex-col">
          <span className="text-sm">{track.name}</span>
          <span className="text-xs">{track.artist}</span>
        </div>
      </div>
      <Button size="icon" onClick={handlePlayPauseClick}>
        <Icon iconName="trash" />
      </Button>
    </li>
  );
}
