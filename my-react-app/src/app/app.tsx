import Form from "../pages/form";
import Registerpage from "../pages/Registerpage";
import HomePage from "../pages/Home";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { JSX, useState } from 'react';
import { Navigate } from "react-router-dom";
import {Footer} from "../components/Footer";
import Aboutpage  from "../pages/About";


import Cart from "../pages/Cart";
import Products from "../pages/Products";
import { Home, ShoppingBag, ShoppingCart, LogIn, ShoppingBasket, User2,Users } from "lucide-react";

function ProtectedRoute({ children, isAuthenticated }: { children: JSX.Element, isAuthenticated: boolean }) {
  if (!isAuthenticated) {
      if (!toast.isActive("auth-error")) {
      toast.error("You must login first!", {
        position: "top-right",
        
      });
    }
    return <Navigate to="/login" replace />;
  }
  return children;
}



export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(()=>{
    return localStorage.getItem("token")?"true":"false";

  });

  const isActive = (path: string) => location.pathname === path;


  return (
    <>
    <BrowserRouter>
      <nav className="bg-[#111537] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 mt-1 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <ShoppingBasket className="w-8 h-8 text-white" />
              </div>
               <span className="font-bold text-xl text-blue-400 ">ShopHub</span>
            </div>
              
              
            </Link>

            <Link to="/" className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive("/") ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}>
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>

            <Link to="/products" className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive("/products") ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}>
              <ShoppingBag className="w-5 h-5" />
              <span>Products</span>
            </Link>

            {/* search */}
            <Link
              to="/cart"
              
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive("/cart") ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}>
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </Link>

            <Link
              to="/about"
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive("/cart") ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}>
              <Users  className="w-5 h-5" />
              <span>About</span>
            </Link>

            <div className="flex items-center gap-3">
              <Link to="/login" className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive("/login") ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}>
                <LogIn className="w-5 h-5" />
                <span>Login</span>
              </Link>

              <Link to="/register" className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive("/register") ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}>
                <User2 className="w-5 h-5" />
                <span>Sign Up</span>
              </Link>
            </div>

          </div>
        </div>
      </nav>
      <ToastContainer />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Form onLogin={setIsAuthenticated} />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<Aboutpage/>}/>

        {/* Protected Route */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
<Footer/>
    </BrowserRouter>
   
      

   </> 
  );
}

export default App;