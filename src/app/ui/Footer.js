import React from 'react';

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#181121',
        width: '100svw',
        height: '180px',
        margin: '0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <p className='text-[#ffffffd1] actor-regular'>Copyright © Grace Nahabedian</p>
      <p className='text-[#ffffffd1] actor-regular text-[14px]'>
        Created using HTML, CSS, JavaScript and Next.js
      </p>
    </div>
  );
}
