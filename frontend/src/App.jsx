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

const App = () => {
  return (
    <div>
      <Routes>
        <Route to="/" element={<LandingPage />}/>
        <Route to="/Men" element={<Men />}/>
        <Route to="/Women" element={<Women />}/>
        <Route to="/Kids" element={<Kids />}/>
        <Route to="/Cart" element={<Cart />}/>
        <Route to="/Signup" element={<Signup />}/>
        <Route to="/Login" element={<Login />}/>
        <Route to="/AdminPage" element={<AdminPage />}/>
      </Routes>
    </div>
  )
}

export default App  