'use client';

import { KeyboardEvent, memo, useEffect, useState } from 'react';
import { getSecondsFromMilliseconds } from '../helpers';

interface ToggleBarProps {
  count: number;
  activeSlideIndex: number;
  changeSlideHandler: (newSlideIndex: number) => void;
}

const SLIDE_TIME = 5000;

function ToggleBar({
  count,
  activeSlideIndex,
  changeSlideHandler,
}: ToggleBarProps) {
  const [canStartTransition, setCanStartTransition] = useState<boolean>(false);

  const keydownHanler = (
    event: KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.code === 'Enter') changeSlideHandler(index);
  };

  useEffect(() => {
    const timeoutId = setTimeout(
      () => changeSlideHandler(activeSlideIndex + 1),
      SLIDE_TIME
    );

    return () => clearTimeout(timeoutId);
  }, [activeSlideIndex, changeSlideHandler]);

  useEffect(() => {
    if (canStartTransition) return;

    setCanStartTransition(true);
  }, [canStartTransition]);

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-[12px] pb-[2px]">
      {new Array(count).fill(count).map((_, index) => (
        <div
          key={index}
          tabIndex={0}
          role="button"
          onClick={() => changeSlideHandler(index)}
          onKeyDown={(event) => keydownHanler(event, index)}
          className={`w-[40px] h-[4px] bg-borderLight rounded-2xl cursor-pointer overflow-hidden transition-colors hover:bg-[#b0a69e] ${
            activeSlideIndex === index ? 'pointer-events-none' : ''
          }`}
        >
          {activeSlideIndex === index && canStartTransition && (
            <div
              className={`min-h-full bg-borderDark rounded-2xl`}
              style={{
                animation: `filling ${getSecondsFromMilliseconds(
                  SLIDE_TIME
                )}s linear infinite`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default memo(ToggleBar);
