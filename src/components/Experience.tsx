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
      <div className="grid grid-cols-3 text-shade">
        <div>
          <nav className="proggy text-xl cursor-pointer">
            <ul className="flex flex-col space-y-4">
              {experience.map((item) => (
                <li key={item.id}>{item.company}</li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="col-span-2">
          <h2 className="text-bright text-2xl font-medium">Software Engineer @ Lubesurgeons</h2>
          <p className="proggy pt-2 text-lg">Aug 2023 - Oct 2023 * Remote</p>
          <ul className="list-none pt-3">
            <li className="flex">
              <span className="w-4 h-4 mr-4 bg-bright rounded-full"></span>
              Worked closely with the interdisciplinary team to identify and rank features and
              requirements. Created and executed unit tests and carried out system testing to
              maintain the entire infrastructure quality.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
