import { useEffect, useRef, useState } from "react";

export default function useElementHeight<T extends HTMLElement>(
  defaultHeight = 0
) {
  const ref = useRef<T | null>(null);
  const heightRef = useRef(defaultHeight); // 💡 текущая высота
  const [height, setHeight] = useState(defaultHeight);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new ResizeObserver(([entry]) => {
      const newHeight = entry.borderBoxSize?.[0]?.blockSize || entry.contentRect.height;

      if (newHeight !== heightRef.current) {
        heightRef.current = newHeight;
        setHeight(newHeight);
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, height };
}