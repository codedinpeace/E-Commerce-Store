import React, {useState} from 'react'
import { useAuthStore } from '../States/authStore'
import {Mail, KeyRound, EyeClosed, Eye } from "lucide-react"
import { Link } from 'react-router-dom' 

const Login = () => {
  const {isLoggingIn, Loginuser, } = useAuthStore()

  const [authUser, setAuthUser] = useState({
    name:"",
    email:"",
    password:"",
  })

  if(isLoggingIn){
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }
  
  const[visiblePassword, setVisiblePassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    Loginuser(authUser)
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
        <h1 className='text-4xl font-semibold mt-5 mb-10'>Login Account</h1>        
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
          <button type='submit' className=' w-40 h-10 rounded-md bg-orange-600 hover:bg-orange-700 cursor-pointer transition-all duration-150 text-white text-lg'>Login</button>
          <h1 className='text-lg flex gap-1'>Already have an account? <Link to="/signup"><p className='text-orange-500 underline underline-offset-2'>SignUp</p></Link></h1>
          </div>
        </div>
      </form>
    </div>
  )
}


export default Login