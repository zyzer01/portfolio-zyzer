'use client';
import { useState, useEffect } from 'react';
import lubesurgeons1 from '/public/images/lubesurgeons.png';
import lubesurgeons2 from '/public/images/cloudnetvox.png';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Heading from './ui/Heading';
import { projects } from '@/utils/items';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="mb-14 border-b pb-6 border-gray-700 border-dotted">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>

      {projects.map((item) => (
        <div
          className="grid grid-cols-2 gap-8 place-items-center border border-gray-600 border-dotted rounded p-8"
          key={item.id}>
          <div className="hover-effect w-full">
            {/* <motion.div
              className="hover-effect w-full relative overflow-hidden"
              style={{ height: '100%' }}>
              <img
                src="/images/lubesurgeons.png"
                alt={'alt'}
                className="absolute top-0 left-0 w-full h-full transition-transform duration-300"
              />
              <motion.img
                src="/images/cloudnetvox.png"
                alt={'alt'}
                className="absolute top-full left-0 w-full h-full transition-transform duration-300"
                initial={{ translateY: '100%' }}
                whileHover={{ translateY: '0%' }}
              />
            </motion.div> */}
            <motion.div initial={{ translateY: '0%' }} whileHover={{ translateY: '100%' }}>
              <Image src={lubesurgeons1} alt="" />
            </motion.div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Heading projectName={item.name} color={item.color} />
              <p className="proggy flex items-center">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                completed
              </p>
            </div>
            <p className="text-shade my-4">{item.description}</p>
            <p className="flex proggy text-lg text-gray-300">
              <span>{item.technologies}</span>
            </p>
            <div className="flex text-xl space-x-2 text-shade pt-6">
              <Link href={item.repository}>
                <p className="hover:scale-125 transition ease-in-out duration-300">
                  <FiGithub />
                </p>
              </Link>
              {item.isLive && (
                <Link href={item.liveLink}>
                  <p className="hover:scale-125 transition ease-in-out duration-300">
                    <MdOutlineArrowOutward />
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
