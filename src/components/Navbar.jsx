import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex items-center justify-between max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt='logo' className='w-14 h-14 object-contain' />
          <p className='text-[#100E0F] text-[18px] font-bold cursor-pointer flex'>
            Yasmine &nbsp; <span className='sm:block hidden'>| Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-secondary" : "text-[#100E0F]"
              } hover:text-secondary text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop only) */}
        <div className='hidden sm:flex items-center gap-4 ml-4'>
          <a href='https://github.com/Yasmineeibrahim' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={24} className='text-[#100E0F] hover:text-secondary transition duration-300' />
          </a>
          <a href='https://www.linkedin.com/in/yasmine-ibrahim-awad/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={24} className='text-[#100E0F] hover:text-secondary transition duration-300' />
          </a>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt='menu' 
            className="w-[28px] h-[28px] object-contain cursor-pointer invert-0 brightness-0" 
            onClick={() => setToggle(!toggle)} 
          />
        </div>

        {/* Mobile Menu */}
        <div className={`${!toggle ? 'hidden': 'flex'} p-6 violet-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
              <li 
                key={link.id} 
                className={`${
                  active === link.title ? "text-secondary" : "text-white"
                } font-poppins font-medium cursor-pointer text-[16px]`} 
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          {/* Social Icons (Mobile dropdown) */}
          <div className="flex gap-4 mt-4">
            <a href='https://github.com/Yasmineeibrahim' target='_blank' rel='noopener noreferrer'>
              <FaGithub size={20} className='text-white hover:text-secondary' />
            </a>
            <a href='https://www.linkedin.com/in/yasmine-ibrahim-awad/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin size={20} className='text-white hover:text-secondary' />
            </a>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
