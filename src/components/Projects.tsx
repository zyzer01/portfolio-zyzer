import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Heading from './ui/Heading';
import { projects } from '@/utils/items';
import FloatingPhone from './FloatingPhone';
import SectionHeading from './ui/SectionHeading';
const Projects = () => {
  return (
    <div id="projects" className="pt-6">
      <SectionHeading text="Projects" />

      {projects.map((item) => (
        <div
          className="relative grid grid-cols-1 mb-16 md:mb-0 lg:grid-cols-2 gap-8 place-items-center border border-gray-600 border-dotted rounded px-8 py-16 md:p-8"
          key={item.id}>
          <div className={`${item.isReversed ? 'order-first lg:order-last' : 'order-first'}`}>
            <FloatingPhone imageSrc={item.projectLogo} bgColor={item.phoneBgColor} />
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
              {item.isOnGithub && (
                <Link href={item.repository}>
                  <p className="hover:scale-125 transition ease-in-out duration-300">
                    <FiGithub />
                  </p>
                </Link>
              )}
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
      <div className="flex justify-end">
        <div className="relative before:absolute md:before:h-[270px] md:before:w-[300px] before:h-[200px] before:w-[250px]  before:right-0 after:right-0 md:before:-right-48 md:after:-right-48 before:rounded-full before:bg-gradient-radial before:from-secondary before:to-pink-900 before:blur-2xl before:content-[''] after:absolute after:-z-20 md:after:h-[270px] md:after:w-[250px] after:h-[150px] after:w-[150px] after:bg-gradient-conic after:from-secondary after:via-fuchsia-700 after:blur-2xl after:content-[''] z-[-1] animate-bg-gradient"></div>
      </div>
    </div>
  );
};

export default Projects;
