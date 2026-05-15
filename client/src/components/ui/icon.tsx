import { JSX, memo } from 'react';

const iconStrategies = {
  play: playStrategy,
  pause: pauseStrategy,
  trash: trashStrategy,
  info: infoStrategy
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
      aria-hidden
      {...rest}
    >
      {iconStrategies[iconName]()}
    </svg>
  );
}

function playStrategy() {
  return (
    <path d="M5 3.5V12.5L11.5 8L5 3.5Z" />
  );
}

function pauseStrategy() {
  return (
    <>
      <rect x="4" y="3.5" width="2.5" height="9" rx="0.4" />
      <rect x="9.5" y="3.5" width="2.5" height="9" rx="0.4" />
    </>
  );
}

function trashStrategy() {
  return (
    <>
      {/* Lid */}
      <rect x="4" y="3" width="8" height="1.25" rx="0.3" />

      {/* Handle */}
      <rect x="6.25" y="2" width="3.5" height="1" rx="0.25" />

      {/* Body */}
      <path d="M5 5H11L10.4 12.2C10.35 12.7 9.95 13 9.45 13H6.55C6.05 13 5.65 12.7 5.6 12.2L5 5Z" />

      {/* Inner separators */}
      <rect x="6.4" y="6.2" width="0.9" height="4.8" rx="0.2" />
      <rect x="8.7" y="6.2" width="0.9" height="4.8" rx="0.2" />
    </>
  );
}

function infoStrategy() {
  return (
    <>
      {/* Outer circle */}
      <circle
        cx="8"
        cy="8"
        r="5.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      {/* Dot */}
      <rect
        x="7.4"
        y="4.5"
        width="1.2"
        height="1.2"
        rx="0.15"
      />

      {/* Stem */}
      <rect
        x="7.4"
        y="6.4"
        width="1.2"
        height="4.2"
        rx="0.15"
      />
    </>
  );
}

export default memo(Icon);
