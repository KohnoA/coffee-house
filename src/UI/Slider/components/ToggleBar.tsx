import { KeyboardEvent, memo, useEffect } from 'react';
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

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-[12px] pb-[2px]">
      {new Array(count).fill(count).map((_, index) => (
        <div
          key={index}
          tabIndex={0}
          role="button"
          onClick={() => changeSlideHandler(index)}
          onKeyDown={(event) => keydownHanler(event, index)}
          className={`w-[40px] h-[4px] bg-borderLight rounded-2xl transition-colors cursor-pointer overflow-hidden ${
            activeSlideIndex === index ? 'pointer-events-none' : ''
          }`}
        >
          {activeSlideIndex === index && (
            <div
              className={`animate-[filling_${getSecondsFromMilliseconds(
                SLIDE_TIME
              )}s_linear_infinite] min-h-full bg-borderDark rounded-2xl`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default memo(ToggleBar);
