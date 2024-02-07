import { archive, socials, technologies } from '@/utils/items';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io';

const page = () => {
  return (
    <div className="grid grid-cols-6 place-content-between px-8 md:px-0">
      <div className="justify-self-center">
        <div className="hidden md:flex flex-col space-y-8 justify-center items-center fixed top-0 bottom-0">
          {socials.map((item, index) => (
            <Link href={item.href} key={index} target="_blank">
              <p className="text-xl hover:scale-125 transition ease-in-out duration-300">
                {item.icon}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-6 md:col-span-4">
        <div className="py-32 grid grid-cols-1 md:grid-cols-2 place-content-between">
          <div className="order-last md:order-first">
            <h1 className="text-5xl md:text-6xl font-extrabold my-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">
                Archive
              </span>
            </h1>
            <p className="proggy text-xl">Other Leisure Projects.</p>
          </div>
          <div className="place-self-end">
            <Link href="/">
              <button className="proggy group text-bright rounded border border-bright hover:bg-gray-500 hover:bg-opacity-25 duration-500 transition ease-in-out px-10 py-2 flex items-center w-full">
                <span className="inline-block text-xl mr-2 transition-transform group-hover:-translate-x-1">
                  <IoMdArrowRoundBack />
                </span>
                Back
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-shade">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-sm font-bold text-shade uppercase tracking-wider">
                          Year
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-sm font-bold text-shade uppercase tracking-wider">
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-sm font-bold text-shade uppercase tracking-wider">
                          Built With
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-sm font-bold text-shade uppercase tracking-wider">
                          Links
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {archive.map((item) => (
                        <tr className="py-6" key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {item.year}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {item.title}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {item.technologies}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-300 flex space-x-2">
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
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-16">
          <p className="proggy text-3xl">WIP 🚧</p>
        </div>
      </div>
      <div>
        <div className="hidden md:flex justify-center items-center fixed top-0 bottom-0">
          <Link href="mailto:davidicfola@gmail.com">
            <p className="transform rotate-90 proggy text-xl">
              <span className="transition-all ease duration-300 hover:bg-clip-text text-bright hover:text-transparent hover:bg-gradient-to-r from-primary to-secondary">
                davidicfola@gmail.com
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
