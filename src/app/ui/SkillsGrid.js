import React from 'react';

export default function SkillsGrid({ children }) {
  return (
    <div
      className='grow shrink basis-0 grid gap-x-5 gap-y-5
     grid-cols-[repeat(auto-fit,minmax(100px,1fr))] place-items-center'
    >
      {children}
    </div>
  );
}
