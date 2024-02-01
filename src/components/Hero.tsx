import React from 'react';
import Button from './ui/Button';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaXTwitter, FaHashnode } from 'react-icons/fa6';
import Link from 'next/link';

const Hero = () => {
  const socials = [
    {
      icon: <FiGithub />,
      href: 'https://github.com/zyzer01',
    },
    {
      icon: <FaXTwitter />,
      href: 'https://x.com/zyzer01',
    },
    {
      icon: <FiLinkedin />,
      href: 'https://linkedin.com/in/zyzer01',
    },
    {
      icon: <FaHashnode />,
      href: 'https://hashnode.com/@zyzer01',
    },
  ];
  return (
    <div className="grid grid-cols-5 font-sans md:px-24 py-24">
      <div className="hidden md:flex flex-col space-y-6">
        {socials.map((item, index) => (
          <Link href={item.href} key={index}>
            <p className="text-xl hover:scale-105 transition origin-center ease-in-out">
              {item.icon}
            </p>
          </Link>
        ))}
      </div>
      <div className="col-span-3">
        <div className="flex flex-col space-y-6">
          <div>
            <p>Hi, my name is</p>
            <h1 className="text-6xl font-medium my-3">David Onifade.</h1>
            <h2 className="text-6xl">I build software solutions.</h2>
          </div>
          <h6>
            I specialize in developing Frontend applications as a software engineer, with occasional
            work on the backend and infrequent involvement in design. I take pride in delivering
            applications that are not only efficient but also prioritize speed, accessibility, and
            responsiveness.
          </h6>
          <Button text="Resume" href="resume.pdf" />
        </div>
      </div>
      <div className="hidden md:flex"></div>
    </div>
  );
};

export default Hero;
