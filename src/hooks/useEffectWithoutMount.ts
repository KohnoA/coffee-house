import { useEffect, useRef } from 'react';

export function useEffectWithoutMount(callback: () => void, deps: unknown[]) {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      return callback();
    }

    isMounted.current = true;
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
