'use client';
import React, { useContext } from 'react';
import { HamburgerContext } from './HamburgerContext';
import SkillsGrid from './SkillsGrid';

export default function Skills() {
  const { hamburgerActive } = useContext(HamburgerContext);

  return (
    !hamburgerActive && (
      <section
        id='skills'
        className='pr-[25.5%] pl-[25.5%] p-30 bg-[#221A2D] max-xl-1:pr-[23%] max-xl-1:pl-[23%] transition-all max-vl-1:pl-[16%] max-vl-1:pr-[16%] max-lg-1:pl-[10%] max-lg-1:pr-[10%]'
      >
        <div className='flex flex-row gap-5 justify-center items-center mb-10'>
          <h1 className='text-white text-[40px] amaranth-regular'>Skills</h1>
        </div>

        <div className='flex flex-col gap-10 -z-100'>
          <div className='bg-[#2E233D] rounded-xl shadow-xl p-8 transition delay-150 duration-300 ease-in-out hover:scale-104 max-xs-17:p-6 max-xs-16:p-4'>
            <h1 className='text-white amaranth-regular text-3xl text-center mb-8'>Languages</h1>
            <div className='flex flex-row flex-wrap gap-6 justify-center items-center max-xs-16:gap-4'>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./C.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>C</h1>
                    <h1 className='actor-regular text-[15px]'>January 2024 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./Java.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Java</h1>
                    <h1 className='actor-regular text-[15px]'>January 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./Javascript.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Javascript</h1>
                    <h1 className='actor-regular text-[15px]'>June 2024 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./HTML.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>HTML</h1>
                    <h1 className='actor-regular text-[15px]'>September 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./CSS.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>CSS</h1>
                    <h1 className='actor-regular text-[15px]'>September 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./SQL.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>SQL</h1>
                    <h1 className='actor-regular text-[15px]'>June 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./R.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>R</h1>
                    <h1 className='actor-regular text-[15px]'>January 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./Assembly.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Assembly</h1>
                    <h1 className='actor-regular text-[15px]'>June 2024 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./Latex.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Latex</h1>
                    <h1 className='actor-regular text-[15px]'>January 2024 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./Markdown.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Markdown</h1>
                    <h1 className='actor-regular text-[15px]'>January 2025 onwards</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#2E233D] rounded-xl shadow-xl p-8 transition delay-150 duration-300 ease-in-out hover:scale-104 max-xs-17:p-6 max-xs-16:p-4'>
            <h1 className='text-white amaranth-regular text-3xl text-center mb-8'>
              Frameworks & Libraries
            </h1>
            <div className='flex flex-row flex-wrap gap-6 justify-center items-center max-xs-16:gap-4'>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./Next.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Next.js</h1>
                    <h1 className='actor-regular text-[15px]'>December 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./React.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>React.js</h1>
                    <h1 className='actor-regular text-[15px]'>September 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./Tailwind.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Tailwind</h1>
                    <h1 className='actor-regular text-[15px]'>October 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./Bootstrap.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Bootstrap</h1>
                    <h1 className='actor-regular text-[15px]'>October 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./MaterialUI.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Material-UI</h1>
                    <h1 className='actor-regular text-[15px]'>October 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./Git.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Git</h1>
                    <h1 className='actor-regular text-[15px]'>June 2024 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./Cypress.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Cypress</h1>
                    <h1 className='actor-regular text-[15px]'>October 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./MomentJS.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Moment.js</h1>
                    <h1 className='actor-regular text-[15px]'>October 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./JUnit.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>JUnit</h1>
                    <h1 className='actor-regular text-[15px]'>January 2025 onwards</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#2E233D] rounded-xl shadow-xl p-8 transition delay-150 duration-300 ease-in-out hover:scale-104 max-xs-17:p-6 max-xs-16:p-4'>
            <h1 className='text-white amaranth-regular text-3xl text-center mb-8'>Softwares</h1>
            <div className='flex flex-row flex-wrap gap-6 justify-center items-center max-xs-16:gap-4'>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./VisualStudio.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Visual Studio Code</h1>
                    <h1 className='actor-regular text-[15px]'>January 2024 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./RStudio.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>R Studio</h1>
                    <h1 className='actor-regular text-[15px]'>January 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./SqlDeveloper.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>SQL Developer</h1>
                    <h1 className='actor-regular text-[15px]'>June 2025 onwards</h1>
                  </div>
                </div>
              </div>
              <div className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src='./Postman.png' className='rounded-xl' />
                  </div>
                  <div className='flip-card-back flex justify-center items-center flex-col'>
                    <h1 className='actor-regular font-semibold text-lg'>Postman</h1>
                    <h1 className='actor-regular text-[15px]'>June 2024 onwards</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
