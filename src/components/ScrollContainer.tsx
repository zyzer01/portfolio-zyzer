// components/ScrollContainer.tsx
import React, { useEffect, useRef } from 'react';
const LocomotiveScroll =
  typeof window !== `undefined` ? require('locomotive-scroll').default : null;

interface ScrollContainerProps {
  children: React.ReactNode;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 0.75,
      inertia: 0.5,
    });

    // Cleanup function
    return () => {
      scroll.destroy();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollContainer;
