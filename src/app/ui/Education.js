'use client';
import React, { useContext } from 'react';
import { HamburgerContext } from './HamburgerContext';
import FramerMotionCarousel from './FramerMotionCarousel';

export default function Education() {
  const { hamburgerActive } = useContext(HamburgerContext);

  return (
    !hamburgerActive && (
      <section
        id='education'
        className='pr-[25.5%] pl-[25.5%] p-30 flex justify-center items-center flex-col max-xl-1:pr-[23%] max-xl-1:pl-[23%] transition-all max-vl-1:pl-[16%] max-vl-1:pr-[16%] max-lg-1:pl-[10%] max-lg-1:pr-[10%]'
      >
        <div className='flex flex-row gap-5 justify-center items-center mb-10'>
          <h1 className='text-white text-[40px] amaranth-regular'>Education</h1>
        </div>
        <div className='flex flex-row w-full items-center justify-center gap-8'>
          <div className='transition delay-150 duration-300 ease-in-out hover:scale-104'>
            <img className='object-cover w-20 h-70 rounded-3xl right-250' src='/UNSW-2.png' />
          </div>
          <div className='transition delay-150 duration-300 ease-in-out hover:scale-104 text-white border border-[#614583] rounded-3xl p-8 w-fit flex justify-center flex-col gap-8 drop-shadow-2xl'>
            <div className='flex flex-col gap-1'>
              <h1 className='text-[#8B6AB7] font-semibold text-2xl'>
                Bachelor of Computer Science
              </h1>
              <h2 className='font-medium'>UNSW (University of New South Wales)</h2>
              <h2 className='font-thin'>Feb 2024 - Nov 2026</h2>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <h2 className='font-medium text-[#AA77E8] text-xl'>Commended Coursework</h2>
                <p>
                  WAM: <span>Distinction</span> 78.313
                </p>
              </div>

              <div className='w-full h-full flex justify-center'>
                <FramerMotionCarousel
                  itemData={[
                    ['COMP1511', 'Programming Fundamentals', '88'],
                    ['COMP1531', 'Software Engineering Fundamentals', '99'],
                    ['COMP2511', 'Object-Oriented Design & Programming', '85'],
                    ['COMP3511', 'Human Computer Interaction', '91'],
                    ['COMP6080', 'Web Front-End Programming', '93'],
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
