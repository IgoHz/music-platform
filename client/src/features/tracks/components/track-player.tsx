'use client';

import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import TrackProgress from './track-player/track-progress';
import Volume from './track-player/volume';
import {
  playerStatusSelector,
  playerTrackDurationSelector,
  playerTrackProgressSelector,
  playerTrackSelector,
  playerVolumeSelector,
  setPlayerStatusSelector,
  setPlayerTrackDurationSelector,
  setPlayerTrackProgressSelector,
  setPlayerVolumeSelector,
  useTrackPlayerStore
} from '../store/track-player';
import { PlayerStatus } from '../store/track-player/store';
import { useEffect, useEffectEvent } from 'react';
import { assertValue } from '@/lib/assert';
import { formatStaticResourcePath } from '@/lib/static';
import ServerImage from '@/components/server-image';
import useAddListensMutation from '../hooks/useAddListensMutation';

let audio: HTMLAudioElement | undefined;

export default function TrackPlayer() {
  const playerTrack = useTrackPlayerStore(playerTrackSelector);
  const playerStatus = useTrackPlayerStore(playerStatusSelector);
  const playerTrackDuration = useTrackPlayerStore(playerTrackDurationSelector);
  const playerTrackProgress = useTrackPlayerStore(playerTrackProgressSelector);
  const playerVolume = useTrackPlayerStore(playerVolumeSelector);

  const setPlayerStatus = useTrackPlayerStore(setPlayerStatusSelector);
  const setPlayerTrackDuration = useTrackPlayerStore(
    setPlayerTrackDurationSelector
  );
  const setPlayerTrackProgress = useTrackPlayerStore(
    setPlayerTrackProgressSelector
  );
  const setPlayerVolume = useTrackPlayerStore(setPlayerVolumeSelector);

  const addListensMutation = useAddListensMutation(playerTrack?._id || '');

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    }
  }, []);

  const handleSetAudioEffectEvent = useEffectEvent(() => {
    if (!playerTrack) {
      return;
    }
    assertValue(audio, 'audio');
    audio.src = formatStaticResourcePath(playerTrack.audio);
    audio.volume = playerVolume / 100;
    audio.onloadedmetadata = () => {
      assertValue(audio, 'audio');
      setPlayerTrackDuration(audio.duration);
    };
    audio.ontimeupdate = () => {
      assertValue(audio, 'audio');
      setPlayerTrackProgress(audio.currentTime);
    };
  });
  useEffect(() => {
    handleSetAudioEffectEvent();
  }, [playerTrack]);

  const isPlaying = playerStatus === PlayerStatus.PLAY;

  useEffect(() => {
    if (!playerTrack) {
      return;
    }
    if (isPlaying) {
      audio?.play();
      return;
    }
    audio?.pause();
  }, [playerTrack, isPlaying]);

  const isTrackEnded =
    playerTrackProgress &&
    playerTrackDuration &&
    playerTrackProgress >= playerTrackDuration;

  const handleAddListensEffect = useEffectEvent(() => {
    addListensMutation.mutate();
  });
  useEffect(() => {
    if (isPlaying && isTrackEnded) {
      handleAddListensEffect();
    }
  }, [isPlaying, isTrackEnded]);

  const handleTrackEndEffect = useEffectEvent(() => {
    setPlayerStatus(PlayerStatus.PAUSE);
    handleTrackProgressChange([0]);
  });
  useEffect(() => {
    if (isPlaying && isTrackEnded) {
      handleTrackEndEffect();
    }
  }, [isPlaying, isTrackEnded]);

  if (!playerTrack) {
    return null;
  }

  function handlePlayPauseClick() {
    if (isPlaying) {
      setPlayerStatus(PlayerStatus.PAUSE);
      return;
    }
    setPlayerStatus(PlayerStatus.PLAY);
  }

  function handleTrackProgressChange(progressData: number[]) {
    const [progress] = progressData;

    assertValue(audio, 'audio');
    audio.currentTime = progress;
    setPlayerTrackProgress(progress);
  }

  function handleVolumeChange(volumeData: number[]) {
    const [volume] = volumeData;

    assertValue(audio, 'audio');
    audio.volume = volume / 100;
    setPlayerVolume(volume);
  }

  return (
    <footer className="sticky bottom-0 flex justify-between items-center gap-8 min-h-16 px-4 mt-2 bg-gray-50">
      <Button size="icon-xl" variant="ghost" onClick={handlePlayPauseClick}>
        <Icon iconName={isPlaying ? 'pause' : 'play'} className="size-10" />
      </Button>
      <ServerImage
        className="max-h-16"
        width={64}
        height={64}
        src={playerTrack.picture}
        alt={`${playerTrack.name} track image`}
      />
      <div className="flex flex-col min-w-max">
        <span className="text-base bold">{playerTrack.name}</span>
        <span className="text-sm">{playerTrack.artist}</span>
      </div>
      <TrackProgress
        duration={playerTrackDuration}
        progress={[playerTrackProgress]}
        onChange={handleTrackProgressChange}
      />
      <Volume volume={[playerVolume]} onChange={handleVolumeChange} />
    </footer>
  );
}
