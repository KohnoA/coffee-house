'use client';

import Button from '@/UI/Button';
import ArrowRight from '@/components/icons/ArrowRight';
import { memo } from 'react';

interface MoveButtonsProps {
  activeSlideIndex: number;
  changeSlideHandler: (newSlideIndex: number) => void;
}

function MoveButtons({ changeSlideHandler, activeSlideIndex }: MoveButtonsProps) {
  const moveSlideRight = () => changeSlideHandler(activeSlideIndex + 1);

  const moveSlideLeft = () => changeSlideHandler(activeSlideIndex - 1);

  return (
    <>
      <Button
        className="group absolute top-1/2 -translate-y-[50%] left-1 !py-[18px] !px-[18px]"
        onClick={moveSlideLeft}
      >
        <ArrowRight
          className="transition-all rotate-180 group-hover:stroke-textLight"
          width={24}
          height={24}
        />
      </Button>
      <Button
        className="group absolute top-1/2 -translate-y-[50%] right-1 !py-[18px] !px-[18px]"
        onClick={moveSlideRight}
      >
        <ArrowRight
          className="transition-all group-hover:stroke-textLight"
          width={24}
          height={24}
        />
      </Button>
    </>
  );
}

export default memo(MoveButtons);
