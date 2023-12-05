import { useState, useEffect } from 'react';
import './App.css'
import GameArea from './components/GameArea'
import Header from './components/Header'
import Loader from './components/Loader/Loader';
import Float from './components/modal/Float';
import Load from './components/modal/Load';

function App() {

  const [currentComponent, setCurrentComponent] = useState(1);

  const [volume,setVolume]=useState(40);
  const [sound,setSound]=useState(20);

  useEffect(()=>{
    setTimeout(() => {
      setCurrentComponent(2)
    },6200);
  },[])


  return (
    <>
      {
        currentComponent == 1 &&  <Float/>
      }
      
      {
        currentComponent == 2 &&  <div className='h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-main'>
        <Header setVolume={setVolume} volumes={volume} sound={sound} setsound={setSound} />
        <div className='flex justify-center'>
            <GameArea volume={volume}/>
        </div>
      </div> 
      }
   

    </>
  )
}

export default App
