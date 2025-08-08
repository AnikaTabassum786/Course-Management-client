import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
import { format } from 'date-fns';
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <div className=' bg-black p-10 mt-10'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-6 text-white'>

                <div className='flex flex-col items-center lg:items-start text-center lg:text-start'>
                  <img className='w-10 h-10' src={logo} alt="Logo" />
                  <p className='font-normal text-base text-center lg:text-start'>
                    Learn. Grow. Succeed
                  </p>
                </div>

                <div className='flex flex-col justify-center gap-1'>

                    <NavLink
  to="/terms-condition"
  className={(isActive ) =>
    isActive ? "active " : ""
  }
>
  Terms & Condition
</NavLink>

 <NavLink
  to="/privacy-policy"
  className={(isActive ) =>
    isActive ? "active " : ""
  }
>
  Privacy Policy
</NavLink>

 <NavLink
  to="/contact-us"
  className={(isActive ) =>
    isActive ? "active " : ""
  }
>
  Contact Us
</NavLink>
                    {/* <Link to='/terms-condition'><p className="hover:underline hover:font-medium">Terms & Condition</p></Link> */}
                    {/* <Link to='/privacy-policy'><p className="hover:underline hover:font-medium">Privacy Policy</p></Link> */}
                    {/* <Link to='/contact-us'><p className="hover:underline hover:font-medium">Contact Us</p></Link> */}
                </div>

                <div className='flex flex-row lg:flex-col gap-2'>

                    <a href="https://www.facebook.com/tabassum.teddy/" target="_blank">
                    <FaFacebook size={20} className='hover:scale-80 duration-300 cursor-pointer' />
                    </a>
                
                    <a href="https://www.linkedin.com/in/anika-tabassum-1b62541b1/" target="_blank">
                    <FaLinkedin size={20} className='hover:scale-80 duration-300 cursor-pointer'/>
                    </a>
                
                    <a href="https://github.com/AnikaTabassum786" target="_blank">
                    <FaGithub size={20} className='hover:scale-80 duration-300 cursor-pointer' />
                    </a>
                </div>
            </div>

            <p className='text-center text-white mt-4' >@ <span>{format(new Date(), "yyyy")}</span> BidyaNiketon. All rights reserved</p>
        </div>
    );
};

export default Footer;