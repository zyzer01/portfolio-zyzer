'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { PageWrapperProps } from '@/utils/interfaces';

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window !== 'undefined' ? window.location.pathname : ''}
        initial={{ opacity: 0, x: '100vw' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-100vw' }}
        transition={{ duration: 0.3 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
