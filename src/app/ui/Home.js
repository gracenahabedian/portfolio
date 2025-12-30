'use client';
import React, { useContext } from 'react';
import { HamburgerContext } from './HamburgerContext';

export default function Home() {
  const { hamburgerActive } = useContext(HamburgerContext);

  return (
    !hamburgerActive && (
      <section id='home' className='pt-37.5 pr-40 pl-40'>
        <h1 className='text-white'>HOME</h1>
      </section>
    )
  );
}
