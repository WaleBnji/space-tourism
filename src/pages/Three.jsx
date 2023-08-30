import React, { useState } from 'react';
// import { ReactComponent as Launch } from '../assets/Launch.svg';
// import { ReactComponent as Spaceport } from '../assets/Spaceport.svg';
// import { ReactComponent as SpaceCapsule } from '../assets/Spacecapsule.svg';
import Launch from '../assets/Launch.jpg'
import SpacePort from '../assets/Spaceport.jpg'
import SpaceCapsule from '../assets/SpaceCapsule.jpg'

const data = [
  {
    img: Launch,
    title: 'Launch Vehicle',
    details:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    img: SpacePort,
    title: 'Spaceport',
    details:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  {
    img: SpaceCapsule,
    title: 'Space Capsule',
    details:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
const arr = [1, 2, 3];

const Three = () => {
  const [index, setIndex] = useState(0);
  const activeData = data[index];
  return (
    <div className='space-y-8'>
      <div className='fcc space-x-4 uppercase md:ml-[-41rem]'>
        <h2>03</h2>
        <h1>Space Launch 101</h1>
      </div>
      <img src={activeData.img} alt="" className='mx-auto md:w-full ' />
      <ul className='fcc space-x-4'>
        {arr.map((i, j) => {
          return (
            <div
              className={`rounded-full w-[40px] h-[40px] text-center fcc cursor-pointer  ${
                index === j ? 'bg-white' : 'bg-black'
              } ${index === j ? 'text-black' : 'text-white'}`}
              onClick={() => {
                setIndex(j);
              }}
            >
              {i}
            </div>
          );
        })}
      </ul>
      <div>
        <h2 className='uppercase'>The terminology ...</h2>
        <h1 className='text-3xl uppercase'>{activeData.title}</h1>
      </div>
      <p className='md:w-[40%] mx-auto px-7 w-[80%]'>{activeData.details}</p>
    </div>
  );
};

export default Three;
