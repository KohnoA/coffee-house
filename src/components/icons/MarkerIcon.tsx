import { IconProps } from './types';

export default function MarkerIcon({ width, height, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <g className={className} stroke="#E1D4C9">
        <path
          strokeWidth="1.5"
          d="M16.667 8.333c0 3.682-6.666 10-6.666 10s-6.667-6.318-6.667-10a6.667 6.667 0 0113.333 0z"
        ></path>
        <path
          fill="#E1D4C9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10 9.167A.833.833 0 1010 7.5a.833.833 0 000 1.667z"
        ></path>
      </g>
    </svg>
  );
}
