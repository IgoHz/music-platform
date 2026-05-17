import { Slider } from '@/components/ui/slider';
import { formatSecondsToTime } from '@/lib/time';

interface Props {
  length: number;
  progress: number[];
  onChange: (value: number[]) => void;
}

export default function TrackProgress({ length, progress, onChange }: Props) {
  const formattedProgress = formatSecondsToTime(progress[0]);
  const formattedLength = formatSecondsToTime(length);

  return (
    <div className="flex gap-4">
      <Slider
        className="min-w-48"
        min={0}
        max={length}
        value={progress}
        onValueChange={onChange}
      />
      <span>
        {formattedProgress}&nbsp;/&nbsp;{formattedLength}
      </span>
    </div>
  );
}
