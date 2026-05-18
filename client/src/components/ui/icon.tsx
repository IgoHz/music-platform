import { JSX, memo } from 'react';

const iconStrategies = {
  play: playStrategy,
  pause: pauseStrategy,
  trash: trashStrategy,
  info: infoStrategy,
  upload: uploadStrategy,
  file: fileStrategy,
  close: closeStrategy,
  volume: volumeStrategy
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
  return <path d="M5 3.5V12.5L11.5 8L5 3.5Z" />;
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
      <rect x="7.4" y="4.5" width="1.2" height="1.2" rx="0.15" />

      {/* Stem */}
      <rect x="7.4" y="6.4" width="1.2" height="4.2" rx="0.15" />
    </>
  );
}

function uploadStrategy() {
  return (
    <>
      {/* Arrow stem */}
      <rect x="7.15" y="3.2" width="1.7" height="6.4" rx="0.35" />

      {/* Arrow head */}
      <path d="M8 2L4.9 5.1L6.05 6.25L8 4.3L9.95 6.25L11.1 5.1L8 2Z" />

      {/* Bottom tray */}
      <path d="M3.2 10.2H4.9V11.5C4.9 11.72 5.08 11.9 5.3 11.9H10.7C10.92 11.9 11.1 11.72 11.1 11.5V10.2H12.8V11.9C12.8 12.5 12.3 13 11.7 13H4.3C3.7 13 3.2 12.5 3.2 11.9V10.2Z" />
    </>
  );
}

function fileStrategy() {
  return (
    <>
      {/* Main file */}
      <path d="M4.5 2.5H8.9L11.5 5.1V12.2C11.5 12.64 11.14 13 10.7 13H5.3C4.86 13 4.5 12.64 4.5 12.2V2.5Z" />

      {/* Folded corner */}
      <path
        d="M8.9 2.5V4.5C8.9 4.83 9.17 5.1 9.5 5.1H11.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Inner lines */}
      <rect x="6" y="7" width="4" height="0.9" rx="0.2" />
      <rect x="6" y="9" width="3.1" height="0.9" rx="0.2" />
    </>
  );
}

function closeStrategy() {
  return (
    <>
      <path d="M5.15 4L4 5.15L6.85 8L4 10.85L5.15 12L8 9.15L10.85 12L12 10.85L9.15 8L12 5.15L10.85 4L8 6.85L5.15 4Z" />
    </>
  );
}

function volumeStrategy() {
  return (
    <>
      {/* Speaker body */}
      <path d="M3 6.2H5.2L8.2 3.8V12.2L5.2 9.8H3V6.2Z" />

      {/* Sound wave */}
      <path
        d="M10 6C10.8 6.5 11.2 7.2 11.2 8C11.2 8.8 10.8 9.5 10 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />

      {/* Outer sound wave */}
      <path
        d="M11.7 4.8C13 5.7 13.7 6.8 13.7 8C13.7 9.2 13 10.3 11.7 11.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </>
  );
}

export default memo(Icon);
