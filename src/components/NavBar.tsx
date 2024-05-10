import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="py-8 px-6 md:px-20 z-50">
      <div className="proggy text-lg ">
        <ul className="flex justify-between">
          <li className='menu-link'>
            <Link href="#about">About</Link>
          </li>
          <li className='menu-link'>
            <Link href="#experience">Experience</Link>
          </li>
          {/* <li>
            <Link href="/">Logo</Link>
          </li> */}
          <li className='menu-link'>
            <Link href="#projects">Projects</Link>
          </li>
          <li className='menu-link'>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
