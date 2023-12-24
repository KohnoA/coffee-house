import { useEffect, useRef } from 'react';

export function useEffectWithoutMount(callback: () => void, deps: unknown[]): void {
  const isMount = useRef(true);

  useEffect(() => {
    if (!isMount.current) {
      callback();
    } else {
      isMount.current = false;
    }
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}