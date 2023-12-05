import { FC, useEffect, useState } from "react";
import "./index.css";
import StrawBerryImg from "/fruits/straberry.png";
import graphsImg from "/fruits/Graphs.png"
import bleechImg from "/fruits/bleechIcon.png"
import bananaImg from "/fruits/bananaIcon.png"
import watermelonImg from "/fruits/waterMelonIcon.png"
import apple from "/fruits/appleIcon.png";
import board from "/fruits/board.png";
import frame from "/user/frame.png";
import avatar from "/user/avathar.png";
import SpinWheel from "../SpinWheel";
import useSound from 'use-sound';
import music from "../../assets/sound/merge2.mp3"
import music2 from "../../assets/sound/final.mp3"
import music3 from"../../assets/sound/coin sound.wav"

interface GameAreaProps {
  children: React.ReactNode;
}
    
const GameArea: FC<any> = ({volume}) => {

  const [play] = useSound(music,{
    volume
  });
  const [play1] = useSound(music2,{
    volume
  });
  const [play2] = useSound(music3,{
    volume
  });

 
// Coin Animation fuctional
  const handleClick1 = (event:any) => {
    play2();
    const div = event.target;
  
    // Create and animate multiple coins
    const numCoins = 5; // Adjust the number of coins as needed
    for (let i = 0; i < numCoins; i++) {
      setTimeout(() => {
        createCoinAnimation(div);
      }, i * 100); // Delay each coin's animation
    }
  };
  const handleClick2 = (event:any) => {
    play2();
    const div = event.target;
  
    // Create and animate multiple coins
    const numCoins = 5; // Adjust the number of coins as needed
    for (let i = 0; i < numCoins; i++) {
      setTimeout(() => {
        createCoinAnimation(div);
      }, i * 100); // Delay each coin's animation
    }
  };
  const handleClick3 = (event:any) => {
    play2();
    const div = event.target;
  
    // Create and animate multiple coins
    const numCoins = 5; // Adjust the number of coins as needed
    for (let i = 0; i < numCoins; i++) {
      setTimeout(() => {
        createCoinAnimation(div);
      }, i * 100); // Delay each coin's animation
    }
  };
  const handleClick4 = (event:any) => {
    play2();
    const div = event.target;
  
    // Create and animate multiple coins
    const numCoins = 5; // Adjust the number of coins as needed
    for (let i = 0; i < numCoins; i++) {
      setTimeout(() => {
        createCoinAnimation(div);
      }, i * 100); // Delay each coin's animation
    }
  };
  const handleClick5 = (event:any) => {
    play2();
    const div = event.target;
  
    // Create and animate multiple coins
    const numCoins = 5; // Adjust the number of coins as needed
    for (let i = 0; i < numCoins; i++) {
      setTimeout(() => {
        createCoinAnimation(div);
      }, i * 100); // Delay each coin's animation
    }
  };
  const handleClick6 = (event:any) => {
    play2();
    const div = event.target;
  
    // Create and animate multiple coins
    const numCoins = 5; // Adjust the number of coins as needed
    for (let i = 0; i < numCoins; i++) {
      setTimeout(() => {
        createCoinAnimation(div);
      }, i * 100); // Delay each coin's animation
    }
  };

  const createCoinAnimation = (div:any) => {
    // Create a new coin element
    const coin = document.createElement("div");
    coin.className = "coin xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 lg:w-8 lg:h-8";
    coin.style.left = `${div.offsetLeft}px`;
    coin.style.top = `${div.offsetTop}px`;
    document.body.appendChild(coin);
  
    // Animate the coin to the cart
    const cart = document.querySelector(".color"); // Assuming you have a cart element with the class "color"
    const coinAnimation = coin.animate(
      [
        { top: `${cart.offsetTop}px`, left: `${cart.offsetLeft}px` },
        { top: `${div.offsetTop}px`, left: `${div.offsetLeft}px` },
      ],
      {
        duration: 500,
      }
    );
  
    // When the animation is complete, remove the coin element
    coinAnimation.onfinish = () => {
      coin.remove();
    };
  };



// Profile Move Coin animation 

const handleCoinClick = (event:any, fixedDestination:any) => {
  console.log("clicked");
  const div = event.target;

  const coin = document.createElement("div");
  coin.className = "coin xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 lg:w-8 lg:h-8";
  coin.style.left = `${div.offsetLeft}px`;
  coin.style.top = `${div.offsetTop}px`;
  document.body.appendChild(coin);

  const cart = document.querySelector(".profile"); // Assuming you have a cart element with the class "cart"

  const coinAnimation = coin.animate(
    [
      
      { top: `${cart.offsetTop}px`, left: `${cart.offsetLeft}px` },
      { top: `${fixedDestination.top}px`, left: `${fixedDestination.left}px` },
    ],
    {
      duration: 500,
    }
  );

  coinAnimation.onfinish = () => {
    coin.remove();
    // You can add logic here to update the cart or keep track of the number of coins collected.
  };
};

const createMultipleCoins = () => {
  play();
  // Define an array of fixed destinations for different screen sizes
  const fixedDestinations = {
    sm: [
      { top: 80, left: 190 },
      { top: 160, left: 190 },
      { top: 230, left: 190 },
      { top: 90, left: 500 },
      { top: 160, left: 500 },
      { top: 230 , left: 500 },
    ],
    md: [
      { top: 90, left:230 },
      { top: 180, left: 230 },
      { top: 270, left: 230 },
      { top: 90, left: 620 },
      { top: 180, left: 620 },
      { top: 270, left: 620 },
    ],
    lg: [
      { top: 150, left: 270 },
      { top: 300, left: 270 },
      { top: 450, left: 270 },
      { top: 150, left: 800 },
      { top: 300, left: 800 },
      { top: 450, left: 800 },
    ],
    xl: [
      { top: 180, left: 360 },
      { top: 320, left: 360 },
      { top: 460, left: 360  },
      { top: 170, left: 1020 },
      { top: 310, left: 1020 },
      { top: 450, left: 1020 },
    ],
    xxl: [
      { top: 180, left: 360 },
      { top: 380, left: 360 },
      { top: 600, left: 360  },
      { top: 180, left: 1350 },
      { top: 380, left: 1350 },
      { top: 600, left: 1350 },
    ],
  };

  const numCoins = 100;
  const screenSize = getScreenSize(); // Get the current screen size

  for (let i = 0; i < numCoins; i++) {
    const randomDestination =
      fixedDestinations[screenSize][Math.floor(Math.random() * fixedDestinations[screenSize].length)];
    setTimeout(() => {
      handleCoinClick({ target: { offsetLeft: 0, offsetTop: 0 } }, randomDestination);
    }, i * 100);
  }
};

const getScreenSize = () => {
  // Determine the screen size based on window width
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    return "sm";
  } else if (windowWidth < 1024) {
    return "md";
  }else if (windowWidth < 1168) {
    return "lg";
  }else if (windowWidth < 1600) {
    return "xl";
  }
   else {
    return "xxl";
  }
};


