import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { CiFolderOn } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';

const OtherProjects = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Some Other Standout Projects</h1>
        <Link href="/archive">
          <p className="pt-5 proggy text-shade text-xl">
            explore the archive{' '}
            <span className="inline-block text-xl -mb-1">
              <MdOutlineArrowOutward />
            </span>{' '}
          </p>
        </Link>
      </div>

      <div className="grid grid-cols-3 pt-16">
        <div className="border border-gray-600 border-dotted p-8 rounded">
          <div className="flex justify-between items-center text-shade">
            <p className="text-5xl">
              <CiFolderOn />
            </p>
            <div className="flex text-xl space-x-2">
              <Link href="/">
                <p className="hover:scale-125 transition ease-in-out duration-300">
                  <FiGithub />
                </p>
              </Link>
              <Link href="/">
                <p className="hover:scale-125 transition ease-in-out duration-300">
                  <MdOutlineArrowOutward />
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-2 pt-3">
            <h3 className="text-xl font-bold">Weather App</h3>
            <p className="text-shade text-sm leading-relaxed">
              Lubesurgeons is a platform that provides convenience with its on-demand automobile
              repair service.
            </p>
            <p className="proggy text-shade pt-5">Javascript • Tailwindcss • HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
