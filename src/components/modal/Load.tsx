import React from 'react'
import Lottie from "lottie-react";
import load from "../../assets/load.json"
import title from "/user/title.png"

function Load() {
  return (
    <div className='flex flex-col load'>
     <img src={title} alt="title" className="h-28 w-96 sm:w-56 sm:h-16 md:w-60 md:h-16 " />
      
      <Lottie animationData={load} loop={true} className='w-28 h-28'/>
    </div>
  )
}

export default Load
