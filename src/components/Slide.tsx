import { motion } from 'framer-motion';

const SlideUpImage = () => {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-0 left-0 w-64 h-64 overflow-hidden">
      <img src="/images/lubesurgeons.png" alt="Slide Up Image" />
    </motion.div>
  );
};

export default SlideUpImage;
