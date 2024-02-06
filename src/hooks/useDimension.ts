import { useLayoutEffect, useState } from 'react';

export const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    updateDimensions(); // Update dimensions initially

    window.addEventListener('resize', updateDimensions); // Add resize event listener

    return () => {
      window.removeEventListener('resize', updateDimensions); // Remove resize event listener on cleanup
    };
  }, [ref]);

  return dimensions;
};
