'use client';

import { experience } from '@/utils/items';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('Ubuntu');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="mb-14 border-b pb-6 border-gray-700 border-dotted">
        <h1 className="text-4xl font-bold">Experience</h1>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <nav className="">
            <ul className="flex flex-col space-y-4">
              <li>Netvox</li>
              <li>Netvox</li>
              <li>Netvox</li>
            </ul>
          </nav>
        </div>
        <div>Content</div>
      </div>
    </div>
  );
};

export default Experience;
