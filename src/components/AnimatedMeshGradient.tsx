'use client';
// import { useEffect, useRef } from 'react';

// const AnimatedMeshGradient: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Get the dimensions of the canvas
//     const canvasWidth = canvas.width;
//     const canvasHeight = canvas.height;

//     // Calculate the center coordinates
//     const centerX = canvasWidth / 2;
//     const centerY = canvasHeight / 2;

//     // Calculate the radius to fill the canvas
//     const radius = Math.min(canvasWidth, canvasHeight) / 2;

//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);

//     const grd = ctx.createRadialGradient(
//       centerX - radius / 4,
//       centerY - radius / 4,
//       5,
//       centerX + radius / 4,
//       centerY + radius / 4,
//       radius
//     );
//     grd.addColorStop(0, '#ED1E79');
//     grd.addColorStop(1, '#662D8C');
//     ctx.fillStyle = grd;
//     ctx.fill();
//   }, []);

//   return (
//     <canvas
//       id="myCanvas"
//       width={500}
//       height={400}
//       style={{ border: '1px solid #d3d3d3' }}
//       ref={canvasRef}>
//       Your browser does not support the HTML canvas tag.
//     </canvas>
//   );
// };

// export default AnimatedMeshGradient;

import React, { useEffect, useRef } from 'react';

const AnimatedMeshGradient: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const radius = Math.min(canvasWidth, canvasHeight) / 2;

    ctx.beginPath();
    ctx.arc(canvasWidth / 2, canvasHeight / 2, radius, 0, 2 * Math.PI);

    const grd = ctx.createRadialGradient(
      canvasWidth / 2 - radius / 3,
      canvasHeight / 2,
      5,
      canvasWidth / 2,
      canvasHeight / 2,
      radius
    );
    grd.addColorStop(0, '#ED1E79');
    grd.addColorStop(1, '#662D8C');
    ctx.fillStyle = grd;
    ctx.fill();

    canvas.classList.add('animate-pulses');
  }, []);

  return (
    <canvas id="myCanvas" width={500} height={400} className="border border-shade" ref={canvasRef}>
      Your browser does not support the HTML canvas tag.
    </canvas>
  );
};

export default AnimatedMeshGradient;
