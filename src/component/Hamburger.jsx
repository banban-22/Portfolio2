import React, { useState } from 'react';
import Logo from '../img/logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';

const Hamburger = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const toggleMenu = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <div className="flex items-center justify-between py-8">
      <div className="block lg:hidden">
        <a href="#">
          <img src={Logo} alt="Ayaka Bando" />
        </a>
      </div>

      <div className="flex text-3xl lg:hidden">
        <RxHamburgerMenu />
      </div>
    </div>
  );
};

export default Hamburger;
