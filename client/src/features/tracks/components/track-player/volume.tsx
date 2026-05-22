import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';

interface Props {
  volume: number[];
  onChange: (value: number[]) => void;
}

const MAX_VOLUME = 100;

export default function Volume({ volume, onChange }: Props) {
  return (
    <div className="flex gap-4 justify-end">
      <Icon iconName="volume" className="size-6" />
      <Slider
        className="w-16"
        min={0}
        max={MAX_VOLUME}
        value={volume}
        onValueChange={onChange}
      />
      <span className="w-[9ch] text-end">
        {volume}&nbsp;/&nbsp;{MAX_VOLUME}
      </span>
    </div>
  );
}
