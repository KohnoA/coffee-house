import { IconProps } from './types';

export default function InstagramIcon({ width, height, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g className={className} stroke="#E1D4C9">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16a4 4 0 100-8 4 4 0 000 8z"
        ></path>
        <path
          d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.5 6.51l.01-.011"
        ></path>
      </g>
    </svg>
  );
}
