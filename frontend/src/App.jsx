import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation} from "react-router-dom";
import Navbar from "./Components/Navbar";
const Footer = lazy(()=> import("./Components/Footer"));
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./States/authStore";

// Lazy imports for route-based code splitting
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const Men = lazy(() => import("./Pages/Men"));
const Women = lazy(() => import("./Pages/Women"));
const Kids = lazy(() => import("./Pages/Kids"));
const Cart = lazy(() => import("./Pages/Cart"));
const Signup = lazy(() => import("./Pages/Signup"));
const Login = lazy(() => import("./Pages/Login"));
const AdminPage = lazy(() => import("./Pages/AdminPage"));
const ProductPage = lazy(() => import("./Components/ProductPage")); 
const ProfileSection = lazy(() => import("./Components/ProfileSection")); 

const App = () => {

  const {isLoggedIn, Check} = useAuthStore()

  useEffect(()=>{
    Check()
  }, [])

  const location = useLocation()
  const hideFooterRoutes = ["/login", "/signup", "/profile"]
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div>
      <Navbar />
      <Toaster />
      <Suspense fallback={ <div className="flex justify-center"><span className="loading loading-spinner loading-xl h-screen "></span></div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Cart" element={ isLoggedIn ?  <Cart /> : <Signup />} />
          <Route path="/AdminPage" element={isLoggedIn ? <AdminPage /> : <Signup />} />
          <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/Signup" element={isLoggedIn ? <LandingPage /> : <Signup />} />
        <Route path="/Login" element={isLoggedIn ? <LandingPage /> : <Login />} />
        <Route path ="/profile" element={isLoggedIn ? <ProfileSection /> : <Login />}/> 
        </Routes>
      </Suspense>
     
      {!shouldHideFooter && <Footer />}
    </div>  
  );
};

export default App;
