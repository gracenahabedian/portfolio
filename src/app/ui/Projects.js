'use client';
import React, { useContext, useState } from 'react';
import { HamburgerContext } from './HamburgerContext';
import SkillsGrid from './SkillsGrid';
import { WindowContext } from './WindowContext';

export default function Projects() {
  const { hamburgerActive } = useContext(HamburgerContext);
  const [background, setBackground] = useState('#2D233C');

  const [tags, setTags] = useState(['Next.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind']);
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('This portfolio website.');
  const { windowSize, setWindowSize } = useContext(WindowContext);

  return (
    !hamburgerActive && (
      <section
        id='projects'
        className='pr-[25.5%] pl-[25.5%] p-30 bg-[#221A2D] max-xl-1:pr-[23%] max-xl-1:pl-[23%] transition-all max-vl-1:pl-[16%] max-vl-1:pr-[16%] max-lg-1:pl-[10%] max-lg-1:pr-[10%]'
      >
        <div className='flex flex-row gap-5 justify-center items-center mb-10'>
          <h1 className='text-white text-[40px] amaranth-regular'>Projects</h1>
        </div>{' '}
        <div className='flex flex-row text-white relative'>
          <div
            className='bg-[#2D233C] w-40 h-10 rounded-tr-3xl rounded-tl-3xl z-10 flex justify-center items-center actor-regular tab-animation max-md-1:w-34 max-md-1:text-[14px] max-sm-1:w-30 max-sm-1:text-[12px] max-sm-2:w-28 max-sm-2:text-[10px] max-sm-3:w-20 max-xs-2:w-16'
            onClick={() => {
              setBackground('#2D233C');
              setTags(['Next.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind']);
              setImage('');
              setDescription('This portfolio website.');
            }}
          >
            <p>{windowSize <= 585 && windowSize != -1 ? 'Portfolio' : 'Portfolio Website'}</p>
          </div>
          <div
            className='bg-[#46365D] w-40 h-10 rounded-tr-3xl rounded-tl-3xl z-10 flex justify-center items-center actor-regular tab-animation max-md-1:w-34 max-md-1:text-[14px] max-sm-1:w-30 max-sm-1:text-[12px] max-sm-2:w-28 max-sm-2:text-[10px] max-sm-3:w-20 max-xs-2:w-16'
            onClick={() => {
              setBackground('#46365D');
              setTags([
                'React.js',
                'HTML',
                'CSS',
                'JavaScript',
                'Tailwind',
                'Bootstrap',
                'Material-UI',
              ]);
              setImage('/AirBrB.png');
              setDescription(
                'A multi user application which enables users to rent and list properties. Users are able to make reviews, filter properties and receive notifications specialised for guests + hosts.'
              );
            }}
          >
            <p>AirBrB</p>
          </div>
          <div
            className='bg-[#5E477C] w-40 h-10 rounded-tr-3xl rounded-tl-3xl z-10 flex justify-center items-center actor-regular tab-animation max-md-1:w-34 max-md-1:text-[14px] max-sm-1:w-30 max-sm-1:text-[12px] max-sm-2:w-28 max-sm-2:text-[10px] max-sm-3:w-20 max-xs-2:w-16'
            onClick={() => {
              setBackground('#5E477C');
              setTags(['HTML', 'CSS', 'JavaScript', 'Bootstrap']);
              setImage('/Slackr.png');
              setDescription(
                'A multi user messaging application where users can create and join different channels, delete, pin, edit or react to messages, recieve notifications, edit channel details and edit their profiles.'
              );
            }}
          >
            <p>Slackr</p>
          </div>
          <div
            className='bg-[#705594] w-40 h-10 rounded-tr-3xl rounded-tl-3xl z-10 flex justify-center items-center actor-regular tab-animation max-md-1:w-34 max-md-1:text-[14px] max-sm-1:w-30 max-sm-1:text-[12px] max-sm-2:w-28 max-sm-2:text-[10px] max-sm-3:w-20 max-xs-2:w-16'
            onClick={() => {
              setBackground('#705594');
              setTags(['HTML', 'CSS', 'JavaScript']);
              setImage('/WeatherProject.png');
              setDescription(
                'A website which enables users to search for a country and view the temperature (celsius or fahrenheit), 3 day forecast, wind, humidity, air quality, rain chance and the hourly forecast.'
              );
            }}
          >
            <p>{windowSize <= 585 && windowSize != -1 ? 'Weather' : 'Weather Website'}</p>
          </div>
        </div>
        <div
          className={`bg-[${background}] p-10 h-174 rounded-br-3xl rounded-bl-3xl rounded-tr-3xl drop-shadow-2xl text-white flex flex-col gap-6 max-sm-4:h-150`}
        >
          <div className='flex flex-row flex-wrap gap-2'>
            {tags?.map((tag, idx) => (
              <div
                key={idx}
                className='bg-[#9584aa52] rounded-full drop-shadow-xl/25 backdrop-blur-md text-[15px] p-2 font-medium transition delay-150 duration-300 ease-in-out hover:scale-110'
              >
                {tag}
              </div>
            ))}
          </div>

          <div className='flex flex-col max-xl:flex-col gap-14 items-center max-xl:gap-6'>
            <p className='actor-regular text-[22px] max-sm-4:text-[18px] max-sm-5:text-[15px]'>
              {description}
            </p>
            <img
              className='rounded-2xl w-300 h-100 object-cover max-md-2:h-80 max-sm-4:h-70 max-sm-5:h-60 max-xs-3:h-50'
              src={image}
            />
          </div>
        </div>
      </section>
    )
  );
}
