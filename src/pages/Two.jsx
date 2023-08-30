import React, { useState } from 'react';
// import Header from '../components/Header'
// import { ReactComponent as Douglas } from '../assets/Douglas.svg';
// import { ReactComponent as Mark } from '../assets/Mark.svg';
// import { ReactComponent as Victor } from '../assets/Victor.svg';
// import { ReactComponent as Anousheh } from '../assets/Anousheh.svg';
import Douglas from '../assets/Douglas.png'
import Mark from '../assets/Mark.png'
import Victor from '../assets/Victor.png'
import Anousheh from '../assets/Anousheh.png'
const data = [
  {
    img: Douglas ,
    title: 'Commander',
    name: 'Douglas Hurley',
    about:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  {
    img: Mark ,
    title: 'Mission Specialist',
    name: 'Mark Shuttleeworth',
    about:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  {
    img: Victor ,
    title: 'Pilot',
    name: 'Victor Glover',
    about:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
  },
  {
    img: Anousheh ,
    title: 'Flight Engineer',
    name: 'Anousheh Ansari',
    about:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
  },
];

const Two = () => {
  const [index, setIndex] = useState(0);
  const activeData = data[index];
  return (
    <div>
         <div className='fcc space-x-4 uppercase md:ml-[-41rem]'>
          <h2>02</h2>
          <h1>Meet your crew</h1>
        </div>
      <div className='wrapper space-y-8 flex flex-col text-center text-white md:flex-col-reverse'>
        <div className='flex flex-col md:flex-col-reverse md:my-6'>
        <img src={activeData.img} alt="" className='w-[250px] h-[250px] object-cover mx-auto mb-8 md:h-[450px] md:w-[450px] md:object-contain' />
        
        <div className='fcc space-x-5 w-60px mx-auto md:my-6 md:mb-[10rem]'>
          {data.map((i, j) => {
            return (
              <div
                className='rounded-full bg-white h-[10px] w-[10px] md:cursor-pointer'
                onClick={() => {
                  setIndex(j);
                }}
              ></div>
              
            );
          })}
        </div>
        </div>

       <div className='md:mb-10'>
        <div className='space-y-2 md:space-y-[0.2rem]'>
          <h2 className='uppercase text-gray-400 md:text-[1.5rem]'>{activeData.title}</h2>
          <h1 className='text-2xl uppercase tracking-wider md:text-3xl'>{activeData.name}</h1>
        </div>
        <p className='w-[85%] mx-auto md:w-[45%]'>{activeData.about}</p>

       </div>
      </div>
    </div>
  );
};

export default Two;
