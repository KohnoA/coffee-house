import { IconProps } from './types';

export default function AppleIcon({ width, height, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 27 32"
    >
      <path
        className={className}
        fill="#403F3D"
        d="M22.058 16.83c-.037-3.998 3.358-5.943 3.513-6.033-1.923-2.733-4.903-3.107-5.95-3.137-2.502-.256-4.93 1.46-6.205 1.46-1.3 0-3.264-1.435-5.38-1.393-2.722.041-5.27 1.578-6.667 3.965C-1.514 16.56.636 23.711 3.4 27.645c1.381 1.926 2.996 4.077 5.11 4.002 2.067-.083 2.84-1.286 5.335-1.286 2.472 0 3.197 1.286 5.352 1.237 2.22-.034 3.616-1.935 4.95-3.879 1.597-2.208 2.238-4.383 2.263-4.495-.052-.017-4.31-1.601-4.351-6.393zM17.986 5.073C19.098 3.717 19.86 1.872 19.648 0c-1.61.07-3.622 1.085-4.782 2.412-1.025 1.168-1.941 3.084-1.704 4.885 1.807.131 3.664-.89 4.824-2.224z"
      ></path>
    </svg>
  );
}
