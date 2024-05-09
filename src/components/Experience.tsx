'use client';

import { experience } from '@/utils/items';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import Link from 'next/link';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('Lubesurgeons');

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const activeItem = experience.find((item) => item.company === activeTab);

  return (
    <div id="experience" className="pt-6">
      <SectionHeading text="Experience" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-shade">
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

        <div className="col-span-3 md:col-span-2">
          <AnimatePresence mode="wait">
            <div>
              {activeItem && (
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}>
                  <div>
                    <h2 className="text-bright text-xl md:text-2xl font-medium">
                      {activeItem.jobDescription}{' '}
                      <span className="transition-all ease duration-300 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary lowercase">
                        <Link href={activeItem.link} target="_blank">
                          @{activeItem.company}
                        </Link>
                      </span>
                    </h2>
                    <p className="proggy pt-2 text-lg">{activeItem.duration}</p>
                    <ul className="list-none pt-3">
                      {activeItem.achievements.map((point, index) => (
                        <li key={index} className="flex pb-4">
                          <span className="mt-1.5 w-4 h-2 mr-4 bg-bright"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-start -ml-48 md:-ml-72">
        <div className="relative before:absolute before:h-[350px] before:w-[520px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-secondary before:to-primary before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[200px] after:w-[260px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-fuchsia-700 after:blur-2xl after:content-[''] before:h-[360px] z-[-1] animate-bg-gradient"></div>
      </div>
    </div>
  );
};

export default Experience;
