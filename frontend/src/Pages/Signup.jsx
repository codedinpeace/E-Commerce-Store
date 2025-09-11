import React, {useState} from 'react'
import {UserRound, Mail, KeyRound, Eye,EyeClosed} from 'lucide-react'
import {useAuthStore} from '../States/authStore'
import { Link } from 'react-router-dom'

const Signup = () => {

  const {isSigningUp, signUpUser} = useAuthStore()

  const [authUser, setAuthUser] = useState({
    name:"",
    email:"",
    password:"",
  })
  
  const[visiblePassword, setVisiblePassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    signUpUser(authUser)
  }

  if(isSigningUp){
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  function onNameChange(e){
    setAuthUser(prev=>({
      ...prev,
      name:e.target.value
    }))
  }
  
  function onEmailChange(e){
    setAuthUser(prev=>({
      ...prev,
      email:e.target.value
    }))
  }

  function onPasswordChange(e){
    setAuthUser(prev=>({
      ...prev,
      password:e.target.value
    }))
  }

  // console.log(authUser)
  


  return (


    <div className="w-full bg-pink-300 overflow-x-hidden">
      <form action="" onSubmit={handleSubmit} className='flex flex-col p-10  gap-5 justify-center items-center  mb-50'>
        <div className='flex flex-col gap-5 mt-26.5 p-15 bg-[#ffff] rounded-lg'>
      <div className='flex justify-center '>
        <h1 className='text-4xl font-semibold mt-5 mb-10'>Create an Account</h1>
      </div>
      <div className=''>
      <UserRound className='absolute mt-3 ml-1'/>
          <input type="text" onChange={onNameChange} name='name' placeholder='Enter your Username' className='relative w-120 pl-9 h-12 rounded-md border-2 border-zinc-500 text-xl' />
      </div>
      <div>

      <Mail className="ml-2 mt-3 absolute" />
          <input type="email" onChange={onEmailChange} name='email' placeholder='Enter your Email' className='relative w-120 pl-9 h-12 rounded-md border-2 border-zinc-500 text-xl' />
      </div>
      <div className="relative w-120">
  {/* Left icon */}
  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" />

  {/* Input */}
  <input
    type={`${visiblePassword ? "text" : "password"}`}
    onChange={onPasswordChange}
    name="password"
    placeholder="Enter your Password"
    className="w-full pl-10 pr-10 h-12 rounded-md border-2 border-zinc-500 text-xl"
  />

  {/* Right icon */}
  { visiblePassword ? <EyeClosed onClick={()=>{setVisiblePassword(false)}} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 cursor-pointer"/> : <Eye onClick={()=>{setVisiblePassword(true)}} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 cursor-pointer" />}
</div>
          <div className='flex  gap-5 items-end'  >
          <button type='submit' className='w-40 h-10 rounded-md bg-orange-600 hover:bg-orange-700 cursor-pointer transition-all duration-150 text-white text-lg'>Sign Up</button>
          <div className='text-lg flex gap-1'>Already have an account? <Link to="/login"><p className='text-orange-500 underline underline-offset-2'>Login</p></Link></div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup