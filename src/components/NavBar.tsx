import Link from 'next/link';
import React from 'react';

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
    </nav>
  );
};

export default NavBar;
