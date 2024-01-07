import { IconProps } from './types';

export default function RefreshIcon({ width, height, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      className={className ?? ''}
      stroke="#403F3D"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.888 13.5C21.164 18.311 17.013 22 12 22 6.477 22 2 17.523 2 12S6.477 2 12 2c4.1 0 7.625 2.468 9.168 6"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8h4.4a.6.6 0 00.6-.6V3"
      ></path>
    </svg>
  );
}
