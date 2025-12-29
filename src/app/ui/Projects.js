'use client';
import React, { useContext } from 'react';
import { HamburgerContext } from './HamburgerContext';
import BasicTabs from './BasicTabs';

export default function Projects() {
  const { hamburgerActive } = useContext(HamburgerContext);

  return (
    !hamburgerActive && (
      <section id='projects' className='pr-17.5 pl-17.5'>
        <p className='text-white'>PROJECTS</p>
        <BasicTabs />
      </section>
    )
  );
}
