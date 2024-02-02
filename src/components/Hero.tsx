import Button from './ui/Button';
import { socials, technologies } from '@/utils/items';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

const Hero = () => {
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
            <h1 className="text-6xl font-bold my-3">David Onifade.</h1>
            <h2 className="text-6xl font-medium text-shade">I build software solutions.</h2>
          </div>
          <h6>
            I love web interativity a lot, so I specialize in developing Frontend applications as a
            software engineer, with occasional work on the backend and infrequent involvement in
            design. I take pride in delivering applications that are not only efficient but also
            prioritize performance, accessibility, and responsiveness.
          </h6>
          <Button text="Resume" href="resume.pdf" />
          {/* <div className="proggy pt-8"> */}
          <Marquee>
            {technologies.map((item, index) => (
              <p key={index} className="flex items-center mr-5 text-xl proggy">
                <span className={`mr-1.5 text-xl ${item.iconColor}`}>{item.icon}</span>
                {item.name}
              </p>
            ))}
          </Marquee>
          {/* </div> */}
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-center">
        <Link href="mailto:davidicfola@gmail.com">
          <p>davidicfola@gmail.com</p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
