'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { PageWrapperProps } from '@/utils/interfaces';
import { useEffect, useState } from 'react';

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some async operation
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div>{children}</motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
