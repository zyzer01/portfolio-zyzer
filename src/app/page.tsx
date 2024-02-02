import { socials } from '@/utils/items';
import Link from 'next/link';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Spacer from '@/components/Spacer';
import Experience from '@/components/Experience';

const Home = () => {
  return (
    <div className="grid grid-cols-6 px-8 lg-px-16 xl:px-20">
      <div>
        <div className="hidden md:flex flex-col space-y-6 justify-center fixed top-0 bottom-0">
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
export default Home;
