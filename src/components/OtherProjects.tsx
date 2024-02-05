import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { CiFolderOn } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { otherProjects } from '@/utils/items';

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
        {otherProjects.map((item) => (
          <div className="border border-gray-600 border-dotted p-8 rounded">
            <div className="flex justify-between items-center text-shade">
              <p className="text-5xl">
                <CiFolderOn />
              </p>
              <div className="flex text-xl space-x-2">
                {item.isOnGithub && (
                  <Link href={item.repository} target="_blank">
                    <p className="hover:scale-125 transition ease-in-out duration-300">
                      <FiGithub />
                    </p>
                  </Link>
                )}
                {item.isLive && (
                  <Link href={item.liveLink} target="_blank">
                    <p className="hover:scale-125 transition ease-in-out duration-300">
                      <MdOutlineArrowOutward />
                    </p>
                  </Link>
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-2 pt-3">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-shade text-sm leading-relaxed">{item.description}</p>
              <p className="proggy text-shade pt-5">{item.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
