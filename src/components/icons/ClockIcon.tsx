import { IconProps } from './types';

export default function ClockIcon({ width, height, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <g
        className={className}
        stroke="#E1D4C9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_217_1736)"
      >
        <path d="M10 5v5h5"></path>
        <path d="M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"></path>
      </g>
      <defs>
        <clipPath id="clip0_217_1736">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
