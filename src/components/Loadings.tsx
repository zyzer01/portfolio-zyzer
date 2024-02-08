'use client';
import { ImSpinner9 } from 'react-icons/im';
import { cubicBezier, motion } from 'framer-motion';

const Loadings = () => {
  // const loaderVariants = {
  //   hidden: {

  //   }
  // }

  const transition: { duration: number; ease: any } = {
    duration: 1.4,
    ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
    // ease: [0.6, 0.01, -0.05, 0.9],
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center h-screen"
      animate={{ top: '-100vh', transition: { ...transition, delay: 3 } }}>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { ...transition } }}>
        <img src="/images/zyzer.gif" alt="svg" />
      </motion.div>
      <div></div>
      {/* <p className="text-2xl ">
        <ImSpinner9 className="animate-bounce" />
      </p> */}
    </motion.div>
  );
};

export default Loadings;
