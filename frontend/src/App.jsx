import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Cart from './Pages/Cart'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import AdminPage from './Pages/AdminPage'
import Navbar from './Components/Navbar'
import ProductPage from './Components/ProductPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/Men" element={<Men />}/>
        <Route path="/Women" element={<Women />}/>
        <Route path="/Kids" element={<Kids />}/>
        <Route path="/Cart" element={<Cart />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/AdminPage" element={<AdminPage />}/>
        <Route path='/product/:id' element={<ProductPage />} /> 
      </Routes>
    </div>
  )
}

export default App  