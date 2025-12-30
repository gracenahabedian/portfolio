'use client';
import React, { useContext } from 'react';
import { HamburgerContext } from './HamburgerContext';

export default function Experience() {
  const { hamburgerActive } = useContext(HamburgerContext);

  return (
    !hamburgerActive && (
      <section
        id='experience'
        className='pr-[25.5%] pl-[25.5%] p-30 flex justify-center items-center flex-col max-xl-1:pr-[23%] max-xl-1:pl-[23%] transition-all max-vl-1:pl-[16%] max-vl-1:pr-[16%] max-lg-1:pl-[10%] max-lg-1:pr-[10%]'
      >
        <div className='flex flex-row gap-5 justify-center items-center mb-10'>
          <h1 className='text-white text-[40px] amaranth-regular'>Experience</h1>
        </div>
        <div className='w-full flex gap-4 text-white justify-center items-center bg-[#2E233D] rounded-3xl pr-10 transition delay-150 duration-300 ease-in-out hover:scale-104 max-xs-6:pr-6'>
          <div className='bg-[#1F1529] text-white border border-[#614583] rounded-3xl p-8 w-70 flex justify-center flex-col gap-4 drop-shadow-2xl max-sm:w-80 max-xs-5:p-6'>
            <div className='flex flex-col gap-1'>
              <h1 className='text-[#8B6AB7] font-semibold text-2xl max-xs-7:text-xl'>IT Admin</h1>
              <h2 className='font-thin'>Blankisa</h2>
              <h2 className='font-medium max-sm-4:text-[13px] max-xs-6:text-[11px]'>
                Since April 2025
              </h2>
            </div>
          </div>
          <div className='w-full'>
            <ul className='list-disc pl-10 flex flex-col gap-1 text-[13px] max-sm-4:text-[11px] max-xs-6:text-[10px] max-xs-6:pl-6'>
              <li>Monitor Systems</li>
              <li>Set up new technology</li>
              <li>Assist staff with IT issues</li>
            </ul>
          </div>
        </div>
      </section>
    )
  );
}
