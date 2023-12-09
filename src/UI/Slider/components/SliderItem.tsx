import { ReactNode } from 'react';

interface SliderItemProps {
  children: ReactNode;
}

export default function SliderItem({ children }: SliderItemProps) {
  return <div className='min-w-full flex justify-center'>{children}</div>;
}
