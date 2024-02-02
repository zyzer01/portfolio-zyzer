import Heading from './ui/Heading';
import zyzer from '/public/images/david onifade profile picture.png';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <div className="mb-14 border-b pb-6 border-gray-700 border-dotted">
        <h1 className="text-4xl font-bold">About Me</h1>
      </div>
      <div className="grid grid-cols-2 md:gap-16">
        <div>
          <p className="text-shade">
            Experienced software developer with 3+ years' expertise in enterprise application
            development, proficient in a number of programming languages and methodologies. Strong
            problem solver, collaborative team player, and dedicated to open-source contributions
            for industry advancement. Experienced software developer with 3+ years' expertise in
            enterprise application development, proficient in a number of programming languages and
            methodologies. Strong problem solver, collaborative team player, and dedicated to
            open-source contributions for industry advancement. Experienced software developer with
            3+ years' expertise in enterprise application development, proficient in a number of
            programming languages and methodologies. Strong problem solver, collaborative team
            player, and dedicated to open-source contributions for industry advancement.
          </p>
        </div>
        <div className="relative rounded-lg transform group hover:-translate-x-4 hover:-translate-y-4 transition-all ease duration-300">
          <Image
            src={zyzer}
            alt="David Onifade smiling with his teeth out"
            className="grayscale group-hover:filter-none"
          />
          <div
            className="absolute inset-0 z-[-1] border-2 border-gray-500 rounded-lg"
            style={{
              borderImage: 'linear-gradient(45deg, #959595, #FEFEFE) 1',
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default About;
