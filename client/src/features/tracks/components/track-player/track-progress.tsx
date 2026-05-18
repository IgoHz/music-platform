import { Slider } from '@/components/ui/slider';
import { formatSecondsToTime } from '@/lib/time';

interface Props {
  duration: number;
  progress: number[];
  onChange: (value: number[]) => void;
}

export default function TrackProgress({ duration, progress, onChange }: Props) {
  const formattedProgress = formatSecondsToTime(progress[0]);
  const formattedLength = formatSecondsToTime(duration);

  return (
    <div className="flex gap-4">
      <Slider
        className="min-w-48"
        min={0}
        max={duration}
        value={progress}
        onValueChange={onChange}
      />
      <span>
        {formattedProgress}&nbsp;/&nbsp;{formattedLength}
      </span>
    </div>
  );
}
