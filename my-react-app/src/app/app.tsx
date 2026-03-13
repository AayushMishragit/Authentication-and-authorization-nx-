import Form from "../pages/form";
import Registerpage from "../pages/Registerpage";
import HomePage from "../pages/Home";
import { BrowserRouter, Link, Routes, Route, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { JSX, useState } from 'react';
import { Navigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import Aboutpage from "../pages/About";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import {
  Home, ShoppingBag, ShoppingCart, LogIn,
  ShoppingBasket, User2, Users, Menu, X
} from "lucide-react";

function ProtectedRoute({ children, isAuthenticated }: { children: JSX.Element, isAuthenticated: boolean }) {
  if (!isAuthenticated) {
    if (!toast.isActive("auth-error")) {
      toast.error("You must login first!", { position: "top-right" });
    }
    return <Navigate to="/login" replace />;
  }
  return children;
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
      isActive(path)
        ? "text-blue-400 bg-blue-900/30"
        : "text-gray-300 hover:text-blue-400 hover:bg-blue-900/20"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-[#111537] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <ShoppingBasket className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-blue-400">ShopHub</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/" className={navLinkClass("/")}>
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link to="/products" className={navLinkClass("/products")}>
              <ShoppingBag className="w-5 h-5" />
              <span>Products</span>
            </Link>
            <Link to="/cart" className={navLinkClass("/cart")}>
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </Link>
            <Link to="/about" className={navLinkClass("/about")}>
              <Users className="w-5 h-5" />
              <span>About</span>
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login" className={navLinkClass("/login")}>
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              <User2 className="w-5 h-5" />
              <span>Sign Up</span>
            </Link>
          </div>

          {/* Hamburger Button - Mobile Only */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-blue-900/20 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#111537] px-4 pb-4 pt-2 flex flex-col gap-1 animate-fade-in">
          <Link to="/" className={navLinkClass("/")} onClick={closeMenu}>
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link to="/products" className={navLinkClass("/products")} onClick={closeMenu}>
            <ShoppingBag className="w-5 h-5" />
            <span>Products</span>
          </Link>
          <Link to="/cart" className={navLinkClass("/cart")} onClick={closeMenu}>
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </Link>
          <Link to="/about" className={navLinkClass("/about")} onClick={closeMenu}>
            <Users className="w-5 h-5" />
            <span>About</span>
          </Link>

          {/* Divider */}
          <div className="border-t border-white/10 my-2" />

          <Link to="/login" className={navLinkClass("/login")} onClick={closeMenu}>
            <LogIn className="w-5 h-5" />
            <span>Login</span>
          </Link>
          <Link
            to="/register"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            onClick={closeMenu}
          >
            <User2 className="w-5 h-5" />
            <span>Sign Up</span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("token") ? "true" : "false";
  });

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/login" element={<Form onLogin={setIsAuthenticated} />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<Aboutpage />} />

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

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;