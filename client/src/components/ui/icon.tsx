import { JSX, memo } from 'react';

const iconStrategies = {
  play: playStrategy,
  pause: pauseStrategy,
  trash: trashStrategy
} as const;

type IconName = keyof typeof iconStrategies;

type Props = Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> & {
  iconName: IconName;
};

function Icon(props: Props): JSX.Element {
  const { iconName, ...rest } = props;

  return (
    <svg
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="text-base"
      aria-hidden
      {...rest}
    >
      {iconStrategies[iconName]()}
    </svg>
  );
}

/**
 * Minimal rounded "Play" icon
 * Inspired by Shadcn/Lucide proportions
 */
function playStrategy() {
  return (
    <path d="M5 3.8C5 3.15 5.72 2.76 6.26 3.12L11.6 6.82C12.08 7.15 12.08 7.85 11.6 8.18L6.26 11.88C5.72 12.24 5 11.85 5 11.2V3.8Z" />
  );
}

/**
 * Clean rounded "Pause" icon
 */
function pauseStrategy() {
  return (
    <>
      <rect x="4" y="3" width="3" height="10" rx="1.2" />
      <rect x="9" y="3" width="3" height="10" rx="1.2" />
    </>
  );
}

function trashStrategy() {
  return (
    <>
      {/* Lid */}
      <rect x="4" y="3" width="8" height="1.5" rx="0.75" />

      {/* Handle */}
      <rect x="6" y="2" width="4" height="1.25" rx="0.625" />

      {/* Bin body */}
      <path d="M5 5H11L10.4 12.2C10.35 12.68 9.95 13 9.47 13H6.53C6.05 13 5.65 12.68 5.6 12.2L5 5Z" />

      {/* Inner lines */}
      <rect x="6.5" y="6.5" width="1" height="4.5" rx="0.5" />
      <rect x="8.5" y="6.5" width="1" height="4.5" rx="0.5" />
    </>
  );
}

export default memo(Icon);
