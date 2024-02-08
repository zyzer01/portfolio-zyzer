'use client';
import React, { useEffect, useState } from 'react';
import { PageWrapperProps } from '@/utils/interfaces';
import Image from 'next/image';
import gif from '/public/images/zyzer.gif';

const LoadingScreen: React.FC<PageWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <Image src={gif} alt="preloader" width={250} height={150} />
      </div>
    </div>
  ) : (
    children
  );
};

export default LoadingScreen;
