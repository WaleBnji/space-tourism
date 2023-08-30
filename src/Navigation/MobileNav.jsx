import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const MobileNav = () => {
  return (
    <div>
      <div className='fixed w-[30vh] h-full bg-[rgb(0,0,0,0.5)] top-[-23.7px] right-0 py-[2rem] px-[2rem] backdrop-blur'>
        <div className='flex justify-end'>
          <AiOutlineClose className=' bg-black' size='25' />
        </div>
        <ul className='my-20 space-y-12 flex-col bg-black uppercase text-left'></ul>
      </div>
    </div>
  );
};

export default MobileNav;
