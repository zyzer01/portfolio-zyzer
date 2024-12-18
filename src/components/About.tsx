import Link from "next/link";
import SectionHeading from "./ui/SectionHeading";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="pt-6">
      <SectionHeading text="About" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="text-shade ">
          <p className="leading-relaxed">
            Hi, there! My name is David, I'm an experienced software developer
            with 3+ years in standard application development. I'm proficient in
            a number of programming languages and tech tools.
          </p>
          <br />
          <p>
            I'm a strong problem solver and collaborative team player, Over my
            few years in tech, I have contributed to some amazing open-source
            projects like{" "}
            <span className="transition-all ease duration-300 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              <Link href="https://github.com/build-trust" target="_blank">
                Ockam
              </Link>
            </span>{" "}
            and{" "}
            <span className="transition-all ease duration-300 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              <Link href="https://github.com/devflowinc/trieve" target="_blank">
                Arguflow
              </Link>
            </span>{" "}
            actively engaging with the developer community to foster innovation
            and drive industry advancement. I've also ran a web design agency,
            where I and my partner, Kolawole built and delivered over 20 web
            apps to both international and local clients. I'm Passionate about
            leveraging technology to create impactful solutions.
          </p>
          <br />
          <p>
            I thrive in dynamic environments where I can apply my skills to
            solve problems and drive meaningful outcomes.
          </p>
        </div>
        <div className="group">
          <Image
            src='/images/portrait.jpg'
            width={380}
            height={200}
            alt="David Onifade smiling with his teeth out"
            className="grayscale group-hover:filter-none border border-shade rounded p-4 group-hover:transform group-hover:scale-105 transition-all ease cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
