import React from 'react';
// import Header from '../components/Header';
import { ReactComponent as Explore } from '../assets/Explore.svg';
// import background from '../assets/03bg.svg'

const Zero = () => {
  return (
    <div className='wrapper text-center  px-14  mx-auto'>
      <h2 className='text-white uppercase md:tracking-widest md:leading-8 md:text-[1.2rem] mt-[4rem]'>So, you want to travel to</h2>
      <h1 className='ml-[-15px] text-[5rem] uppercase text-white text-center my-8 tracking-widest mx-auto md:text-[9rem] md:m-1 md:tracking-[1rem]'>Space</h1>
      <p className='text-white md:w-[50%] mx-auto'>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <Explore className='mx-auto h-[170px] w-[170px] mt-20 md:h-[200px] md:w-[200px] md:mt-28'  />
    </div>
  );
};

export default Zero;
