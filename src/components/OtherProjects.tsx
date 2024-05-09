import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { otherProjects } from "@/utils/items";
import Button from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";

const OtherProjects = () => {
  return (
    <div id="other-projects" className="pt-6">
      <div className="text-center">
        <SectionHeading text="Some Other Standout Projects" />
        <Link href="/archive">
          <p className="pt-5 proggy -mt-10 md:-mt-14 text-shade text-xl hover:text-gray-300 transition ease">
            explore the archive{" "}
            <span className="inline-block text-xl -mb-1">
              <MdOutlineArrowOutward />
            </span>{" "}
          </p>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
        {otherProjects.map((item) => (
          <div
            className="card-wrapper w-full h-full rounded"
            key={item.id}
          >
            <div className="card-content p-6">
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
                <h3 className="text-lg md:text-xl font-bold">{item.name}</h3>
                <p className="text-shade text-sm leading-relaxed">
                  {item.description}
                </p>
                <p className="proggy text-shade pt-5">{item.technologies}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-16 flex justify-center">
        <Button text="See Archive" href="/archive" />
      </div>
    </div>
  );
};

export default OtherProjects;
