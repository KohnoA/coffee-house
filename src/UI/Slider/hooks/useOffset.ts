import { useState, useCallback, useRef } from 'react';

const INITIAL_OFFSET_VALUE = 0;

export function useOffset() {
  const [offset, setOffset] = useState<number>(INITIAL_OFFSET_VALUE);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const offsetHanlder = useCallback((index: number) => {
    const containerWidth = containerRef.current?.offsetWidth;

    if (containerWidth) {
      setOffset(index * containerWidth);
    }
  }, []);

  return { containerRef, offset, offsetHanlder };
}