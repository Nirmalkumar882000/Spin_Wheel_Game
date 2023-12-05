import { FC, useState } from "react";
import "./index.css";
// header icons
import setting from "/user/settingIcon.png";
import instraction from "/user/instractionIcon.png";
import profile from "/user/profileIcon.png";
import title from "/user/title.png";
// picture frames, avathar, button
import avathar from "/user/avathar.png";
import frames from "/modal/frames.png";
import frame1 from "/modal/frame1.png";
import cancel from "/modal/cancel.png";
import frame from "/user/frame.png";
import coin from "/coins/empty.png"

// Text and titles
import Text from "/modal/instraction.png";
import Text1 from "/modal/list.png";
import Text2 from "/modal/setting.png";
import Text3 from "/modal/music.png";
import minus from "/modal/minus.png";
import plus from "/modal/plus.png";
import Text4 from "/modal/sound.png";

interface volumes {
  setVolume: any;
  volumes: any;
  sound: number;
  setsound: any;
}

const Header: FC<volumes> = ({ setVolume, volumes, sound, setsound }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  // VOLUME CONTROLLER
  const step = 20;

  // MUSIC CONTROL SETTINGS
  const handlePlusClick = () => {
    if (volumes <= 100) {
      // console.log(volumes)
      setVolume(volumes + step);
      // setVolume(volumes + step)
    } else {
      setVolume(100);
      // Ensure the value doesn't exceed the maximum (100).
    }
  };

  const handleMinusClick = () => {
    console.log(volumes);
    if (volumes >= 0) {
      // setVolume(setSliderValue)
      setVolume(volumes - step);
    } else {
      setVolume(0);

      // Ensure the value doesn't exceed the maximum (100).
    }
  };

  // Function to handle slider value change.
  const handleSliderChange = (event: any) => {
    setVolume(event.target.value);
  };

  // 2
  // SOUND EFFECT SETTINGS CONTROL

  const handlePlusClick1 = () => {
    if (sound <= 100) {
      console.log(sound);
      // setSliderValue1(sliderValue1 + step);
      setsound(sound + step);
    } else {
      setsound(100); // Ensure the value doesn't exceed the maximum (100).
    }
  };

  // Function to handle the minus button click.
  const handleMinusClick2 = () => {
    console.log(sound);
    if (sound >= 0) {
      setsound(sound - step);
    } else {
      setsound(0);
      // Ensure the value doesn't exceed the maximum (100).
    }
  };

  // Function to handle slider value change.
  const handleSliderChange2 = (event: any) => {
    setsound(event.target.value);
  };

  return (
    <>
      <div className="flex justify-between ">
        <div className="mt-4 ml-4 text-5xl font-black text-white sm:mt-4 md:mt-4 lg:mt-5 sm:text-2xl md:text-2xl lg:text-3xl font-gamer timer">
          10:00
        </div>
        <div className="flex flex-row">
        <img src={coin} className="w-10 h-10 mt-5 sm:w-8 sm:h-8 md:w-8 md:h-8"  alt="coin"/>
        <p className="mt-6 ml-4 font-sans text-2xl text-white sm:mt-5 sm:ml-2 md:w-6 md:h-6 md:ml-4 color ">50000</p>
        </div>
        <div className="mt-1 mb-2 ml-8 sm:ml-14 sm:mt-1 md:mr-16 lg:ml-20 md:mt-0 sm:mb-0 md:mb-0 ">
          <img
            src={title}
            alt="title"
            className="h-24 mr-80 w-96 sm:w-60 sm:h-12 sm:mt-1 sm:-ml-20 sm:mr-0 md:w-60 md:mr-0 md:h-12 md:-ml-8 md:mt-2 lg:w-72 lg:h-16 lg:mr-6 lg:-ml-32 lg:mt-4 animate-jelly xl:-ml-32 xl:mr-8 "
          />  
        </div>
        <div className="flex flex-row md:mr-3">
          <img
            src={setting}
            alt="setting"
            className="mt-4 mr-3 w-14 h-14 sm:w-8 md:w-8 lg:w-10 sm:h-8 md:h-8 lg:h-10 animate-jelly"
            onClick={() => setShowModal2(true)}
          />
          <img
            src={instraction}
            alt="setting"
            className="mt-4 mr-3 w-14 h-14 sm:w-8 md:w-8 lg:w-10 sm:h-8 md:h-8 lg:h-10 animate-jelly"
            onClick={() => setShowModal1(true)}
          />
          <img
            src={profile}
            alt="setting"
            className="mt-4 mr-3 w-14 h-14 sm:w-8 md:w-8 lg:w-10 sm:h-8 md:h-8 lg:h-10 profile animate-jelly"
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>

      {/* Profile Picture Modal  */}

      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center focus:outline-none backdrop-blur-sm hover:backdrop-blur-lg">
            <img
              src={frames}
              alt="frame"
              className="w-2/5 sm:w-96 md:w-96 lg:w-2/3 xl:w-3/6 "
            />
            {/* Title */}
            <img
              src={Text1}
              alt="title"
              className="absolute w-64 mb-28 -mt-80 sm:mb-0 sm:w-44 sm:-mt-60 md:mb-0 md:w-44 md:-mt-60 lg:w-80 lg:mb-28 xl:w-64 xl:-mt-80"
            />
            {/* Profile Picture */}
            <div className="absolute flex flex-row flex-wrap w-2/6 mt-10 overflow-y-scroll xl:w-2/6 h-80 xl:h-64 no-scrollbar content sm:w-80 sm:h-48 md:w-96 md:h-48 md:ml-6 lg:w-2/4 lg:h-72 ">
              {Array(100)
                .fill(null)
                .map((_, index) => (

                  <div className="rahul">
                  <div
                    key={index}
                    className="flex flex-nowrap p-1.5 ml-8 border sm:ml-8 md:ml-7 xl:ml-3 lg:ml-5 border-rose-200 hover:bg-gray-100"
                  >
                    <img
                      src={frame}
                      alt="frames"
                      className="absolute mt-4 w-28 h-28 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-24 xl:h-24"
                    />
                    <img
                      src={avathar}
                      alt="user"
                      className="w-20 h-20 mt-8 ml-4 xl:mr-4 xl:ml-4 sm:w-12 sm:h-12 sm:ml-2 sm:mt-6 md:w-14 md:h-14 md:ml-3 md:mt-7 lg:w-20 lg:h-20 xl:w-16 xl:h-16 lg:ml-4 xl:mt-8"
                    />
                  </div>
                  <div className="flex p-1 mt-5 ml-8 truncate border flex-nowrap xl:mt-5 xl:ml-8 sm:mt-3 sm:ml-10 md:mt-2 md:ml-11 lg:mt-4 lg:ml-10 nirmal hover:text-clip hover:text-red-500">
                      User{index + 1}
                    </div>
                  </div>
                  
                ))}
            </div>

            <div className="absolute -mb-96 sm:-mb-36 md:-mb-40 xl:-mb-96 xl:pt-28">
              <img
                src={cancel}
                className="w-16 h-16 mt-32 xl:w-20 xl:h-20 xl:mt-7 xl:ml-2 sm:w-10 sm:h-10 md:h-12 md:w-12 animate-jelly "
                alt="cancel"  
                onClick={() => setShowModal(false)}
              />
            </div>
          </div>
        </>
      ) : null}

      {/* Questions Mark Modal */}

      {showModal1 ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center focus:outline-none backdrop-blur-sm hover:backdrop-blur-lg">
            <img
              src={frames}
              alt="frame"
              className="w-2/5 sm:w-96 md:w-96 lg:w-3/5 xl:w-3/6"
            />
            <img
              src={Text}
              alt="title"
              className="absolute mb-8 sm:mb-0 sm:w-44 sm:-mt-60 w-72 -mt-80 md:mb-0 md:w-44 md:-mt-60 lg:w-80 lg:mb-20 xl:-mt-96 "
            />
            <div className="absolute mt-10 overflow-y-scroll h-80 xl:h-64 no-scrollbar content xl:ml-96 xl:mr-96 xl:pl-28 xl:pr-20 xl:mt-10 sm:ml-56 sm:h-48 sm:mt-8 sm:mr-52 md:ml-80 md:h-48 md:mt-8 md:mr-72 sm:w-72 md:w-72 lg:w-96 lg:h-80 lg:ml-96 lg:mr-96 ">
              <p className="font-serif font-extrabold mt-7 sm:mt-5 md:mt-5 md:text-xs xl:text-sm text sm:text-xs">
                1.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae aliquam augue. Aenean vel massa eget augue pharetra dictum
                in at ipsum.
              </p>
              <p className="mt-6 font-serif font-extrabold sm:mt-4 md:text-xs xl:text-sm text sm:text-xs">
                2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae aliquam augue. Aenean vel massa eget augue pharetra dictum
                in at ipsum.
              </p>
              <p className="mt-6 font-serif font-extrabold sm:mt-4 md:text-xs xl:text-sm text sm:text-xs">
                3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae aliquam augue. Aenean vel massa eget augue pharetra dictum
                in at ipsum.
              </p>
              <p className="mt-6 font-serif font-extrabold sm:mt-4 md:text-xs xl:text-sm text sm:text-xs">
                3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae aliquam augue. Aenean vel massa eget augue pharetra dictum
                in at ipsum.
              </p>
              <p className="mt-6 font-serif font-extrabold sm:mt-4 md:text-xs xl:text-sm text sm:text-xs">
                3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae aliquam augue. Aenean vel massa eget augue pharetra dictum
                in at ipsum.
              </p>
              <p className="mt-6 font-serif font-extrabold sm:mt-4 md:text-xs xl:text-sm text sm:text-xs">
                3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae aliquam augue. Aenean vel massa eget augue pharetra dictum
                in at ipsum.
              </p>
              <p className="mt-6 font-serif font-extrabold sm:mt-4 md:text-xs xl:text-sm mb-7 xl:mb-7 text sm:text-xs">
                3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae aliquam augue. Aenean vel massa eget augue pharetra dictum
                in at ipsum.
              </p>
            </div>
            <div className="absolute -mb-96 sm:-mb-36 md:-mb-40 lg:-mb-80 xl:-mb-96 xl:pt-28">
              <img
                src={cancel}
                className="w-16 h-16 mt-32 xl:w-20 xl:h-20 xl:mt-7 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-jelly"
                alt="cancel"
                onClick={() => setShowModal1(false)}
              />
            </div>
          </div>
        </>
      ) : null}

      {/* Settings Modal */}

      {showModal2 ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center focus:outline-none backdrop-blur-sm hover:backdrop-blur-lg">
            <img
              src={frame1}
              alt="frame"
              className="w-2/5 sm:w-96 md:w-96 lg:w-3/5 xl:w-3/6"
            />
            <img
              src={Text2}
              alt="title"
              className="absolute w-64 mb-8 -mt-80 sm:-mt-52 sm:w-40 xl:-mt-96 md:w-40 md:-mt-52"
            />

            {/* Volume setting */}
            <div className="absolute sm:mb-2">
              <img
                src={Text3}
                alt="title"
                className="w-40 ml-16 -mt-32 sm:w-24 sm:-mt-16 sm:ml-20 md:ml-20 md:-mt-16 md:w-24"
              />
              <div className="flex flex-row mt-8 sm:mt-3 md:mt-3">
                <img
                  src={minus}
                  alt="minus"
                  className="absolute -mt-2 -ml-5 w-14 h-14"
                  onClick={handleMinusClick}
                />
                <div className=" range">
                  <input
                    disabled
                    step={step}
                    type="range"
                    value={volumes}
                    onChange={handleSliderChange}
                  />
                </div>
                <img
                  src={plus}
                  alt="minus"
                  className="absolute ml-56 -mt-2 w-14 h-14"
                  onClick={handlePlusClick}
                />
                {/* <p>Value: {sliderValue}</p> */}
              </div>
            </div>

            {/* sound effect */}
            <div className="absolute mt-72 md:mt-48">
              <img
                src={Text4}
                alt="music"
                className="w-40 ml-16 -mt-32 sm:w-24 sm:-mt-32 sm:ml-20 md:ml-20 md:-mt-16 md:w-24"
              />
              <div className="flex flex-row mt-8 sm:mt-4 md:mt-2">
                <img
                  src={minus}
                  alt="minus"
                  className="absolute -mt-2 -ml-5 w-14 h-14"
                  onClick={handleMinusClick2}
                />
                <div className="range">
                  <input
                    disabled
                    step={step}
                    type="range"
                    value={sound}
                    onChange={handleSliderChange2}
                  />
                </div>
                <img
                  src={plus}
                  alt="minus"
                  className="absolute ml-56 -mt-2 w-14 h-14"
                  onClick={handlePlusClick1}
                />
                {/* <p>Value: {sliderValue}</p> */}
              </div>
            </div>

            <div className="absolute -mb-96 sm:-mb-36 xl:-mb-96 md:-mb-40 lg:-mb-80 lg:pt-2">
              <img
                src={cancel}
                className="w-20 h-20 mt-32 xl:w-20 xl:h-20 xl:mt-50 xl:ml-2 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-jelly"
                alt="cancel"
                onClick={() => setShowModal2(false)}
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Header;
