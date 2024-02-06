import Heading from './ui/Heading';
import zyzer from '/public/images/david onifade profile picture.png';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="pt-6">
      <div className="mb-14 border-b pb-6 border-gray-700 border-dotted">
        <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
        <div className="group">
          <Image
            src={zyzer}
            alt="David Onifade smiling with his teeth out"
            className="grayscale group-hover:filter-none border border-shade rounded p-4 group-hover:transform group-hover:scale-105 transition-all ease cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
