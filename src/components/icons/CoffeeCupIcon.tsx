import { IconProps } from './types';

export default function CoffeeCupIcon({ width, height, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <g className={className} stroke="#403F3D">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.166 9.767v1.9a5.833 5.833 0 01-11.667 0v-1.9a.6.6 0 01.6-.6h10.467a.6.6 0 01.6.6zM10 7.5c0-.833.595-1.667 1.785-1.667v0a2.38 2.38 0 002.381-2.38v-.536M6.667 7.5v-.417a2.5 2.5 0 012.5-2.5v0c.92 0 1.667-.746 1.667-1.666V2.5"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.334 9.167h2.083a2.083 2.083 0 010 4.166h-1.25"
        ></path>
      </g>
    </svg>
  );
}
