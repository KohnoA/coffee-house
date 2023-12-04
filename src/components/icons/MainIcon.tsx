import { IconProps } from './types';

export default function MainIcon({ width, height, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        className={className}
        stroke="#403F3D"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          strokeWidth="2"
          d="M20.95 14.55l-6.39 6.39c-1.4 1.4-3.7 1.4-5.11 0l-6.39-6.39c-1.4-1.4-1.4-3.7 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39c1.4 1.41 1.4 3.71 0 5.11z"
        ></path>
        <path strokeWidth="1.5" d="M6.25 6.25l11.5 11.5"></path>
        <path strokeWidth="2" d="M17.75 6.25l-11.5 11.5"></path>
      </g>
    </svg>
  );
}