// Match Win Coins Reverse to Profile 

const handleCoinClick1 = (event:any, fixedDestination:any) => {
  console.log("clicked");
  const div = event.target;

  const coin = document.createElement("div");
  coin.className = "coin xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 lg:w-8 lg:h-8";
  coin.style.left = `${div.offsetLeft}px`;
  coin.style.top = `${div.offsetTop}px`;
  document.body.appendChild(coin);

  const cart = document.querySelector(".profile"); // Assuming you have a cart element with the class "cart"

  const coinAnimation = coin.animate(
    [
      { top: `${fixedDestination.top}px`, left: `${fixedDestination.left}px` },
      { top: `${cart.offsetTop}px`, left: `${cart.offsetLeft}px` },
    ],
    {
      duration: 300,
    }
  );

  coinAnimation.onfinish = () => {
    coin.remove();
    // You can add logic here to update the cart or keep track of the number of coins collected.
  };
};

const createMultipleCoins1 = () => {
  play1();
  // Define an array of fixed destinations for different screen sizes
  const fixedDestinations = {
    sm: [
      { top: 80, left: 190 },
      { top: 160, left: 190 },
      { top: 230, left: 190 },
      { top: 90, left: 500 },
      { top: 160, left: 500 },
      { top: 230 , left: 500 },
    ],
    md: [
      { top: 90, left:230 },
      { top: 180, left: 230 },
      { top: 270, left: 230 },
      { top: 90, left: 620 },
      { top: 180, left: 620 },
      { top: 270, left: 620 },
    ],
    lg: [
      { top: 150, left: 270 },
      { top: 300, left: 270 },
      { top: 450, left: 270 },
      { top: 150, left: 800 },
      { top: 300, left: 800 },
      { top: 450, left: 800 },
    ],
    xl: [
      { top: 180, left: 360 },
      { top: 320, left: 360 },
      { top: 460, left: 360  },
      { top: 170, left: 1020 },
      { top: 310, left: 1020 },
      { top: 450, left: 1020 },
    ],
    xxl: [
      { top: 180, left: 360 },
      { top: 380, left: 360 },
      { top: 600, left: 360  },
      { top: 180, left: 1350 },
      { top: 380, left: 1350 },
      { top: 600, left: 1350 },
    ],
  };

  const numCoins = 30;
  const screenSize = getScreenSize(); // Get the current screen size

  for (let i = 0; i < numCoins; i++) {
    const randomDestination =
      fixedDestinations[screenSize][Math.floor(Math.random() * fixedDestinations[screenSize].length)];
    setTimeout(() => {
      handleCoinClick1({ target: { offsetLeft: 0, offsetTop: 0 } }, randomDestination);
    }, i * 100);
  }
};





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Six profile Coin animation move    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>



