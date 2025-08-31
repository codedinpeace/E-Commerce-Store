import React from 'react'
import heroImg from '/hero_image.png' 
import { MoveRight } from 'lucide-react'
import Collection from '../LandingPage_Sections/Collection'


const LandingPage = () => {
  return (
    <>
    <div className=" h-screen w-full bg-gradient-to-b from-pink-300 via-white to-gray-100">
      <div className=" heroSection"> 
        <div className=' flex justify-around max-md:flex-col max-sm:text-center max-md:items-center  items-center'>
          <div className='max-2xl:mt-20'>
        <h1 className='text-7xl max-sm:text-3xl max-sm:max-w-50  max-lg:text-5xl max-sm:mx-auto max-lg:max-w-sm max-2xl:text-6xl max-2xl:max-w-md font-semibold flex items-center max-w-xl'>Style That Speaks for You</h1>
        <p className='text-2xl max-sm:max-w-60 max-2xl:text-[20px] max-lg:text-[16px] max-lg:max-w-sm mt-5 opacity-70 max-w-[500px] '>From everyday essentials to statement pieces, explore collections designed to keep you ahead of the trend.</p>
        <button className='mt-10 px-5 py-3 group cursor-pointer hover:bg-orange-700 transition-all max-sm:mx-auto duration-75 rounded-xl bg-orange-600 flex items-end gap-3 text-white font-semibold'>Latest Collection <MoveRight  className=' duration-75'/></button>
          </div>
        <img src={heroImg} className='max-2xl:w-[500px] max-xl:w-[400px] max-lg:w-[350px] max-2xl:mt-20 ' alt="" /> 
        </div>
      </div>
    </div>
    <Collection/>
    </>
  )
} 

export default LandingPage    