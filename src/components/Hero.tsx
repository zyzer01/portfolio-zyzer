import React from 'react';
import Button from './ui/Button';
import { technologies } from '@/utils/items';
import Marquee from 'react-fast-marquee';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const getGreeting = () => {
    const currentTime = new Date().getHours();
    let greeting: { english: string; spanish: string; french: string } = {
      english: '',
      spanish: '',
      french: '',
    };

    if (currentTime >= 0 && currentTime < 12) {
      greeting = {
        english: 'Good morning',
        spanish: 'Buenos días',
        french: 'Bonjour',
      };
    } else if (currentTime >= 12 && currentTime < 18) {
      greeting = {
        english: 'Good afternoon',
        spanish: 'Buenas tardes',
        french: 'Bon après-midi',
      };
    } else {
      greeting = {
        english: 'Good evening',
        spanish: 'Buenas noches',
        french: 'Bonsoir',
      };
    }

    return greeting;
  };

  return (
    <div className="flex flex-col space-y-6 pt-28 md:pt-20">
      <div className="transition-all ease-out duration-300">
        <div className="proggy text-xl">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`${getGreeting().english}, my name is`) //English Greeting
                .pauseFor(1000)
                .deleteAll()
                .typeString(`${getGreeting().spanish}, mi nombre es`) //Spanish Greeting
                .pauseFor(1000)
                .deleteAll()
                .typeString(`${getGreeting().french}, je m'appelle`) //French Greeting
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold my-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">
            David Onifade.
          </span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-shade">i build software solutions.</h2>
      </div>
      <h6>
        I love web interativity a lot, so I focus more on building Frontend applications, with
        occasional work on the backend. I take pride in delivering applications that are not only
        efficient but also prioritize performance, accessibility, and responsiveness.
      </h6>
      <Button
        text="View Blog"
        href="/blog"
      />
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
