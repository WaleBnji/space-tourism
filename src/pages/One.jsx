import React, { useState } from 'react';
import { ReactComponent as Moon } from '../assets/Moon.svg';
import { ReactComponent as Mars } from '../assets/Mars.svg';
import { ReactComponent as Europa } from '../assets/Europa.svg';
import { ReactComponent as Titan } from '../assets/Titan.svg';
// import Header from '../components/Header';

const data = [
  {
    img: <Moon className='md:w-[250px] md:h-[250px] md:mb-4'/>,
    name: 'Moon',
    averageDistance: '384,000 KM',
    travelTime: '3 Days',
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  },
  {
    img: <Mars />,
    name: 'Mars',
    averageDistance: '225 MIL KM',
    travelTime: '9 Months',
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
  },
  {
    img: <Europa />,
    name: 'Europa',
    averageDistance: '628 MIL. KM',
    travelTime: '3 Years',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
  },
  {
    img: <Titan />,
    name: 'Titan',
    averageDistance: '1.6 BIL. KM',
    travelTime: '7 Years',
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
  },
];

const One = () => {
  const [index, setIndex] = useState(0);
  const activeData = data[index];
  return (
    <>
      <div className='wrapper'>
        <div className='fcc space-x-4 ml-[-41rem]'>
          <h2>01</h2>
          <h1 className='uppercase tracking-widest'>Pick your destination</h1>
        </div>
        <div className='fcc mt-10 mb-5'>

        {activeData.img}
        </div>
        <ul className='fcc space-x-6 uppercase'>
          {data.map((i, j) => {
            return (
              <div>
                <li className='block cursor-pointer mb-2 tracking-widest' onClick={() => setIndex(j)}>
                  {i.name}
                </li>
                {index === j && (
                  <div className='h-[3px] w-full rounded-full bg-white'></div>
                )}
              </div>
            );
          })}
        </ul>
        <h1 className='uppercase text-7xl my-4 tracking-[0.1em] md:my-9'>{activeData.name}</h1>
        <p className='md:w-[60%] md:mx-auto'>{activeData.description}</p>
        <div className='bg-white h-[0.1px] w-full rounded-full my-7 md:mt-16'></div>
        <div className=' md:fcc md:space-x-10'>
          <div>
            <h3 className='text-sm uppercase tracking-wide'>Avg. Distance</h3>
            <h1 className='text-3xl uppercase'>{activeData.averageDistance}</h1>
          </div>
          <div className='my-6'>
            <h3 className='text-sm uppercase tracking-wide'>Est. Travel Time</h3>
            <h1 className='text-3xl uppercase'>{activeData.travelTime}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default One;