const handleCoinClick3 = (event:any, fixedDestination:any, startPosition:any) => {
  console.log("clicked");
  const div = event.target;

  const coin = document.createElement("div");
  coin.className = "coin xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 lg:w-8 lg:h-8";
  coin.style.left = startPosition.left;
  coin.style.top = startPosition.top;
  document.body.appendChild(coin);

  const coinAnimation = coin.animate(
    [
      { top: `${fixedDestination.top}px`, left: `${fixedDestination.left}px` },
      { top: `${startPosition.top}px`, left: `${startPosition.left}px` },
    ],
    {
      duration: 500,
    }
  );

  coinAnimation.onfinish = () => {
    coin.remove();
    // You can add logic here to update the cart or keep track of the number of coins collected.
  };
};

const createMultipleCoins3 = () => {
  play2();
  const fixedDestinations = {
    sm: [
      { top: 80, left: 190 },
      { top: 160, left: 190 },
      { top: 230, left: 190 },
      { top: 90, left: 500 },
      { top: 160, left: 500 },
      { top: 230, left: 500 },
    ],
    md: [
      { top: 90, left: 230 },
      { top: 180, left: 230 },
      { top: 270, left: 230 },
      { top: 90, left: 620 },
      { top: 180, left: 620 },
      { top: 270, left: 620 },
    ],
    lg: [
      { top: 150, left: 270 },
      { top: 300, left: 270 },
      { top: 450, left: 270 },
      { top: 150, left: 800 },
      { top: 300, left: 800 },
      { top: 450, left: 800 },
    ],
    xl: [
      { top: 180, left: 360 },
      { top: 320, left: 360 },
      { top: 460, left: 360 },
      { top: 170, left: 1020 },
      { top: 310, left: 1020 },
      { top: 450, left: 1020 },
    ],
    xxl: [
      { top: 180, left: 360 },
      { top: 380, left: 360 },
      { top: 600, left: 360 },
      { top: 180, left: 1350 },
      { top: 380, left: 1350 },
      { top: 600, left: 1350 },
    ],
  };


  //........................... Profile 1   .....................

  const startPosition = {
    sm: { top: "100px", left: "100px" },
    md: { top: "100px", left: "130px" },
    lg: { top: "150px", left: "100px" },
    xl: { top: "200px", left: "200px" },
    xxl: { top: "200px", left: "120px" },
  };

  // ....................... Profile 2 ..................
  // const startPosition = {
  //   sm: { top: "150px", left: "100px" },
  //   md: { top: "200px", left: "100px" },
  //   lg: { top: "280px", left: "100px" },
  //   xl: { top: "320px", left: "150px" },
  //   xxl: { top: "400px", left: "120px" },
  // };

  // ....................... Profile 3 ..................
  // const startPosition = {
  //   sm: { top: "230px", left: "100px" },
  //   md: { top: "285px", left: "100px" },
  //   lg: { top: "430px", left: "100px" },
  //   xl: { top: "450px", left: "150px" },
  //   xxl: { top: "600px", left: "120px" },
  // };



   //........................... Profile 4   .....................

  // const startPosition = {
  //   sm: { top: "100px", left: "580px" },
  //   md: { top: "100px", left: "750px" },
  //   lg: { top: "150px", left: "900px" },
  //   xl: { top: "200px", left: "1200px" },
  //   xxl: { top: "200px", left: "1550px" },
  // };

   // ....................... Profile 5 ..................
  //  const startPosition = {
  //   sm: { top: "150px", left: "580px" },
  //   md: { top: "200px", left: "750px" },
  //   lg: { top: "280px", left: "900px" },
  //   xl: { top: "320px", left: "1250px" },
  //   xxl: { top: "400px", left: "1550px" },
  // };



   // ....................... Profile 6 ..................
  // const startPosition = {
  //   sm: { top: "230px", left: "580px" },
  //   md: { top: "285px", left: "720px" },
  //   lg: { top: "430px", left: "900px" },
  //   xl: { top: "450px", left: "1250px" },
  //   xxl: { top: "600px", left: "1550px" },
  // };


  const numCoins = 5;
  const screenSize = getScreenSize3(); // Get the current screen size

  for (let i = 0; i < numCoins; i++) {
    const randomDestination =
      fixedDestinations[screenSize][Math.floor(Math.random() * fixedDestinations[screenSize].length)];
    setTimeout(() => {
      handleCoinClick3({ target: { startPositionLeft: 0, startPositionTop: 0 } }, randomDestination, startPosition[screenSize]);
    }, i * 100);
  }
};

