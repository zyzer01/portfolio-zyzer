'use client';
import { useEffect } from 'react';
const hoverEffect = typeof window !== `undefined` ? require('hover-effect').default : null;

interface DistortionImageProps {
  imgUrl: string;
  hoverImgUrl?: string;
}

// const DistortionImage: React.FC<DistortionImageProps> = ({ imgUrl, hoverImgUrl }) => {
//   useEffect(() => {
//     const hoverEffects = new hoverEffect({
//       parent: document.querySelector('.hover-effect'),
//       image1: imgUrl,
//       image2: hoverImgUrl || imgUrl,
//       displacementImage: '/images/myDistorsionImage.webp',
//     });
//   }, [imgUrl, hoverImgUrl]);

//   return (
//     <div className="hover-effect w-full h-100">
//       <img src={imgUrl} alt="" />
//     </div>
//   );
// };

export default DistortionImage;
