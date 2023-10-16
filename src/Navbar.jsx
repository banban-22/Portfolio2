// import React from 'react';
// import Logo from './img/logo.png';
// import Hamburger from './component/Hamburger';

// const Navbar = () => {
//   return (
//     <div className="bg-brownishGray flex flex-row lg:py-10 lg:px-10 h-auto">
//       <nav className="none lg:flex lg:flex-row lg:justify-between lg:w-full lg:px-2 bg-brownishGray">
//         <div className="bg-brownishGray nav-left">
//           <img className="w-1/3 hidden lg:block" src={Logo} alt="" />
//         </div>
//         <Hamburger className="block lg:hidden" />

//         <ul className="flex flex-row justify-between nav-right">
//           <li className="p-2.5 hidden lg:block">
//             <a href="#aboutme" className="text-offWhite">
//               About Me
//             </a>
//           </li>
//           <li className="p-2.5 hidden lg:block">
//             <a href="#skills" className="text-offWhite">
//               Skills
//             </a>
//           </li>
//           <li className="p-2.5 hidden lg:block">
//             <a href="#works" className="text-offWhite">
//               Works
//             </a>
//           </li>
//           <li className="p-2.5 hidden lg:block">
//             <a href="#contact" className="text-offWhite">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import Logo from './img/logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const toggleMenu = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <nav className="bg-brownishGray lg:py-10 lg:px-10">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://ayakabando.netlify.app/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="Logo" />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-offWhite rounded-lg lg:hidden hover:bg-gray-100"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu />
        </button>
        <div
          className={`${
            isToggleOpen ? 'block' : 'hidden'
          } w-full lg:block lg:w-auto`}
        >
          <ul className="flex flex-col p-4 mt-4 border rounded-xl lg:p-0 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
            <li>
              <a
                href="#aboutme"
                className="block py-2 pl-3 pr-4 text-offWhite text-2xl rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 lg:text-base"
                aria-current="page"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 pl-3 pr-4 text-offWhite text-2xl rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 lg:text-base"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="block py-2 pl-3 pr-4 text-offWhite text-2xl rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 lg:text-base"
              >
                Works
              </a>
            </li>
            <li>
              <a
                href="#article"
                className="block py-2 pl-3 pr-4 text-offWhite text-2xl rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 lg:text-base"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pl-3 pr-4 text-offWhite text-2xl rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 lg:text-base"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