const getScreenSize3 = () => {
  // Determine the screen size based on window width
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    return "sm";
  } else if (windowWidth < 1024) {
    return "md";
  } else if (windowWidth < 1168) {
    return "lg";
  } else if (windowWidth < 1600) {
    return "xl";
  } else {
    return "xxl";
  }
};


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <>
      <div className="flex flex-col mt-5 xl:gap-7 sm:gap-5 md:gap-7 lg:gap-16 2xl:gap-20">
        {/* 1  */} 
        <div className="flex xl:gap-24 sm:gap-7 md:gap-12 lg:gap-16 2xl:gap-32">
          <div className="img" onClick={createMultipleCoins}>
            <img
              src={frame}
              alt="user"
              className="absolute w-32 h-32 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-36 2xl:h-36"
            />
            <img
              src={avatar}
              alt="user"
              className="w-24 h-24 mt-5 ml-4 sm:w-10 sm:h-10 sm:mt-2 sm:ml-2.5 md:mt-3 md:ml-3 md:w-14 md:h-14 lg:w-20 lg:h-20 lg:mt-3 lg:ml-2 2xl:w-28 2xl:h-28"
            />
          </div>
          <div className="xl:mr-16 sm:mr-9 md:mr-14 lg:mr-24 2xl:mr-32"  onClick={handleClick1} >
            <img
              src={board} 
              alt="board"
              className="w-32 h-32 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 board rounded-[25px] md:rounded-[12px] sm:rounded-[11px] 2xl:w-36 2xl:h-36"
            />
            <img
              src={apple}
              alt="pic"
              className="w-10 h-10 ml-10 -mt-28 sm:w-6 sm:h-6 sm:-mt-12 sm:ml-4 md:w-7 md:h-7 md:-mt-16 md:ml-6 lg:w-8 lg:h-8 lg:-mt-20 lg:ml-8 animate-jelly 2xl:w-12 2xl:h-12"
            />
            <div className="absolute font-bold text-white letter md:ml-11 md:-mt-3 sm:ml-9 sm:-mt-2 lg:ml-14 lg:-mt-2 lg:text-xs xl:ml-20 xl:-mt-3 xl:text-xs font-easy">
              x25
            </div>
            <div className="mt-4 ml-6 sm:mt-0.5 sm:ml-3 md:mt-1 md:ml-4 lg:mt-2 lg:ml-4 2xl:mt-3">
              <div className="font-bold text-white lg:text-xs xl:text-sm letter 2xl:text-sm font-easy">
                Me : 100k
              </div>
              <div className="font-bold text-white lg:text-xs xl:text-sm letter 2xl:text-sm font-easy">
                Total: 500k
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex xl:gap-24 sm:gap-7 md:gap-12 lg:gap-16 2xl:gap-32" >
          <div className="img" onClick={createMultipleCoins3}>
            <img
              src={frame}
              alt="user"
              className="absolute w-32 h-32 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-36 2xl:h-36"
            />
            <img
              src={avatar}
              alt="user"
              className="w-24 h-24 mt-5 ml-4 sm:w-10 sm:h-10 sm:mt-2 sm:ml-2.5  md:mt-3 md:ml-3 md:w-14 md:h-14 lg:w-20 lg:h-20 lg:mt-3 lg:ml-2 2xl:w-28 2xl:h-28" 
            />
          </div>
          <div className="mr-16 sm:mr-9 md:mr-10 lg:mr-20" onClick={handleClick2}>
            <img
              src={board}
              alt="board"
              className="w-32 h-32 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 board  rounded-[25px] md:rounded-[12px] sm:rounded-[11px] 2xl:w-36 2xl:h-36" 
            />
            <img
              src={graphsImg}
              alt="pic"
              className="w-10 h-10 ml-10 -mt-28 sm:w-6 sm:h-6 sm:-mt-12 sm:ml-4 md:w-7 md:h-7 md:-mt-16 md:ml-6 lg:w-8 lg:h-8 lg:-mt-20 lg:ml-8 animate-jelly 2xl:w-12 2xl:h-12"
            />
            <div className="absolute font-bold text-white letter md:ml-11 md:-mt-2 sm:ml-9 sm:-mt-2 lg:ml-14 lg:-mt-2 lg:text-xs xl:ml-20 xl:-mt-3 xl:text-xs font-easy">
              x25
            </div>
            <div className="mt-4 ml-6 sm:mt-0.5 sm:ml-3 md:mt-1 md:ml-4 lg:mt-2 lg:ml-4 2xl:mt-3">
              <div className="font-bold text-white lg:text-xs xl:text-sm letter 2xl:text-sm font-easy">
                Me : 100k
              </div>
              <div className="font-bold text-white lg:text-xs xl:text-sm letter 2xl:text-sm font-easy">
                Total: 500k
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex xl:gap-24 sm:gap-7 md:gap-12 lg:gap-16 2xl:gap-32">
          <div className="img">
            <img
              src={frame}
              alt="user"
              className="absolute w-32 h-32 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-36 2xl:h-36"
            />
            <img
              src={avatar}
              alt="user"
              className="w-24 h-24 mt-5 ml-4 sm:w-10 sm:h-10 sm:mt-2 sm:ml-2.5 md:mt-3 md:ml-3 md:w-14 md:h-14 lg:mt-3 lg:ml-2 lg:w-20 lg:h-20 2xl:w-28 2xl:h-28"
            />
          </div>
          <div className="mr-16 sm:mr-9 md:mr-10 lg:mr-20 "  onClick={handleClick3}>
            <img
              src={board}
              alt="board"
              className="w-32 h-32 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 board  rounded-[25px] md:rounded-[12px] sm:rounded-[11px] 2xl:w-36 2xl:h-36"
            />
            <img
              src={bananaImg}
              alt="pic"
              className="w-10 h-10 ml-10 -mt-28 sm:w-6 sm:h-6 sm:-mt-12 sm:ml-4 md:w-7 md:h-7 md:-mt-16 md:ml-6 lg:w-8 lg:h-8 lg:-mt-20 lg:ml-8 animate-jelly 2xl:w-12 2xl:h-12"
            />
            <div className="absolute font-bold text-white letter md:ml-11 md:-mt-2 sm:ml-9 sm:-mt-2 lg:ml-14 lg:-mt-2 lg:text-xs xl:ml-20 xl:-mt-3 xl:text-xs font-easy">
              x25
            </div>
            <div className="mt-4 ml-6 sm:mt-0.5 sm:ml-3 md:mt-2 md:ml-4 lg:mt-2 lg:ml-4 2xl:mt-3 ">
              <div className="font-bold text-white lg:text-xs xl:text-sm letter 2xl:text-sm font-easy">
                Me : 100k
              </div>
              <div className="font-bold text-white lg:text-xs xl:text-sm letter 2xl:text-sm font-easy">
                Total: 500k
              </div>
            </div>
          </div>
        </div>
      </div>

      <SpinWheel volumes={volume}/>

      <div className="flex flex-col mt-5 xl:gap-7 sm:gap-5 md:gap-7 lg:gap-16 2xl:gap-20">
        {/* 4 */}
        <div className="flex xl:gap-24 sm:gap-7 md:gap-12 lg:gap-16 2xl:gap-32">
        <div className="xl:ml-16 sm:ml-2 md:ml-8 lg:ml-2 2xl:ml-16"  onClick={handleClick4}>
            <img
              src={board}
              alt="board"
              className="w-32 h-32 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 board rounded-[25px] md:rounded-[12px] sm:rounded-[11px] 2xl:w-36 2xl:h-36"
            />
            <img
              src={StrawBerryImg}
              alt="pic"
              className="w-10 h-10 ml-10 -mt-28 sm:w-6 sm:h-6 sm:-mt-12 sm:ml-4 md:w-7 md:h-7 md:-mt-16 md:ml-6 lg:w-8 lg:h-8 lg:-mt-20 lg:ml-8 animate-jelly 2xl:w-12 2xl:h-12"
            />
            <div className="absolute font-bold text-white letter md:ml-11 md:-mt-2 sm:ml-9 sm:-mt-2 lg:ml-14 lg:-mt-2 lg:text-xs xl:ml-20 xl:-mt-3 xl:text-xs font-easy">
              x25
            </div>
            <div className="mt-4 ml-6 sm:mt-0.5 sm:ml-3 md:mt-1 md:ml-4 lg:mt-2 lg:ml-4 2xl:mt-3  font-easy">
              <div className="font-bold text-white lg:text-xs xl:text-sm letter 2xl:text-sm font-easy">
                Me : 100k 
              </div>
              <div className="font-bold text-white lg:text-xs xl:text-sm letter 2xl:text-sm font-easy">
                Total: 500k
              </div>
            </div>
          </div>
          <div className="img" onClick={createMultipleCoins1}>
            <img
              src={frame}
              alt="user"
              className="absolute w-32 h-32 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-36 2xl:h-36"
            />
            <img
              src={avatar}
              alt="user"
              className="w-24 h-24 mt-5 ml-4 sm:w-10 sm:h-10 sm:mt-2 sm:ml-2.5 md:mt-3 md:ml-3 md:w-14 md:h-14 lg:w-20 lg:h-20 lg:mt-3 lg:ml-2 2xl:w-28 2xl:h-28"
            />
          </div> 
        </div>
        {/* 5 */}
        <div className="flex xl:gap-24 sm:gap-7 md:gap-12 lg:gap-16 2xl:gap-32">
        <div className="xl:ml-16 sm:ml-2 md:ml-8 lg:ml-2 2xl:ml-16"  onClick={handleClick5}>
            <img
              src={board}
              alt="board"
              className="w-32 h-32 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 board  rounded-[25px] md:rounded-[12px] sm:rounded-[11px] 2xl:w-36 2xl:h-36"
            />
            <img
              src={bleechImg}
              alt="pic"
              className="w-10 h-10 ml-10 -mt-28 sm:w-6 sm:h-6 sm:-mt-12 sm:ml-4 md:w-7 md:h-7 md:-mt-16 md:ml-6 lg:w-8 lg:h-8 lg:-mt-20 lg:ml-8 animate-jelly 2xl:w-12 2xl:h-12"
            />
            <div className="absolute font-bold text-white letter md:ml-11 md:-mt-2 sm:ml-9 sm:-mt-2 lg:ml-14 lg:-mt-2 lg:text-xs xl:ml-20 xl:-mt-3 xl:text-xs font-easy">
              x25
            </div>
            <div className="mt-4 ml-6 sm:mt-0.5 sm:ml-3 md:mt-1 md:ml-4 lg:mt-2 lg:ml-4 2xl:mt-3  font-easy ">
              <div className="font-bold text-white xl:text-sm lg:text-xs letter 2xl:text-sm">
                Me : 100k
              </div>
              <div className="font-bold text-white lg:text-xs xl:text-sm letter 2xl:text-sm font-easy">
                Total: 500k
              </div>
            </div>
          </div>
          <div className="img">
            <img
              src={frame}
              alt="user"
              className="absolute w-32 h-32 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-36 2xl:h-36"
            />
            <img
              src={avatar}
              alt="user"
              className="w-24 h-24 mt-5 ml-4 sm:w-10 sm:h-10 sm:mt-2 sm:ml-2.5 md:mt-3 md:ml-3 md:w-14 md:h-14 lg:w-20 lg:h-20 lg:mt-3 lg:ml-2 2xl:w-28 2xl:h-28"
            />
          </div> 
        </div>
        {/* 6 */}
        <div className="flex xl:gap-24 sm:gap-7 md:gap-12 lg:gap-16 2xl:gap-32">
        <div className="xl:ml-16 sm:ml-2 md:ml-8 lg:ml-2 2xl:ml-16" onClick={handleClick6}>
            <img
              src={board}
              alt="board"
              className="w-32 h-32 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 board  rounded-[25px] md:rounded-[12px] sm:rounded-[11px] 2xl:w-36 2xl:h-36"
            />
            <img
              src={watermelonImg}
              alt="pic"
              className="w-10 h-10 ml-10 -mt-28 sm:w-6 sm:h-6 sm:-mt-12 sm:ml-4 md:w-7 md:h-7 md:-mt-16 md:ml-6 lg:w-8 lg:h-8 lg:-mt-20 lg:ml-8 animate-jelly 2xl:w-12 2xl:h-12"
            />
            <div className="absolute font-bold text-white letter md:ml-11 md:-mt-2 sm:ml-9 sm:-mt-2 lg:ml-14 lg:-mt-2 lg:text-xs xl:ml-20 xl:-mt-3 xl:text-xs font-easy">
              x25
            </div>
            <div className="mt-4 ml-6 sm:mt-0.5 sm:ml-3 md:mt-1 md:ml-4 lg:mt-2 lg:ml-4 2xl:mt-3 ">
              <div className="font-bold text-white lg:text-xs xl:text-sm letter 2xl:text-sm font-easy">
                Me : 100k
              </div>
              <div className="font-bold text-white lg:text-xs xl:text-sm letter 2xl:text-sm font-easy">
                Total: 500k
              </div>
            </div>
          </div>
          <div className="img">
            <img
              src={frame}
              alt="user"
              className="absolute w-32 h-32 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-36 2xl:h-36"
            />
            <img
              src={avatar}
              alt="user"
              className="w-24 h-24 mt-5 ml-4 sm:w-10 sm:h-10 sm:mt-2 sm:ml-2.5 md:mt-3 md:ml-3 md:w-14 md:h-14 lg:w-20 lg:h-20 lg:mt-3 lg:ml-2 2xl:w-28 2xl:h-28"
            />
          </div> 
        </div>
      </div>
    </>
  );
};

export default GameArea;
