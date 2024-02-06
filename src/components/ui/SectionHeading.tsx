import { SectionHeadingProps } from '@/utils/interfaces';
import React from 'react';

const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => {
  return (
    <div className="mb-10 md:mb-14 border-b pb-6 border-gray-700 border-dotted">
      <h1 className="text-2xl md:text-4xl font-bold leading-relaxed">{text}</h1>
    </div>
  );
};

export default SectionHeading;
