'use client';
import React, { useEffect, useState } from 'react';
import { PageWrapperProps } from '@/utils/interfaces';

const LoadingScreen: React.FC<PageWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <img src="/images/zyzer.gif" alt="svg" />
      </div>
    </div>
  ) : (
    children
  );
};

export default LoadingScreen;
