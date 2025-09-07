    import React, { useState, useRef } from 'react'
    import {Link} from 'react-router-dom'
    import logo from '../assets/Assets/Frontend_Assets/logo.png'
    import { ShoppingCart, Menu, X } from 'lucide-react'
    import gsap from 'gsap';
    import { useGSAP } from '@gsap/react';
    import { useAuthStore } from '../States/authStore';

    const Navbar = () => {
      const {isLoggedIn, authUser} = useAuthStore()
      const [visible, setVisible] = useState(false)
      const navbarRef = useRef(null)

      // Use useGSAP hook properly
      useGSAP(() => {
        if (visible) {
          // Open animation
          gsap.to(navbarRef.current, {
            left: "0%",
            duration: 0.5,
            ease: "power2.out"
          })
        } else {
          // Close animation
          gsap.to(navbarRef.current, {
            left: "100%",
            duration: 0.5,
            ease: "power2.in"
          })
        }
      }, [visible]) // Dependency array

      const openMenu = () => {
        setVisible(true)
      }

      const closeMenu = () => {
        setVisible(false)
      }

      return (
        <>
          {/* Desktop Nav */}
          <div className='flex max-md:hidden items-end justify-around bg-[#f1f1f1] pb-6'>
            <Link to="/">
              <div className='flex items-end gap-2'>
                <img src={logo} alt="Logo" />
                <h1 className='text-2xl font-semibold'>SHOPPER</h1>
              </div>
            </Link>
            <div className='flex gap-5 text-xl items-center font-semibold'>
              <Link to="/" className='hover:text-gray-500'>Home</Link>
              <Link to="/Men" className='hover:text-gray-500'>Men</Link>
              <Link to="/Women" className='hover:text-gray-500'>Women</Link>
              <Link to="/Kids" className='hover:text-gray-500'>Kids</Link>
            </div>
            <div className='flex items-center gap-2'>
              {
                isLoggedIn ? (
                  <Link to="/profile">
                  <div className="w-10 text-xl font-semibold h-10 rounded-full bg-gray-200 cursor-pointer flex items-center justify-center">
          {/* {authUser?.name.split("")[0] || "U"} */}
          <img src="https://png.pngtree.com/png-clipart/20190904/original/pngtree-user-cartoon-girl-avatar-png-image_4492903.jpg" alt="" />
        </div>
                  </Link>
      ) : (
        <Link to="/login">
        <button className="btn btn-xs rounded-full sm:btn-sm md:btn-md lg:btn-lg xl:px-10">
          Login
        </button>
              </Link>
      )
    }

              <Link to="/cart">
                <ShoppingCart className='w-10 h-8 cursor-pointer'/>
              </Link>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className='md:hidden flex justify-between px-10 py-2 items-end '>
            <Link to="/">
              <div className='flex items-end gap-2'>
                <img src={logo} className='w-13' alt="Logo" />
                <h1 className='text-2xl font-semibold'>SHOPPER</h1>
              </div>
            </Link>
            <div>
              <Menu className='w-8 h-8 cursor-pointer' onClick={openMenu}/> 
            </div>
            
            {/* Mobile Menu Overlay */}
            <div 
              ref={navbarRef}
              className='flex flex-col absolute top-0 left-[100%] gap-5 text-xl font-semibold w-full h-screen p-10 bg-[#f1f1f1] z-50'
            >
              <X 
                className='cursor-pointer absolute top-8 right-8 w-10 h-8' 
                onClick={closeMenu}
              />
              <div className='mt-16 flex flex-col gap-6'>
                <Link to="/" className='hover:text-gray-500' onClick={closeMenu}>Home</Link>
                <Link to="/Men" className='hover:text-gray-500' onClick={closeMenu}>Men</Link>
                <Link to="/Women" className='hover:text-gray-500' onClick={closeMenu}>Women</Link>
                <Link to="/Kids" className='hover:text-gray-500' onClick={closeMenu}>Kids</Link>
                <div className='flex items-center gap-4 mt-6'>
                  <Link to="/login" onClick={closeMenu}>
                    <button className='btn btn-sm rounded-full px-6'>Login</button>
                  </Link>
                  <Link to="/cart" onClick={closeMenu}>
                    <ShoppingCart className='w-8 h-8 cursor-pointer'/>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Backdrop overlay */}
          {visible && (
            <div 
              className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
              onClick={closeMenu}
            />
          )}
        </>
      )
    }

    export default Navbar