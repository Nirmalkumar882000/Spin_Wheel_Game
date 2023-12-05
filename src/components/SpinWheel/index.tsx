import { FC, useEffect, useState } from "react";
import "./index.css";

// Wheel file
import spinWheel from "/spin/wheel.png"
import arrow from "/spin/arrow.png"


// coins file
import  coin from "/coins/coin1.png"
import coin3 from "/coins/coin2.png"
import coin4 from "/coins/coin3.png"
import coin5 from "/coins/coin4.png"
import empty from "/coins/empty.png"
import frame from "/modal/frames.png"
import cancel from "/modal/cancel.png"
// Lottie file animation
import Lottie from "lottie-react";
// import cracker from "../../assets/cracker.json"
// Sound Effect 
import useSound from 'use-sound';
import soundUrl from "../../assets/sound/4.0.mp3"

interface spin{
  volumes:number,
}



const SpinWheel: FC<spin> = ({volumes}) => {

  // Sound effect 

  console.log("lllllllllllllllllllll",volumes)


  const [play] = useSound(soundUrl, {
    // volume : volumes as number
  });


  useEffect(()=>{
    play()
  },[])

  
  const [showModal, setShowModal] = useState(false);

  // Spin Wheel Rotation Values

  const [spinning, setSpinning] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const degreesPerValue = 360 / 6; // Assuming 6 values on the wheel
  const startDegree = 0; 

  const fixedRotation = 60; // Change this to your desired fixed degree
  const totalRotations = 5; // The number of times you want to rotate the wheel

  const stopSpinning = () => {
    setSpinning(false);
    const wheelContainer = document.querySelector('.wheel');
    wheelContainer.style.transition = 'none';
    wheelContainer.style.transform = `rotate(${startDegree}deg`;
  };

  const Spinner = () => {
    play();
    if (spinning) return;
    setSpinning(true);

    const wheelContainer = document.querySelector('.wheel');
    wheelContainer.style.transition = 'transform 4s ease-out';

    // Calculate the total rotation, including the number of rotations and the fixed degree
    const totalRotation = fixedRotation + (totalRotations * 360) + 3600;
    wheelContainer.style.transform = `rotate(${totalRotation}deg`;

    // Calculate the selected value based on the fixed rotation
    const selected = Math.floor(totalRotation / degreesPerValue);
    const value = (selected % 6) + 1; // Adjust to get 1-6

    setSelectedValue(value);
    console.log(value)

    setTimeout(() => {
      setShowModal(true)
    }, 6000);
    
    setTimeout(() => {
      stopSpinning();
    }, 6000);
   
  };


  // Select Coins Fuctional componets

  const [coins, setCoins] = useState(0)
  // const[spin,setSpin]=useState(false)

  const handleCoins=(coins: number)=>{
      setCoins(coins)
      console.log(coins)
  }


  return (
    <>
    <div className="flex flex-col justify-center">
      <div className="spin">
        
        {/* Wheel */}
        <img src={spinWheel} alt="spinwheel" className={`wheel ${spinning ? 'spinning' : ''} h-96 mt-5 xl:ml-2 sm:w-48 sm:h-48 sm:mt-4 md:w-56 md:h-56 md:mt-6 lg:w-64 lg:h-64 lg:mt-24 2xl:w-auto 2xl:h-auto   spinwheel`}/>

        {/* Arrow Spin */} 
        <img id="spin" onClick={Spinner} src={arrow} alt="arrow" className="absolute w-10 h-16 xl:ml-44 xl:-mt-60 sm:w-6 sm:h-9 sm:-my-32 sm:ml-20 md:w-7 md:h-10 md:-mt-36 md:ml-24 lg:w-8 lg:h-11 lg:-mt-40 lg:ml-28 2xl:w-16 2xl:h-24 arrowIcon "/>
      </div>
     
      {/* Coins */}
      <div className="flex flex-row mt-10 -ml-12 -mr-24 sm:mt-3 sm:-ml-8 sm:-mr-6 md:mt-3 md:-ml-8 md:-mr-5 lg:mt-28 lg:-ml-24 lg:-mr-10 2xl:mt-10 coins">
     <div >
      <img src={empty} alt="coins" className="w-24 h-24 mr-3 border-4 border-yellow-500 border-double rounded-full glowing-btn praveen motion-safe:hover:scale-110 sm:w-10 sm:h-10 sm:mr-4 md:w-12 md:h-12 lg:w-20 lg:h-20 2xl:w-28 2xl:h-28 2xl:mr-10 " onClick={() => handleCoins(500)}/>
      <div className="absolute ml-8 -mt-16 font-easy text1 sm:-mt-6 sm:ml-3 md:-mt-7 md:ml-4 lg:text-lg lg:-mt-14 lg:ml-6 xl:text-lg 2xl:text-xl 2xl:ml-9 ">500</div>
     </div>

      <div >
      <img src={empty} alt="coins" className="w-24 h-24 mr-3 border-4 border-yellow-500 border-double rounded-full 2xl:w-28 2xl:h-28 praveen glowing-btn motion-safe:hover:scale-110 sm:w-10 sm:h-10 sm:mr-4 md:w-12 md:h-12 lg:w-20 lg:h-20 2xl:mr-10 " onClick={() => handleCoins(1000)}/>
      <div className="absolute -mt-16 ml-9 font-easy text1 sm:-mt-6 sm:ml-4 md:-mt-7 md:ml-5 lg:text-lg lg:-mt-14 lg:ml-7 xl:text-lg 2xl:text-xl 2xl:ml-10">1k</div>
      </div>
      
      <div >
      <img src={empty} alt="coins" className="w-24 h-24 mr-3 border-4 border-yellow-500 border-double rounded-full 2xl:w-28 2xl:h-28 praveen glowing-btn motion-safe:hover:scale-110 sm:w-10 sm:h-10 sm:mr-4 md:w-12 md:h-12 lg:w-20 lg:h-20 2xl:mr-10 " onClick={() => handleCoins(10000)}/>
      <div className="absolute ml-8 -mt-16 font-easy text1 sm:-mt-6 sm:ml-3 md:-mt-7 md:ml-4 lg:text-lg lg:-mt-14 lg:ml-6 xl:text-lg 2xl:text-xl 2xl:ml-10 ">10k</div>
      </div>
     
      <div >
      <img src={empty} alt="coins" className="w-24 h-24 mr-3 border-4 border-yellow-500 border-double rounded-full 2xl:w-28 2xl:h-28 praveen glowing-btn motion-safe:hover:scale-110 sm:w-10 sm:h-10 sm:mr-4 md:w-12 md:h-12 lg:w-20 lg:h-20 2xl:mr-10 " onClick={() => handleCoins(50000)}/>
      <div className="absolute ml-8 -mt-16 font-easy text1 sm:-mt-6 sm:ml-3 md:-mt-7 md:ml-4 lg:text-lg lg:-mt-14 lg:ml-6 xl:text-lg 2xl:text-xl 2xl:ml-10">50k</div>
      </div>
      
      <div >
      <img src={empty} alt="coins" className="w-24 h-24 mr-3 border-4 border-yellow-500 border-double rounded-full 2xl:w-28 2xl:h-28 praveen glowing-btn motion-safe:hover:scale-110 sm:w-10 sm:h-10 sm:mr-4 md:w-12 md:h-12 lg:w-20 lg:h-20 2xl:mr-10 " onClick={() => handleCoins(100000)}/>
      <div className="absolute -mt-16 ml-7 font-easy text1 sm:-mt-6 sm:ml-2.5 md:-mt-7 md:ml-3.5 lg:text-lg lg:-mt-14 lg:ml-5 xl:text-lg 2xl:text-xl 2xl:ml-8">100k</div>
      </div>
      </div>
      {showModal ? (  
        <>
        <div className="fixed inset-0 z-50 flex items-center justify-center focus:outline-none backdrop-blur-sm hover:backdrop-blur-lg">
          <img
            src={frame}
            alt="frame"
            className="w-2/5 sm:w-96 md:w-96 lg:w-3/5 xl:w-2/5"
          />
          <div className="absolute -mt-32 border-b-8 border-blue-500 border-dotted win animate-jelly sm:text-2xl sm:-mt-24 md:-mt-24 lg:-mt-32">
          <h2>Congratulations</h2>
          </div>  
          <div className="absolute mt-16 border-b-8 border-blue-500 border-dotted win animate-jelly sm:text-2xl">  
          <h2>You Won : {selectedValue}</h2>
          </div>
          
          <div className="absolute mt-56 h-96 w-96">
          {/* <Lottie animationData={cracker} loop={true} /> */}
          </div>
          <div className="absolute -mb-96 sm:-mb-36 md:-mb-40 lg:-mb-80 xl:-mb-96 xl:pt-28">
            <img
              src={cancel}
              className="w-16 h-16 mt-32 xl:w-16 xl:h-16 xl:-mt-16 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-jelly"
              alt="cancel"
              onClick={() => setShowModal(false)}
            />
          </div>
        </div>
      </>
      ) : null}
      
    </div>
    </> 
  );
};

export default SpinWheel;
