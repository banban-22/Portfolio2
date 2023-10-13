import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Logo from './img/logo.png';

const Navbar = () => {
  return (
    <div className="bg-brownishGray flex flex-row py-10 px-10 h-auto">
      <nav className="flex flex-row justify-between w-full px-2 bg-brownishGray">
        <div className="bg-brownishGray nav-left">
          {/* <HashLink smooth to="#"> */}
          <img className="w-1/3" src={Logo} alt="" />
          {/* </HashLink> */}
        </div>
        {/* <div className="bg-brownishGray nav-left">
          <img className="w-1/3" src={Logo} alt="" />
          {/* <HashLink
            to="#"
            scroll={(el) =>
              el.scrollIntoView({ behavior: 'auto', block: 'end' })
            }
          >
            <img className="w-1/3" src={Logo} alt="" />
          </HashLink> */}
        {/* </div> */}
        <ul className="flex flex-row justify-between nav-right">
          <li className="nav-right-cont">
            <a to="#aboutme" className="text-offWhite">
              About Me
            </a>
          </li>
          <li className="nav-right-cont">
            <a to="/skills" className="text-offWhite">
              Skills
            </a>
          </li>
          <li className="nav-right-cont">
            <a to="/works" className="text-offWhite">
              Works
            </a>
          </li>
          <li className="nav-right-cont">
            <a to="/contact" className="text-offWhite">
              Contact
            </a>
          </li>
          <li className="toggle-button">
            <a to="/">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
