import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiBatteryCharging, FiWifi } from 'react-icons/fi';
import { useMemo } from 'react';
import { PhoneProps } from '@/utils/interfaces';

const FloatingPhone: React.FC<PhoneProps> = ({ imageSrc, bgColor, hasTopBanner }) => {
  const colorClass = useMemo(() => {
    switch (bgColor) {
      case 'yellow':
        return 'bg-lubesurgeons';
      case 'blue':
        return 'bg-cloudnetvox';
      case 'purple':
        return 'bg-cohost';
      default:
        return '';
    }
  }, [bgColor]);

  return (
    <div
      style={{
        transformStyle: 'preserve-3d',
        transform: 'rotateY(-30deg) rotateX(15deg)',
      }}
      className={`rounded-[24px] ${colorClass}`}>
      <motion.div
        initial={{
          transform: 'translateZ(8px) translateY(-2px)',
        }}
        whileInView={{
          transform: 'translateZ(32px) translateY(-8px)',
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2,
          ease: 'easeInOut',
        }}
        className="relative h-88 w-48 md:h-96 md:w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]">
        <HeaderBar />
        <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
          <Image src={imageSrc} alt={imageSrc} width={150} height={50} />

          <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-xs font-medium text-blue-900 backdrop-blur">
            Get Started
          </button>

          {hasTopBanner && (
            <div className={`absolute -left-32 -top-32 h-64 w-64 rounded-full ${colorClass}`} />
          )}
          <div
            className={`absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full ${colorClass}`}
          />
        </div>
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

export default FloatingPhone;

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { FiBatteryCharging, FiWifi } from 'react-icons/fi';
// import { ColorVariants, PhoneProps } from '@/utils/interfaces';

// const FloatingPhone: React.FC<PhoneProps> = ({ imageSrc, bgColor, hasTopBanner }) => {
//   const colorVariants: ColorVariants = {
//     yellow: 'bg-lubesurgeons',
//     blue: 'bg-cloudnetvox',
//     purple: 'bg-cohost',
//   };

//   return (
//     <div
//       style={{
//         transformStyle: 'preserve-3d',
//         transform: 'rotateY(-30deg) rotateX(15deg)',
//       }}
//       className={`rounded-[24px] ${colorVariants[bgColor]}`}>
//       <motion.div
//         initial={{
//           transform: 'translateZ(8px) translateY(-2px)',
//         }}
//         whileInView={{
//           transform: 'translateZ(32px) translateY(-8px)',
//         }}
//         transition={{
//           repeat: Infinity,
//           repeatType: 'mirror',
//           duration: 2,
//           ease: 'easeInOut',
//         }}
//         className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]">
//         <HeaderBar />
//         <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
//           <Image src={imageSrc} alt={imageSrc} width={150} height={50} />

//           <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-xs font-medium text-blue-900 backdrop-blur">
//             Get Started
//           </button>

//           {hasTopBanner && (
//             <div
//               className={`absolute -left-32 -top-32 h-64 w-64 rounded-full ${colorVariants[bgColor]}`}
//             />
//           )}
//           <div
//             className={`absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full ${colorVariants[bgColor]}`}
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const HeaderBar = () => {
//   return (
//     <>
//       <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
//       <div className="absolute right-3 top-2 z-10 flex gap-2">
//         <FiWifi className="text-neutral-600" />
//         <FiBatteryCharging className="text-neutral-600" />
//       </div>
//     </>
//   );
// };

// export default FloatingPhone;
