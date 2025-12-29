'use client';
import React, { useContext, useEffect, useState } from 'react';
import { HamburgerContext } from './HamburgerContext';
import LiquidGlass from 'liquid-glass-react';

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(-1);
  const [hashLocation, setHashLocation] = useState('');
  const { hamburgerActive, setHamburgerActive } = useContext(HamburgerContext);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });

    window.addEventListener('hashchange', () => {
      const newHash = window.location.hash;
      setHashLocation(window.location.hash);
      console.log(newHash);
    });
  }, []);

  useEffect;

  return (
    <>
      {hamburgerActive && (
        <div className='absolute z-10 w-full h-svh bg-[#2E233D] flex flex-col'>
          <div>
            <button
              className='w-8 h-8 mt-9.5 transition-all flex justify-center items-center ml-10 hover:cursor-pointer'
              onClick={() => {
                setHamburgerActive(false);
              }}
            >
              <img src='/close-2.png' className='w-8 h-8' />
            </button>
          </div>
          <div className='flex flex-col text-white font-sans text-4xl text-center flex-1'>
            <div className='flex flex-col h-full gap-5 justify-center items-center'>
              <a
                className={`hover:cursor-pointer`}
                href='#home'
                onClick={() => {
                  setHamburgerActive(false);
                }}
              >
                Home
              </a>
              <a
                className='hover:cursor-pointer'
                href='#about'
                onClick={() => {
                  setHamburgerActive(false);
                }}
              >
                About
              </a>
              <a
                className='hover:cursor-pointer'
                href='#education'
                onClick={() => {
                  setHamburgerActive(false);
                }}
              >
                Education
              </a>
              <a
                className='hover:cursor-pointer'
                href='#skills'
                onClick={() => {
                  setHamburgerActive(false);
                }}
              >
                Skills
              </a>
              <a
                className='hover:cursor-pointer'
                href='#experience'
                onClick={() => {
                  setHamburgerActive(false);
                }}
              >
                Experience
              </a>
              <a
                className='hover:cursor-pointer'
                href='#projects'
                onClick={() => {
                  setHamburgerActive(false);
                }}
              >
                Projects
              </a>
            </div>
          </div>
        </div>
      )}

      {windowWidth != -1 && windowWidth <= 760 && (
        <button
          className='backdrop-blur-md w-16 h-16 transition-all flex justify-center items-center ml-10 hover:cursor-pointer fixed top-9.5 bg-[#392d4952] rounded-full'
          onClick={() => {
            setHamburgerActive(true);
          }}
        >
          <img src='/hamburger.png' className='w-8 h-8' />
        </button>
      )}

      {windowWidth != -1 && windowWidth > 760 && (
        <div className='right-[24%] left-[24%] flex justify-center items-center transition-all fixed top-9.5 z-100'>
          <div className='h-18 bg-[#392d4952] rounded-full drop-shadow-xl/25 backdrop-blur-md text-white font-sans text-xl flex gap-10 px-10 justify-center items-center w-200 transition-all'>
            <a
              className={`hover:cursor-pointer transition-all ${
                hashLocation === '#home' ? 'active-nav' : ''
              }`}
              href='#home'
            >
              Home
            </a>
            <a
              className={`hover:cursor-pointer transition-all ${
                hashLocation === '#about' ? 'active-nav' : ''
              }`}
              href='#about'
            >
              About
            </a>
            <a
              className={`hover:cursor-pointer transition-all ${
                hashLocation === '#education' ? 'active-nav' : ''
              }`}
              href='#education'
            >
              Education
            </a>
            <a
              className={`hover:cursor-pointer transition-all ${
                hashLocation === '#skills' ? 'active-nav' : ''
              }`}
              href='#skills'
            >
              Skills
            </a>
            <a
              className={`hover:cursor-pointer transition-all ${
                hashLocation === '#experience' ? 'active-nav' : ''
              }`}
              href='#experience'
            >
              Experience
            </a>
            <a
              className={`hover:cursor-pointer transition-all ${
                hashLocation === '#projects' ? 'active-nav' : ''
              }`}
              href='#projects'
            >
              Projects
            </a>
          </div>
        </div>
      )}
    </>
  );
}
