'use client';
import React, { useContext } from 'react';
import { HamburgerContext } from './HamburgerContext';

export default function About() {
  const { hamburgerActive } = useContext(HamburgerContext);

  return (
    !hamburgerActive && (
      <section
        id='about'
        className='pr-[25.5%] pl-[25.5%] p-30 bg-[#221A2D] max-xl-1:pr-[23%] max-xl-1:pl-[23%] transition-all max-vl-1:pl-[16%] max-vl-1:pr-[16%] max-lg-1:pl-[10%] max-lg-1:pr-[10%]'
      >
        <div className='flex flex-row gap-5 justify-center items-center mb-10'>
          <img src='/google-docs-2.png' className='w-10 h-10' />
          <h1 className='text-white text-[40px] amaranth-regular'>
            About <span className='text-[#6D5286]'>Me</span>
          </h1>
        </div>
        <div className='flex flex-row gap-20 items-center max-3xl:flex-col-reverse'>
          <div className='flex flex-col gap-10 justify-center text-white text-xl actor-regular'>
            <div className='flex flex-col gap-4'>
              <p className='leading-10'>
                I am currently pursuing a bachelor of computer science at the University of New
                South Wales (<span className='text-[#6D5286] font-medium'>UNSW</span>).
              </p>
              <p className='leading-10'>
                I have a strong ambition for software engineering and programming. I particularly
                enjoy working on front-end web development projects. I am extremely determined,
                conscientious, hard working and methodical.
              </p>

              <p className='leading-10'>
                During any time off I enjoy working on coding projects, playing video games and
                crocheting. My resume can be viewed by downloading it here.{' '}
                <span className='p-1'>
                  <button className='bg-[#2D3252] border border-[#49517D] rounded-3xl p-2 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-[#49517D]'>
                    <img src='/download.png' className='w-4 h-4' />
                  </button>
                </span>
              </p>
            </div>

            <div className='flex flex-row gap-4'>
              <div className='border border-[#4E3B6A] bg-[#3B2E52] rounded-3xl text-[15px] p-2 font-medium transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-[#4E3B6A]'>
                Comp Sci @ UNSW
              </div>
              <div className='border border-[#4E3B6A] bg-[#3B2E52] rounded-3xl text-[15px] p-2 font-medium transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-[#4E3B6A]'>
                Frontend Development
              </div>
            </div>
          </div>

          <img
            src='/temporary-profile.jpg'
            className='rounded-xl shadow-xl object-cover w-80 h-80'
          />
        </div>
      </section>
    )
  );
}
