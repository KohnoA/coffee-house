'use client';

import ToggleBar from './components/ToggleBar';
import MoveButtons from './components/MoveButtons';
import {
  Children,
  ReactNode,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import {
  DEFAULT_SLIDE_INDEX,
  DEFAULT_TRANSLATE_VALUE,
  MODES_OF_MOVE_SLIDES,
} from './constants';

interface SliderProps {
  className?: string;
  children: ReactNode;
}

export default function Slider({ className, children }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(DEFAULT_SLIDE_INDEX);
  const [translate, setTranslate] = useState<number>(DEFAULT_TRANSLATE_VALUE);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const moveSlideHanlder = (mode: MODES_OF_MOVE_SLIDES) => {
    const countOfChildren = Children.count(children) - 1;

    switch (mode) {
      case MODES_OF_MOVE_SLIDES.RIGHT:
        setCurrentSlide((prev) => (prev < countOfChildren ? prev + 1 : 0));
        break;
      case MODES_OF_MOVE_SLIDES.LEFT:
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : countOfChildren));
        break;
    }
  };

  const translateHanlder = useCallback((value: number) => {
    setTranslate(value);
  }, []);

  useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth;

    if (containerWidth) {
      translateHanlder(currentSlide * containerWidth);
    }
  }, [currentSlide, translateHanlder]);

  return (
    <div
      className={`relative min-h-[300px] mb-[100px] px-[104px] pb-[40px] overflow-hidden ${
        className ? className : ''
      }`}
    >
      <div
        ref={containerRef}
        style={{ transform: `translateX(-${translate}px)` }}
        className="flex transition-transform duration-300"
      >
        {children}
      </div>

      <MoveButtons moveSlideHandler={moveSlideHanlder} />

      <ToggleBar
        count={Children.count(children)}
        activeSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
}
