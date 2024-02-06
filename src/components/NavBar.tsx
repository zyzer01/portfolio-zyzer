import Link from 'next/link';
import React from 'react';
import MenuBar from './MenuBar';
import Image from 'next/image';
import logo from '/public/images/Lubesurgeons main logo.webp';

const NavBar = () => {
  return (
    <nav className="py-8 px-6 md:px-20">
      <div className="proggy text-lg hidden md:block">
        <ul className="flex justify-between">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#about">Experience</Link>
          </li>
          <li>
            <Link href="/">Logo</Link>
          </li>
          <li>
            <Link href="#about">Projects</Link>
          </li>
          <li>
            <Link href="#about">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="grid place-content-between md:hidden">
        <div>
          <Image src={logo} alt="Logo" width={150} height={70} />
        </div>
        <div>
          <MenuBar />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
