import React from 'react';
import Header from '../components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import homeBackground from '../assets/Zeronew.jpg';
import destinationBackground from '../assets/MoonBG.svg';
import crewBackground from '../assets/02bg.svg';
import technologyBackground from '../assets/03bg.svg';

const Home = () => {
  const location = useLocation();
  const activeBackground =
    location.pathname === '/'
      ? homeBackground
      : location.pathname === '/destination'
      ? destinationBackground
      : location.pathname === '/crew'
      ? crewBackground
      : location.pathname === '/technology'
      ? technologyBackground
      : homeBackground;
  return (
    <div
      className=' text-center text-white h-screen overflow-y-auto'
      // style={{
      //   background: `url(${background}) fixed`,
      //   backgroundRepeat: `no-repeat`,
      //   backgroundSize: 'cover',
      // }}
    >
      <img
        src={activeBackground}
        alt=''
        className='fixed top-0 left-0 w-full min-h-screen object-cover -z-10'
      />
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
