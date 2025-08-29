import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "./Pages/Cart";
import CollectionPage from "./Pages/CollectionPage";
import AdminDashboard from "./Pages/AdminDashboard";
import CheckOut from "./Components/CheckOut";
import ProductPage from "./Components/ProductPage";
import { AnimatedGridPattern } from "@/Components/magicui/animated-grid-pattern.jsx";

function App() {
  return (
    <div>
      <AnimatedGridPattern />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/collection" element={<CollectionPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
    </div>
  );
}

export default App;