


import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router';
import { format } from 'date-fns';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-base-100 shadow-lg dark:bg-gray-800 dark:text-white p-10 mt-10  ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

        <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
          <img className="w-10 h-10" src={logo} alt="Logo" />
          <p className="font-normal text-base text-center lg:text-start">
            Learn. Grow. Succeed
          </p>
        </div>

        <div className="flex flex-col justify-center gap-1">
          <NavLink to="/terms-condition" className={({ isActive }) => (isActive ? "active" : "")}>
            Terms & Condition
          </NavLink>

          <NavLink to="/privacy-policy" className={({ isActive }) => (isActive ? "active" : "")}>
            Privacy Policy
          </NavLink>

          <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact Us
          </NavLink>
        </div>

        <div className="flex flex-row lg:flex-col gap-2">
          <a href="https://www.facebook.com/tabassum.teddy/" target="_blank" rel="noreferrer">
            <FaFacebook size={20} className="hover:scale-80 duration-300 cursor-pointer" />
          </a>

          <a href="https://www.linkedin.com/in/anika-tabassum-1b62541b1/" target="_blank" rel="noreferrer">
            <FaLinkedin size={20} className="hover:scale-80 duration-300 cursor-pointer" />
          </a>

          <a href="https://github.com/AnikaTabassum786" target="_blank" rel="noreferrer">
            <FaGithub size={20} className="hover:scale-80 duration-300 cursor-pointer" />
          </a>
        </div>
      </div>

      <p className="text-center mt-4">
        @ <span>{format(new Date(), "yyyy")}</span> BidyaNiketon. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

