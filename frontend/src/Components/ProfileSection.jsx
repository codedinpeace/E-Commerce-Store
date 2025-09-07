import React from 'react'
import { useAuthStore } from '../States/authStore'
import defaultPfp from '../assets/Assets/Frontend_Assets/images.png'
import { Camera } from 'lucide-react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const ProfileSection = () => {
  const {authUser, isLoggedIn, isLoggingIn, LogOut} = useAuthStore()
  console.log(authUser)

  const navigate = useNavigate()

  if(!authUser || !isLoggedIn){
    navigate("/login")
    return null
  }

  function handleLogout (){
    LogOut()
    navigate("/login")
  }
  return (
    <div className='bg-zinc-900 h-[90.7vh] text-white w-full'>
      <div className='flex flex-col gap-5 items-center'>
        <div className='relative mt-20'>
        <img src={defaultPfp} className='rounded-full' alt="" />
        <label htmlFor="profilePic">
        <Camera  className='absolute bottom-0 right-10 cursor-pointer bg-zinc-900 rounded-full'/>
        <input type="file"
        id='profilePic' 
        className='hidden'
        />
        </label>
        </div>
        <h1 className='text-2xl font-semibold'>{authUser.name}</h1>
        <input type="text" value={authUser.email} readOnly className='px-10  text-xl font-semibold h-10 rounded-md border-2 border-zinc-400' />
        <h3 className='text-lg font-semibold'>Updated At : {authUser.updatedAt.split("T")[0]}</h3>
        <div>
          <Link>
         <button onClick={handleLogout} className='w-30 h-10 rounded-md text-xl bg-red-400 cursor-pointer hover:bg-red-500 transition-all duration-150 active:scale-95'>Logout</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection