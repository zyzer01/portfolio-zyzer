'use client';
import { useRef, useEffect } from 'react';
import lubesurgeons1 from '/public/images/lubesurgeons.png';
import lubesurgeons2 from '/public/images/cloudnetvox.png';
// import cloudnetvox1 from '/public/images/netvox.png';
// import cloudnetvox2 from '/public/images/dfgdg.png';
// import netvox1 from '/public/images/fddgdfg.png';
// import netvox2 from '/public/images/fgdgdgdg.png';
import distortionImage from '/public/myDistorsionImage.webp';
import DistortionImage from './DistortionImage';

const hoverEffect = typeof window !== `undefined` ? require('hover-effect').default : null;

const Projects = () => {
  // Array.from(document.querySelectorAll('.project-card__middle')).forEach((el: any) => {
  //   const imgs: any = Array.from(el.querySelectorAll('img'));
  //   useEffect(() => {
  //     new hoverEffect({
  //       parent: el,
  //       intensity: 0.2,
  //       speedIn: el.dataset.speedin || undefined,
  //       speedOut: el.dataset.speedout || undefined,
  //       easing: el.dataset.easing || undefined,
  //       hover: el.dataset.hover || undefined,
  //       image1: imgs[0].getAttribute('src'),
  //       image2: imgs[1].getAttribute('src'),
  //       displacementImage: el.dataset.displacement,
  //     });
  //   });
  // });

  useEffect(() => {
    const hoverEffects = new hoverEffect({
      parent: document.querySelector('.hover-effect'),
      image1: lubesurgeons1,
      image2: lubesurgeons2,
      displacementImage: '/images/myDistorsionImage.webp',
    });
  }, []);

  return (
    <div>
      <div className="mb-14 border-b pb-6 border-gray-700 border-dotted">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="hover-effect w-full h-100">
          <img src="/images/lubesurgeons.png" alt="" />
        </div>
        <div>
          <h2>Lubesurgeons</h2>
          <p className="my-3">
            Lubesurgeons is a platform that provides convenience with its on-demand automobile
            repair service. You can get swift and expert car care services delivered to your
            location. Enjoy transparent pricing, skilled technicians, and a seamless user
            experience, all at your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
