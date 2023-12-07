import { IconProps } from './types';

export default function ArrowRight({ width, height, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className={className}
      viewBox="0 0 20 20"
    >
      <path
        stroke="#403F3D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 10h10.417m0 0l-5-5m5 5l-5 5"
      ></path>
    </svg>
  );
}
