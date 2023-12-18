import { ReactNode, memo } from 'react';

interface SliderItemProps {
  children: ReactNode;
  className?: string;
}

function SliderItem({ children, className }: SliderItemProps) {
  return <div className={`min-w-full ${className ?? ''}`}>{children}</div>;
}

export default memo(SliderItem);
