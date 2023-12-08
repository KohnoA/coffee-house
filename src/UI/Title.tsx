import { ReactNode } from 'react';

type HeadingLevelType = 1 | 2 | 3 | 4 | 5;
type HeadingSize = 1 | 2 | 3;

interface TitleProps {
  children: ReactNode;
  className?: string;
  level?: HeadingLevelType;
  size?: HeadingSize;
  accent?: boolean;
}

const DEFAULT_HEADING_LVL = 1;
const DEFAULT_SIZE = 1;

export default function Title({
  children,
  className,
  accent = false,
  size = DEFAULT_SIZE,
  level = DEFAULT_HEADING_LVL,
}: TitleProps) {
  const TitleElement = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <TitleElement
      className={`heading-${size} mb-[40px] ${
        accent ? 'italic' : ''
      } ${className}`}
    >
      {children}
    </TitleElement>
  );
}
