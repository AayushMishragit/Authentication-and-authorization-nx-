import React from 'react'
import {Plus,Minus,ArrowRight,Truck} from "lucide-react";
import { useState } from 'react';




function Cart() {
  
const [counts, setCounts] = useState<{ [key: number]: number }>({ 1: 0, 2: 0, 3: 0 });

const increase = (id: number) => {
  setCounts(prev => ({ ...prev, [id]: prev[id] + 1 }));
};

const decrease = (id: number) => {
  setCounts(prev => ({ ...prev, [id]: prev[id] > 0 ? prev[id] - 1 : 0 }));
};
  return (
    <>
    <div className="bg-[#0f172a]">
    <div className="mb-8 ">
  <h1 className="text-3xl font-black text-white mb-2">
    Shopping Cart
  </h1>
  <p className="text-slate-500 dark:text-slate-400">
    You have 3 items in your basket
  </p>
</div>
<div className="flex flex-col lg:flex-row gap-8">
  {/* Left Column: Cart Items */}
  <div className="flex-grow space-y-4">
    {/* Item 1 */}
    <div className="flex items-center gap-6 p-4 bg-[#0f172a] dark:bg-slate-900/50 border border-slate-800 rounded-xl">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
        <img className="h-full w-full object-cover" data-alt="Premium wireless overhead noise cancelling headphones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZVFjpAHix2LOpj0ppuczZUhF5LuQiccjkqIvAWlXG_alj5aeFa6aRoP0PdjELNC3WWJdYhzww_FzywT_1inpJDlmFH_0mmuKn6-WeE0eQ9Z2t3reoYrklGDrZykT8LNdv326PL8Kmw3WOES31DxguAhBVv2HTzSWDCXn9m1i0fyNJXMXKR7U61brJ_yG3izFRBko73PgDXpPC-J2hp9sT3K1Zqvu-ol4M_H0SzPzQKPz3-CFRQWcvmAa3q-XaijaLFEBEPG-FPePo" />
      </div>
      <div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">
            Premium Wireless Headphones
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Space Gray | Wireless
          </p>
          <p className="mt-1 text-white font-bold">
            $299.00
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/50 p-1">
            <button onClick={() => decrease(1)} className="p-1 hover:text-primary transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">
                <Minus size='18'/>
              </span>
            </button>
            <input className="w-10 text-center bg-transparent border-none focus:ring-0 text-sm font-bold" type="number" value={counts[1]} readOnly />
            <button onClick={() => increase(1)}className="p-1 hover:text-primary transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">
                <Plus size='18'/>
              </span>
            </button>
          </div>
          <div className="text-right min-w-[80px]">
            <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold text-[10px]">
              Subtotal
            </p>
            <p className="text-lg font-bold text-white">
              $299.00
            </p>
          </div>
          <button className="text-slate-400 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined">
              delete
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Item 2 */}
    <div className="flex items-center gap-6 p-4 bg-[#0f172a] dark:bg-slate-900/50 border border-slate-800 rounded-xl">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
        <img className="h-full w-full object-cover" data-alt="Mechanical gaming keyboard with RGB lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH_ldHRS19vjFr-J_Gd1h-mjJiC8l4GVF70CqYPIXNjuO9cnJVAJMhOz0WGGuR0_66Q4X3o1124-BNwAdApmAPh6ExB1JIjiSPs4kb2_sHE6nCLGbQcd4MgB1TYvr8MFTn5gFOXTzZkj_j4tyr8WKtrMb6OjM6G-1a0-EHSA1EoQYGjXVjN27JtEveKPe5OZGQNKhwiORi7BXWGKN-o-L1jfT6db-fMgvAth8xrHdaihZ0EoxVH-uwtK8kNZWbahCwa9bNRC4t3V7s" />
      </div>
      <div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">
            Mechanical Keyboard
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Tactile Switches | RGB
          </p>
          <p className="mt-1 text-white font-bold">
            $159.00
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/50 p-1">
            <button onClick={() => decrease(2)} className="p-1 hover:text-primary transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">
               <Minus size='18'/>
              </span>
            </button>
            <input className="w-10 text-center bg-transparent border-none focus:ring-0 text-sm font-bold" type="number" value={counts[2]} readOnly/>
            <button onClick={() => increase(2)}className="p-1 hover:text-primary transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">
               <Plus size='18'/>
              </span>
            </button>
          </div>
          <div className="text-right min-w-[80px]">
            <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold text-[10px]">
              Subtotal
            </p>
            <p className="text-lg font-bold text-white">
              $159.00
            </p>
          </div>
          <button className="text-slate-400 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined">
              delete
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Item 3 */}
    <div className="flex items-center gap-6 p-4 bg-[#0f172a] dark:bg-slate-900/50 border border-slate-800 rounded-xl">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
        <img className="h-full w-full object-cover" data-alt="Ergonomic wireless computer mouse black" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWctynqNDVaDyXqcci-0aunRM2J_e21ClK8XbueGqMrJNsfpjYUu9bzh-H_eRepE5trEH99x47OHz0YHPYzC36YyAwjAgSQVlzfxqI0Gijwsgo_i3-LZx9Mmi8-CUClFedgWzDse7sz0Fc8S5Df3_e1YEBu0JMhtWtd7HkKkco2BoyRvSsFVFZQilVgCpXXTZ1qrva5qhXO-hTAGfplAqeayxI_JS8ThJksPg1I2GV9fjlmCB2dOyottY_H6cRlSMNLVKtalwubhf3" />
      </div>
      <div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">
            Ergonomic Mouse
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Bluetooth | 4000 DPI
          </p>
          <p className="mt-1 text-white font-bold">
            $49.00
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/50 p-1">
            <button onClick={() => decrease(3)} className="p-1 hover:text-primary transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">
               <Minus size='18'/>
              </span>
            </button>
            <input className="w-10 text-center bg-transparent border-none focus:ring-0 text-sm font-bold" type="number" value={counts[3]} readOnly />
            <button onClick={() => increase(3)} className="p-1 hover:text-primary transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">
               <Plus size='18'/>
              </span>
            </button>
          </div>
          <div className="text-right min-w-[80px]">
            <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold text-[10px]">
              Subtotal
            </p>
            <p className="text-lg font-bold text-white">
              $98.00
            </p>
          </div>
          <button className="text-slate-400 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined">
              delete
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Right Column: Order Summary */}
  <div className="lg:w-96 flex-shrink-0">
    <div className="bg-[#0f172a] dark:bg-slate-900 border border-slate-800 rounded-xl p-6 sticky top-24">
      <h2 className="text-xl font-bold text-white mb-6">
        Order Summary
      </h2>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-slate-600 dark:text-slate-400">
          <span>
            Subtotal
          </span>
          <span className="font-medium text-slate-900 dark:text-white">
            $556.00
          </span>
        </div>
        <div className="flex justify-between text-slate-600 dark:text-slate-400">
          <span>
            Shipping
          </span>
          <span className="font-medium text-slate-900 dark:text-white">
            $12.00
          </span>
        </div>
        <div className="flex justify-between text-slate-600 dark:text-slate-400">
          <span>
            Estimated Tax
          </span>
          <span className="font-medium text-slate-900 dark:text-white">
            $44.48
          </span>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-4 flex justify-between">
          <span className="text-lg font-bold text-white">
            Total
          </span>
          <span className="text-lg font-bold text-white">
            $612.48
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <button  className="w-full bg-blue-400 hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
          <span>
             Checkout Now
          </span>
          <span className="material-symbols-outlined">
            <ArrowRight size="18"/>
          </span>
        </button>
        <p className="text-center text-xs text-slate-500 dark:text-slate-400">
          Taxes and shipping calculated at checkout
        </p>
      </div>
   <div className="mt-8 pt-6 border-t border-slate-800">
  <div className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg">
    <span className="material-symbols-outlined text-primary">
      <Truck size="22" className='text-blue-500'/>
    </span>
    <div className="text-xs">
      <p className="font-bold text-white dark:text-white">
        Free Express Delivery
      </p>
      <p className="text-slate-500 dark:text-slate-400">
        For orders over $500.00
      </p>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cart