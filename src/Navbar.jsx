import React from 'react';
// import { HashLink } from 'react-router-hash-link';
import Logo from './img/logo.png';
import Hamburger from './component/Hamburger';

const Navbar = () => {
  return (
    <div className="bg-brownishGray flex flex-row py-10 px-10 h-auto">
      <nav className="hidden lg:flex lg:flex-row lg:justify-between w-full px-2 bg-brownishGray">
        <div className="bg-brownishGray nav-left">
          <img className="w-1/3 hidden lg:block" src={Logo} alt="" />
        </div>

        <ul className="flex flex-row justify-between nav-right">
          <li className="p-2.5 hidden lg:block">
            <a href="#aboutme" className="text-offWhite">
              About Me
            </a>
          </li>
          <li className="p-2.5 hidden lg:block">
            <a href="#skills" className="text-offWhite">
              Skills
            </a>
          </li>
          <li className="p-2.5 hidden lg:block">
            <a href="#works" className="text-offWhite">
              Works
            </a>
          </li>
          <li className="p-2.5 hidden lg:block">
            <a href="#contact" className="text-offWhite">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Hamburger className="block lg:hidden" />
    </div>
  );
};

export default Navbar;
