//import React, { ChangeEvent } from 'react'
import { Activity, ShoppingBasket} from "lucide-react";
import { useState } from "react";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api_url = 'http://localhost:4000/my-backend/routes/auth';

function Registerpage() {
  const Navigate = useNavigate();
  const [form ,setForm] = useState({fullName:"",email:"",password:""});
  

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setForm({...form,[e.target.name]:e.target.value});//setForm({...form,[e.target.name]:e.target.value}); = its a react updater form that automatically updates the react form

  };
  const handleSubmit = async (e:React.FormEvent) =>{
       e.preventDefault();
       try{
        const {data} =await axios.post(`${api_url}/register`,form,{withCredentials:true});

        if(data.token){
          toast.success(data.message,{position:"top-center"});
          setTimeout(()=>Navigate("/cart"),2000);
        }
        else{
          toast.error(data.error,{position:"bottom-left"});
          
        }
       }catch(error:any){
       toast.error(error?.response?.data?.message || "Registration failed.");
         
       }
       setForm({fullName:"",email:"",password:""});
  };

  
  
  
 
 
  return (
    <>
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0e1232] px-4 sm:px-0">
    
    <div className="glass-card rounded-3xl shadow-xl p-8 border border-gray-100/10 bg-white/5 w-full max-w-[370px] shadow-white/10 my-8">
    <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <ShoppingBasket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                UniEvent
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2" >Create your account</h1>
            <p className="text-white/50 text-sm">Join the university's vibrant event hub</p>
          </div>  
           
            


            
            
      <label htmlFor="username" className="ml-2 text-xs font-semibold text-white/70 uppercase tracking-wider">Username:</label><br />
      
      <input type="text" id="username" placeholder='username' className="input-field mt-2 mb-8 p-2 w-full ml-1 rounded border border-gray-100/10 text-white/30 bg-gray-900 " onChange={handleChange} value={form.fullName} name='fullName' /><br />
      <label htmlFor="email" className="ml-2 text-xs font-semibold text-white/70 uppercase tracking-wider" >Email-id:</label><br />
      <input type="email" id="email" placeholder='email-id' className="input-field mt-2 p-2 w-full ml-1 rounded border border-gray-100/10 bg-gray-900 text-white/30"onChange={handleChange} value={form.email} name='email' /><br /><br />
      <label htmlFor="password" className="ml-2 text-xs font-semibold text-white/70 uppercase tracking-wider">Password:</label><br />
      <input type="password" id="password" placeholder='password' className="input-field mt-2 p-2 w-full ml-1 rounded border border-gray-100/10 bg-gray-900 text-white/30" onChange={handleChange} name='password'value={form.password}/><br />
      <div className="flex items-center gap-2 px-1">
        
    
        
      <button type='submit' onClick={handleSubmit} className="btn-gradient shadow-lg shadow-blue-500/20 ml-1 w-full mt-9 items-center hover:bg-blue-700 bg-blue-500 text-white p-2 rounded font-semibold" >Create Account </button>
      </div>
    </div>
    

    <ToastContainer />
    </div>
    
    </>
  )
}

export default Registerpage