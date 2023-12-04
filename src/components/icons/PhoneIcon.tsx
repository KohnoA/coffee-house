import { IconProps } from './types';

export default function PhoneIcon({ width, height, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        className={className}
        stroke="#E1D4C9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.098 12.252l-3.432.665c-2.318-1.164-3.75-2.5-4.583-4.584l.642-3.441-1.213-3.225H3.729c-1.127 0-2.014.933-1.828 2.045.398 2.373 1.471 6.327 4.349 9.205 3.023 3.023 7.316 4.415 9.888 5.012 1.161.27 2.195-.638 2.195-1.83v-2.615l-3.235-1.232z"
      ></path>
    </svg>
  );
}
