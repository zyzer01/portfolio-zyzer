'use client';
import Button from './ui/Button';
import { technologies } from '@/utils/items';
import Marquee from 'react-fast-marquee';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="flex flex-col space-y-6 pt-32">
      <div>
        <div className="proggy text-xl">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Hello, my name is')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Hola, mi nombre es')
                .deleteAll()
                .typeString("Bonjour, je m'appelle")
                .deleteAll()
                .start();
            }}
          />
        </div>
        <h1 className="text-6xl font-extrabold my-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">
            David Onifade.
          </span>
        </h1>
        <h2 className="text-6xl font-medium text-shade">I build software solutions.</h2>
      </div>
      <h6>
        I love web interativity a lot, so I focus more in building Frontend applications as a
        software engineer, with occasional work on the backend and infrequent involvement in design.
        I take pride in delivering applications that are not only efficient but also prioritize
        performance, accessibility, and responsiveness.
      </h6>
      <Button text="Resume" href="resume.pdf" />
      <div className="proggy pt-8">
        <Marquee>
          {technologies.map((item, index) => (
            <p key={index} className="flex items-center mr-5 text-xl border-r pr-5 text-shade">
              <span className="mr-1.5 text-xl">{item.icon}</span>
              {item.name}
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
