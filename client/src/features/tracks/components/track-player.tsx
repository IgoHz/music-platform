'use client';

import { Button } from '@/components/ui/button';
import { Track } from '../types';
import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Image from 'next/image';
import TrackProgress from './track-player/track-progress';
import Volume from './track-player/volume';

const track: Track = {
  _id: 1,
  name: 'Track 1',
  artist: 'Artist 1',
  text: 'Text 1',
  listens: 0,
  picture: 'https://localhost:4000/',
  audio: 'audio',
  comments: []
};

export default function TrackPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState<Array<number>>([0]);
  const [volume, setVolume] = useState<Array<number>>([0]);

  function handlePlayPauseClick() {
    setIsPlaying(!isPlaying);
  }

  return (
    <footer className="sticky bottom-0 flex justify-start items-center gap-8 min-h-16 px-4 mt-2 bg-gray-50">
      <Button size="icon-xl" variant="ghost" onClick={handlePlayPauseClick}>
        <Icon iconName={isPlaying ? 'pause' : 'play'} className="size-10" />
      </Button>
      <Image
        className="max-h-16"
        width="64"
        height="64"
        src={track.picture}
        alt={`${track.name} track image`}
      />
      <div className="flex flex-col min-w-max">
        <span className="text-base bold">{track.artist}</span>
        <span className="text-sm">{track.artist}</span>
      </div>
      <TrackProgress
        length={100}
        progress={trackProgress}
        onChange={setTrackProgress}
      />
      <Volume volume={volume} onChange={setVolume} />
    </footer>
  );
}
