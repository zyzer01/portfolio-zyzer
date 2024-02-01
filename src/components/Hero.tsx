import React from 'react';
import Button from './ui/Button';
import { FiGithub } from 'react-icons/fi';

const Hero = () => {
  const socials = [
    {
      icon: <FiGithub />,
    },
  ];
  return (
    <div className="grid grid-cols-5 font-sans">
      <div className="hidden md:flex flex-col">
        <Link href={href}></Link>
        <p></p>
      </div>
      <div className="col-span-3">
        <p>Hi, my name is</p>
        <h1>David Onifade</h1>
        <h2>i do tech stuff</h2>
        <h6>
          I specialize in developing Frontend applications as a software engineer, with occasional
          work on the backend and infrequent involvement in design. I take pride in delivering
          applications that are not only efficient but also prioritize speed, accessibility, and
          responsiveness.
        </h6>
        <Button text="Resume" href="resume.pdf" />
      </div>
      <div className="hidden md:flex"></div>
    </div>
  );
};

export default Hero;
