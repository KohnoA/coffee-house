'use client';

import Button from '@/UI/Button';
import ArrowRight from '@/components/icons/ArrowRight';
import { MODES_OF_MOVE_SLIDES } from '../constants';

interface MoveButtonsProps {
  moveSlideHandler: (mode: MODES_OF_MOVE_SLIDES) => void;
}

export default function MoveButtons({ moveSlideHandler }: MoveButtonsProps) {
  const moveSlideRight = () => moveSlideHandler(MODES_OF_MOVE_SLIDES.RIGHT);

  const moveSlideLeft = () => moveSlideHandler(MODES_OF_MOVE_SLIDES.LEFT);

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
