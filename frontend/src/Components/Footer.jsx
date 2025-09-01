import React from 'react'
import footerLogo from '../assets/Assets/Frontend_Assets/logo_big.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <footer className='p-20 bg-gray-200 mt-10'>
    <div className='flex justify-around max-lg:items-center max-lg:flex-col max-lg:gap-10 items-start'>
    <div className='flex items-end'>
        <img src={footerLogo} className='max-sm:w-15 max-sm:mx-auto' alt="" />
        <h1 className='text-4xl font-medium max-sm:mx-auto max-sm:text-3xl'>SHOPPER</h1>
    </div>
    <div className='flex gap-20 flex-wrap'>

    <div className='flex flex-col gap-2'>
        <h3 className='text-[25px] font-medium'>Important Links</h3>
        <Link to="/terms" className='text-xl'>Terms and Service</Link>
        <Link to="/privacy-policy" className='text-xl'>Privacy Policy</Link>
        <Link to="/shipping-policy" className='text-xl'>Shipping Policy</Link>
    </div>
    <div className='flex flex-col gap-2'>
    <h3 className='text-[25px] font-medium'>Shop</h3>
        <Link to="/company" className='text-xl'>Company</Link>  
        <Link to="/Men" className='text-xl'>Men</Link>
        <Link to="/Women" className='text-xl'>Women</Link>
        <Link to="/Kids" className='text-xl'>Kids</Link>
    </div>
    <div className='flex flex-col gap-2'>
    <h3 className='text-[25px] font-medium'>Socials</h3>
        <a href="https://www.linkedin.com/in/pranam-shaw-1504ba359/" className='text-xl'>Linkedin</a>
        <a href="x.com/_PranamShaw_" className='text-xl'>Twitter</a>
        <a href="instagram.com/webgrock" className='text-xl'>Instagram</a>
        <a href="https://wa.me/8777365170" className='text-xl'>Whatsapp</a>
    </div>
    </div>
    </div>

  </footer>
  )
}

export default Footer