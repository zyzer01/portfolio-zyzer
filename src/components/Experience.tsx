'use client';
import { experience } from '@/utils/items';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('Lubesurgeons');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="mb-14 border-b pb-6 border-gray-700 border-dotted">
        <h1 className="text-4xl font-bold">Experience</h1>
      </div>
      <div className="grid grid-cols-3 gap-8 text-shade">
        <div>
          <nav className="proggy text-xl">
            <ul className="flex flex-col space-y-4 transition-all ease duration-300">
              {experience.map((tab) => (
                <li
                  key={tab.id}
                  onClick={() => handleTabClick(tab.company)}
                  className={`cursor-pointer pl-2 hover:bg-opacity-25 hover:bg-shade py-2 ${
                    activeTab === tab.company && 'border-l text-bright'
                  }`}>
                  {tab.company}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="col-span-2">
          {experience.map(
            (item) =>
              activeTab === item.company && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 0 }} // Initial position and opacity
                    animate={{ opacity: 1, x: 100 }} // Animation when component is rendered
                    exit={{ opacity: 0, x: 100 }} // Animation when component is removed
                    transition={{ duration: 0.5 }} // Duration of the animation
                  >
                    <div>
                      <h2 className="text-bright text-2xl font-medium">{item.jobDescription}</h2>
                      <p className="proggy pt-2 text-lg">{item.duration}</p>
                      <ul className="list-none pt-3">
                        {item.achievements.map((point, index) => (
                          <li key={index} className="flex pb-4">
                            <span className="mt-1.5 w-6 h-2 mr-4 bg-bright"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
