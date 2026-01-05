'use client';
import React, { useContext, useEffect, useState } from 'react';
import { HamburgerContext } from './HamburgerContext';

export default function Home() {
  const { hamburgerActive } = useContext(HamburgerContext);

  const [lightsActive, setLightsActive] = useState(false);
  const [switchClicked, setSwitchClicked] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerGoal, setTimerGoal] = useState(1000);

  useEffect(() => {
    let intervalId = null;

    if (timer <= timerGoal) {
      intervalId = setInterval(() => {
        setLightsActive((prev) => !prev);
      }, 200);
    }

    return () => {
      clearInterval(intervalId);
      setTimer((prev) => prev + 200);
    };
  }, [switchClicked, lightsActive]);

  return (
    !hamburgerActive && (
      <section
        id='home'
        className='pt-57 pr-[25.5%] pl-[25.5%] p-30 max-xl-1:pr-[23%] max-xl-1:pl-[23%] transition-all max-vl-1:pl-[16%] max-vl-1:pr-[16%] max-lg-1:pl-[10%] max-lg-1:pr-[10%]'
      >
        <div className='flex flex-col'>
          <div className='flex flex-row justify-center items-center relative gap-40 max-xl:gap-30 max-vl-2:gap-24 max-lg:gap-18 max-lg-3:gap-14'>
            <div className='flex flex-col gap-10 max-md-2:pt-15'>
              <div className='flex flex-row gap-20 max-lg:gap-12 max-md-2:hidden'>
                <div></div>
                <div>
                  <div
                    className={`arrow-up blue-arrow-up transition-all ${
                      lightsActive == true ? 'led-light-arrow-up' : ''
                    }`}
                  ></div>
                  <div
                    className={`arrow-down blue-arrow-down transition-all ${
                      lightsActive == true ? 'led-light-arrow-down' : ''
                    }`}
                  ></div>
                </div>
              </div>
              <div className='flex flex-row gap-20 max-lg:gap-12 max-sm-7:hidden'>
                <div>
                  <div
                    className={`arrow-up magenta-arrow-up transition-all ${
                      lightsActive == true ? 'led-light-arrow-up' : ''
                    }`}
                  ></div>
                  <div
                    className={`arrow-down magenta-arrow-down transition-all ${
                      lightsActive == true ? 'led-light-arrow-down' : ''
                    }`}
                  ></div>
                </div>
                <div className='max-md-2:hidden'></div>
              </div>
            </div>

            <div className='flex flex-col gap-2 text-center text-[#8c77a820]'>
              <h2 className={`text-[40px] ${lightsActive == true ? 'led-light-text' : ''}`}>
                Hi! I'm
              </h2>
              <div
                className={`border-4 rounded-4xl flex justify-center items-center ${
                  lightsActive == true ? 'border-led-light' : ''
                }`}
              >
                <h1
                  className={`text-[200px] neonderthaw-regular px-4 transition-all mt-[-62px] max-vl-2:text-[190px] max-vl-2:mt-[-58px] max-lg-2:text-[180px] max-lg-2:mt-[-56px] max-lg-3:text-[170px] max-lg-3:mt-[-52px] max-md-3:text-[150px] max-md-3:mt-[-46px] max-sm-7:text-[178px] max-sm-7:mt-[-54px] max-sm-3:text-[164px] max-sm-3:mt-[-51px] max-xs-9:text-[154px] max-xs-9:mt-[-48px] max-xs-10:text-[146px] max-xs-10:mt-[-45px] max-xs-11:text-[136px] max-xs-11:mt-[-42px] max-xs-2:text-[125px] max-xs-2:mt-[-38px] max-xs-12:text-[115px] max-xs-12:mt-[-35px] max-xs-13:text-[105px] max-xs-13:mt-[-32px] ${
                    lightsActive == true ? 'led-light-text' : ''
                  }`}
                >
                  Grace
                </h1>
              </div>
            </div>

            <div className='flex flex-col gap-10 max-md-2:pt-15'>
              <div className='flex flex-row gap-20 max-lg:gap-12 max-md-2:hidden'>
                <div>
                  <div
                    className={`arrow-up pink-arrow-up transition-all ${
                      lightsActive == true ? 'led-light-arrow-up' : ''
                    }`}
                  ></div>
                  <div
                    className={`arrow-down pink-arrow-down transition-all ${
                      lightsActive == true ? 'led-light-arrow-down' : ''
                    }`}
                  ></div>
                </div>
                <div></div>
              </div>
              <div className='flex flex-row gap-20 max-lg:gap-12 max-sm-7:hidden'>
                <div className='max-md-2:hidden'></div>
                <div>
                  <div
                    className={`arrow-up light-blue-arrow-up transition-all ${
                      lightsActive == true ? 'led-light-arrow-up' : ''
                    }`}
                  ></div>
                  <div
                    className={`arrow-down light-blue-arrow-down transition-all ${
                      lightsActive == true ? 'led-light-arrow-down' : ''
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className='pl-70 max-4xl:pl-0 max-xs-10:pr-4 max-xs-11:pr-10'>
            <img
              className='mt-[-1px]'
              src='/light.svg'
              onClick={() => {
                setTimer(0);

                if (!lightsActive) {
                  setTimerGoal(1200);
                } else if (lightsActive) {
                  setTimerGoal(800);
                }

                setSwitchClicked((prev) => !prev);
              }}
            />
          </div>
        </div>
      </section>
    )
  );
}
