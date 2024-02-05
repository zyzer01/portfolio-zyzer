'use client';
import { useEffect } from 'react';
import { socials } from '@/utils/items';
import Link from 'next/link';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Spacer from '@/components/Spacer';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import OtherProjects from '@/components/OtherProjects';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import AnimatedMeshGradient from '@/components/AnimatedMeshGradient';
import { Gradient } from '@/utils/gradient.js';

const Home = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);

  return (
    <div className="relative">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-secondary before:to-primary before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-fuchsia-700 after:blur-2xl after:content-[''] before:lg:h-[360px] z-[-1] animate-bg-gradient"></div>
      <NavBar />
      <div className="grid grid-cols-6 px-8 lg-px-16 xl:px-20">
        <div>
          <div className="hidden md:flex flex-col space-y-8 justify-center fixed top-0 bottom-0">
            {socials.map((item, index) => (
              <Link href={item.href} key={index}>
                <p className="text-xl hover:scale-125 transition ease-in-out duration-300">
                  {item.icon}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-start-2 col-span-4">
          <Hero />
          <Spacer />
          <About />
          <Spacer />
          <Experience />
          <Spacer />
          <Projects />
          <Spacer />
          <OtherProjects />
          <Spacer />
          <Footer />
          <Spacer />
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
    </div>
  );
};
export default Home;
