// components/ImageWithHover.tsx

import { motion } from 'framer-motion';

const ImageWithHover = ({ src, alt, srcHover }) => {
  return (
    <motion.div className="hover-effect w-full relative overflow-hidden" style={{ height: '100%' }}>
      <img
        src={src}
        alt={alt}
        className="absolute top-0 left-0 w-full h-full transition-transform duration-300"
      />
      <motion.img
        src={srcHover}
        alt={alt}
        className="absolute top-full left-0 w-full h-full transition-transform duration-300"
        initial={{ translateY: '100%' }}
        whileHover={{ translateY: '0%' }}
      />
    </motion.div>
  );
};

export default ImageWithHover;
