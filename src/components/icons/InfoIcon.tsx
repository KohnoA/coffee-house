import { IconProps } from './types';

export default function InfoIcon({ width, height, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
      className={className ?? ''}
    >
      <g
        stroke="#403F3D"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#clip0_268_12877)"
      >
        <path d="M8 7.667V11M8 5.007l.007-.008M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"></path>
      </g>
      <defs>
        <clipPath id="clip0_268_12877">
          <path fill="#fff" d="M0 0H16V16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
