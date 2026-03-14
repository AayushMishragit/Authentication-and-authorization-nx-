//import React from 'react'
import { useNavigate} from "react-router-dom";
import { Activity, LogIn, ShoppingBasketIcon} from "lucide-react";
import { useState } from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
//import bcrypt from "bcryptjs";



function Form({ onLogin }: { onLogin: (auth: boolean) => void }) {
  const [form,setForm] = useState({email:"",password:""});
  const navigate = useNavigate();
  

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      "https://authentication-and-authorization-nx-1.onrender.com/my-backend/routes/auth/login",
      form
    );

    if (data.token) {
      localStorage.setItem("authToken", data.token);
      toast.success("Login successful!");
      onLogin(true);
      navigate("/"); // navigate immediately
    } else {
      toast.error("Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("Login error:", error);
    toast.error("Some issue is coming", { position: "top-right" });
  }
}
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form,[e.target.name]:e.target.value});
  }
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0e1232] px-4 sm:px-0">
    
    <div className="glass-card rounded-3xl shadow-xl p-8 border border-gray-100/10 bg-white/5 w-full max-w-[370px] shadow-white/10 my-8">
    <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <LogIn className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                ShopHub
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/50 text-sm">Connect with your university community today</p>
          </div>
      <label htmlFor="email" className="ml-2 text-xs font-semibold text-white/70 uppercase tracking-wider">Email:</label><br />
      <input type="email" name="email"id="email" placeholder='email' onChange={handleChange} className="input-field mt-2 mb-8 p-2 w-full ml-1 rounded border border-gray-100/10 text-white/30 bg-gray-900 " /><br />
      <label htmlFor="password" className="ml-2 text-xs font-semibold text-white/70 uppercase tracking-wider">Password:</label><br />
      <input type="password" name="password" id="password" placeholder='password' onChange={handleChange} className="input-field mt-2 mb-8 p-2 w-full ml-1 rounded border border-gray-100/10 text-white/30 bg-gray-900 " /><br />
      <div className="flex items-center gap-2 px-1">
        
    
        
      <button className="btn-gradient shadow-lg shadow-blue-500/20 ml-1 w-full mt-9 items-center hover:bg-blue-700 hover:transition-500 bg-blue-500 text-white p-2 rounded font-bold" onClick={handleSubmit}>Login</button>
      </div>
      
    </div>

    

    <ToastContainer/>
    </div>
  )
}

export default Form;