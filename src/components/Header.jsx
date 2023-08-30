import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import { ReactComponent as Hamburger } from '../assets/Hamburger.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navlinks = [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/destination',
      name: 'Destination',
    },
    {
      link: '/crew',
      name: 'Crew',
    },
    {
      link: '/technology',
      name: 'Technology',
    },
  ];
  return (
    <>
      <div className=' w-full relative wrapper md:p-10'>
        <div className='fbc'>
          <Logo />
          <div className='bg-gray-700 h-[7rem] w-[55%] absolute top-[-1rem] right-[-2rem] py-10 hidden md:block'>
            <ul className='fcc space-x-4'>
              {navlinks.map((i,j) => {
                return <li>
                  <NavLink to={i.link}  className={({ isActive }) =>
                          `uppercase text-[12px] ${
                            isActive ? 'text-black' : ''
                          }`
                        }>
                    {i.name}
                  </NavLink>
                </li>
                {}
                
              })}
            </ul>
          </div>
          <Hamburger onClick={() => setShowNavbar(true)} className='md:hidden mr-6' />
        </div>

        {showNavbar && (
          <div className='absolute w-[60%] max-w-[300px]  bg-[rgb(0,0,0,0.5)]  h-screen right-0 top-0 backdrop-blur-lg'>
            <div className='fixed py-[2rem] px-[2rem] '>
              <AiOutlineClose
                onClick={() => setShowNavbar(false)}
                className=' absolute right-3 top-7 mr-6'
                size='25'
              />

              <ul className='my-20 space-y-12  uppercase text-left'>
                {navlinks.map((i, j) => {
                  return (
                    <li key={j} onClick={() => setShowNavbar(false)}>
                      <NavLink
                        to={i.link}
                        className={({ isActive }) =>
                          `text-lg space-x-4 flex items-center hover:text-gray-500 ${
                            isActive ? 'text-gray-500' : ''
                          }`
                        }
                      >
                        <span className='font-semibold text-2xl'> 0{j}</span>
                        <div className='font-light'>{i.name}</div>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
