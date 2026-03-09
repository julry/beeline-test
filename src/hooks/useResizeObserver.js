import { useEffect, useRef } from 'react';

export function useResizeObserver(ref, options = {}) {
  const { onResize, box = 'content-box' } = options;

  const observerRef = useRef(null);

  useEffect(() => {
    const element = ref?.current;
    if (!element) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new ResizeObserver((entries) => {
      if (onResize) {
        onResize(entries);
      }
    });

    observerRef.current = observer;
    observer.observe(element, { box });


    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [ref, onResize, box]);
}
