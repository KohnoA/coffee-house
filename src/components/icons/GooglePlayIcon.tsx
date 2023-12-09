import { IconProps } from './types';

export default function GooglePlayIcon({
  width,
  height,
  className,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 31 34"
    >
      <path
        className={className}
        fill="#403F3D"
        d="M.756 2.203c-.363.37-.572.946-.572 1.692V30.5c0 .745.21 1.321.572 1.691l.09.081 15.29-14.902v-.352L.846 2.116l-.09.087zM23.078 22.34l-5.092-4.97v-.352l5.098-4.97.114.065 6.037 3.349c1.722.95 1.722 2.514 0 3.47l-6.037 3.343-.12.065zM22.273 23.2l-5.211-5.08-15.38 14.997c.572.586 1.505.657 2.566.07l18.025-9.986zM22.273 11.188L4.248 1.2c-1.061-.58-1.994-.51-2.566.077l15.38 14.99 5.211-5.08z"
      ></path>
    </svg>
  );
}
