import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="proggy text-lg py-8 px-20">
      <div>
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
