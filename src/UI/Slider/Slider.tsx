'use client';

import { Children, ReactNode, useEffect, useState, useCallback } from 'react';
import ToggleBar from './components/ToggleBar';
import MoveButtons from './components/MoveButtons';

import { slideIndexAndjustment } from './helpers';
import { useOffset } from './hooks';

interface SliderProps {
  className?: string;
  children: ReactNode;
}

const DEFAULT_SLIDE_INDEX = 0;

export default function Slider({ className, children }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(DEFAULT_SLIDE_INDEX);
  const { containerRef, offset, offsetHanlder } = useOffset();

  const changeSlideHandler = useCallback(
    (newSlideIndex: number) => {
      const maxSlidesIndex = Children.count(children) - 1;
      newSlideIndex = slideIndexAndjustment(newSlideIndex, 0, maxSlidesIndex);

      setCurrentSlide(newSlideIndex);
      offsetHanlder(newSlideIndex);
    },
    [children, offsetHanlder]
  );

  useEffect(() => {
    const offsetToCurrentSlide = () => offsetHanlder(currentSlide);

    window.addEventListener('resize', offsetToCurrentSlide);

    return () => window.removeEventListener('resize', offsetToCurrentSlide);
  }, [currentSlide, offsetHanlder]);

  return (
    <div
      className={`relative min-h-[300px] mb-[100px] pb-[40px] overflow-hidden ${
        className ?? ''
      }`}
    >
      <div
        ref={containerRef}
        style={{ transform: `translateX(-${offset}px)` }}
        className="flex transition-transform duration-300"
      >
        {children}
      </div>

      <MoveButtons
        activeSlideIndex={currentSlide}
        changeSlideHandler={changeSlideHandler}
      />

      <ToggleBar
        count={Children.count(children)}
        activeSlideIndex={currentSlide}
        changeSlideHandler={changeSlideHandler}
      />
    </div>
  );
}
