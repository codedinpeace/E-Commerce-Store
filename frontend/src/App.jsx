import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
const Footer = lazy(()=> import("./Components/Footer"));

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

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={ <div className="flex justify-center"><span className="loading loading-spinner loading-xl h-screen "></span></div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
