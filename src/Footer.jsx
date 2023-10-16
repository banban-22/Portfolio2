import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <div className="contact pl-10 px-auto" id="contact">
        <p className="contact-title title text-center text-lg pt-28 text-darkBlack">
          Get in Touch!
        </p>
        <p className="text-center text-darkBlack pt-5 sm:mx-auto ">
          My inbox is always opened. If you have anything, feel free to contact
          me. Let's get some coffee together!
        </p>
        <div className="sns">
          <button>
            <a href="mailto: ayaka.bando22@gmail.com">
              <FaEnvelope className="text-2xl" />
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/ayaka-bando-2800a3222/">
              <FaLinkedinIn className="text-2xl" />
            </a>
          </button>
          <button>
            <a className="w-16" href="https://www.facebook.com/ayaka.bando.35">
              <FaFacebookF className="text-2xl" />
            </a>
          </button>
          <button>
            <a href="https://twitter.com/banaya53662508">
              <FaXTwitter className="text-2xl" />
            </a>
          </button>
        </div>

        <ul className="flex flex-row ml-5 mt-5 text-black">
          <li className="ml-5">
            <a href="#aboutme" className="">
              About Me
            </a>
          </li>
          <li className="ml-5">
            <a href="#skills" className="">
              Skills
            </a>
          </li>
          <li className="ml-5">
            <a href="#works" className="">
              Works
            </a>
          </li>
          <li className="ml-5">
            <a href="#contact" className="">
              Contact
            </a>
          </li>
        </ul>
        <p className="small text-xs text-center mt-6">
          &copy; 2023 Ayaka Bando All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
