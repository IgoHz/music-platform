'use client';

import { Button } from '@/components/ui/button';
import { Track } from '../../../types';
import Icon from '@/components/ui/icon';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/ui/header';
import {
  playerStatusSelector,
  playerTrackSelector,
  setPlayerStatusSelector,
  setPlayerTrackSelector,
  useTrackPlayerStore
} from '@/features/tracks/store/track-player';
import { PlayerStatus } from '@/features/tracks/store/track-player/store';
import { formatStaticResourcePath } from '@/lib/static';
import useDeleteTrackByIdMutation from '../../../hooks/useDeleteTrackByIdMutation';

interface Props {
  track: Track;
}

export default function TrackListItem({ track }: Props) {
  const playerTrack = useTrackPlayerStore(playerTrackSelector);
  const playerStatus = useTrackPlayerStore(playerStatusSelector);

  const setPlayerTrack = useTrackPlayerStore(setPlayerTrackSelector);
  const setPlayerStatus = useTrackPlayerStore(setPlayerStatusSelector);

  const isActiveTrack = playerTrack?._id === track._id;
  const isPlaying = playerStatus === PlayerStatus.PLAY;
  const isActiveTrackPlaying = isActiveTrack && isPlaying;

  function handlePlayPauseClick() {
    if (!isActiveTrack) {
      setPlayerTrack(track);
    }

    if (playerStatus === PlayerStatus.PAUSE) {
      setPlayerStatus(PlayerStatus.PLAY);
    } else if (isActiveTrackPlaying) {
      setPlayerStatus(PlayerStatus.PAUSE);
    }
  }

  const deleteTrackMutation = useDeleteTrackByIdMutation();

  function handleDeleteTrackClick() {
    deleteTrackMutation.mutate(track._id);
  }

  return (
    <li className="flex justify-between not-first:mt-4">
      <div className="flex justify-start items-center gap-4">
        <Button size="icon-xl" variant="ghost" onClick={handlePlayPauseClick}>
          <Icon
            iconName={isActiveTrackPlaying ? 'pause' : 'play'}
            className="size-10"
          />
        </Button>
        <Image
          className="bg-gray-50"
          width="96"
          height="96"
          src={formatStaticResourcePath(track.picture)}
          alt={`${track.name} track image`}
        />
        <div className="flex flex-col">
          <Header type="h2">{track.name}</Header>
          <span className="text-base">{track.artist}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button size="icon" variant="ghost">
          <Link href={`/tracks/${track._id}`}>
            <Icon iconName="info" className="size-6" />
          </Link>
        </Button>
        <Button size="icon" variant="ghost" onClick={handleDeleteTrackClick}>
          <Icon iconName="trash" className="size-6" />
        </Button>
      </div>
    </li>
  );
}
