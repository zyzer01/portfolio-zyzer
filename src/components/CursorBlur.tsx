import React, { useEffect, useState } from 'react';

const CursorBlur: React.FC = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.pageX);
      setMouseY(event.pageY);
      document.documentElement.style.setProperty('--mouse-x', `${event.pageX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.pageY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="glow absolute w-80 h-80 rounded-full opacity-50 z-40"
        style={{
          pointerEvents: 'none',
        }}
      />
    </>
  );
};

export default CursorBlur;
