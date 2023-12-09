import { KeyboardEvent, useEffect } from 'react';
import { getSecondsFromMilliseconds } from '../helpers';

interface ToggleBarProps {
  count: number;
  activeSlide: number;
  setCurrentSlide: (index: number) => void;
}

const SLIDE_TIME = 5000;

export default function ToggleBar({
  count,
  activeSlide,
  setCurrentSlide,
}: ToggleBarProps) {
  const keydownHanler = (
    event: KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.code === 'Enter') setCurrentSlide(index);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newSlideIndex = activeSlide + 1;
      const maxSlideIndex = count - 1;

      setCurrentSlide(newSlideIndex > maxSlideIndex ? 0 : newSlideIndex);
    }, SLIDE_TIME);

    return () => clearTimeout(timeoutId);
  }, [activeSlide, count, setCurrentSlide]);

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-[12px] pb-[2px]">
      {new Array(count).fill(count).map((_, index) => (
        <div
          key={index}
          tabIndex={0}
          role="button"
          onClick={() => setCurrentSlide(index)}
          onKeyDown={(event) => keydownHanler(event, index)}
          className={`w-[40px] h-[4px] bg-borderLight rounded-2xl transition-colors cursor-pointer overflow-hidden ${
            activeSlide === index ? 'pointer-events-none' : ''
          }`}
        >
          {activeSlide === index && (
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
