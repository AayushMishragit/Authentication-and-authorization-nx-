import React from 'react'
import { ShoppingCart,Heart,Star,StarHalf } from 'lucide-react';

function Products() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow bg-[#111537]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
    {/* Product Card Loop (Simulated 12 cards) */}
    {/* Card 1 */}
    <div className=" bg-[#111537] group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800  transition-all hover:shadow-xl hover:shadow-primary/5">
      <div className="aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
        <img alt="Product" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Modern high-end wireless studio headphones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDivmBa_0QQYueIEVtLerbzrG5wsQAy8AoTOf2n7MBRXXKjhmuCNcC8FfjD2OuPaWx1urhBT8bRQEV0T8EUr91MzNjASL5mBcwxX3BRQcDNYzKqxo9hfQH14ZGllp2-qKsvrydOjbq79zMSa80zJbJ7QI0HRbgsLUeoOzhWA_RSAjwwrGFIwuErz9u-YJ4yP1dcqG7_wulVEZNv4otS71PoCQqS0FOy2ftlAi50-uCix3mCcU94nN2_uP1O9MtkY_uHDoXBgegk4tgC" />
        <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-900 dark:text-white hover:text-red-500 transition-colors">
          <span className="material-symbols-outlined !text-xl">
            <Heart size='18' />
          </span>
        </button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs font-medium text-blue-500">
          Electronics
        </div>
        <h3 className="mb-2 text-base font-bold leading-tight line-clamp-2">
          Premium Noise-Cancelling Headphones
        </h3>
        <div className="mb-4 flex items-center gap-1">
          <div className="flex text-amber-400">
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm">
              <StarHalf size="19"/>
             
            </span>
          </div>
          <span className="text-xs text-slate-500">
            (128)
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold">
            $299.00
          </span>
          <button className="flex items-center justify-center rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined !text-xl">
             <ShoppingCart size='19' className="text-black-900"/>
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Card 2 */}
    <div className="bg-gray-900 group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800  transition-all hover:shadow-xl hover:shadow-primary/5">
      <div className="aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
        <img alt="Product" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Minimalist elegant white smart watch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM8whrI8FZPrchlWPH-a-TNj6sRVi-PDTrx9VHbisy0EpeN82_D-wX7jQToCoTXx-D149dzojeqVZbUTVX9K-HRAnGJ9LADFdKALX2_poJ0w91xjpocutVupvYjRe8_IZSJpfoVnX1E6nYWEjbWabdJewhd7B1QiTpK-iCowTP2Ot4LvuH98ud1Rw5qzSk1uyBaYwDnzd2kPzqydBySxfplZfbYTDcDw_zXFoNPr1XUTHgZVNzmuq1K83F06bBc3DCCSvq03_6FmwP" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs font-medium text-white">
          Accessories
        </div>
        <h3 className="mb-2 text-base font-bold leading-tight line-clamp-2">
          Minimalist Smart Watch Series 5
        </h3>
        <div className="mb-4 flex items-center gap-1">
          <div className="flex text-amber-400">
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
          </div>
          <span className="text-xs text-slate-500">
            (84)
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold">
            $159.00
          </span>
          <button className="flex items-center justify-center rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-white/90 transition-colors">
            <span className="material-symbols-outlined !text-xl">
             <ShoppingCart size='19' className="text-black-900"/>
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Card 3 */}
    <div className="bg-gray-900 group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800  transition-all hover:shadow-xl hover:shadow-white/5">
      <div className="aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
        <img alt="Product" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Vintage style analog instant camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMC1XmTIoNUoCSOgkoXiPOz7kebeQiTxeNFcgYW_bIGFzW1m8S0RSc54fwAY4mLnoscqf2E7oRQeUf3d09F3o-RYbJuR6lgFep5MPzRG4P_MJPdCbXbElr0aYirYkwVhiscimkYXl6bNogQhcFwHeASVn2isoCN5VZ681aTuPrNbvepLhfnEiyt0QY74y3M2EVZGLFmVkG5cqBZScoWonIy21UBEMoOBsF8nrQRVW2hptVFu2SJA1JZsUmfRQS-ej-Xh1WBe-gxehi" />
        <div className="absolute top-3 left-3 rounded bg-red-500 px-2 py-1 text-[10px] font-bold text-white uppercase">
          Sale
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs font-medium text-white">
          Photography
        </div>
        <h3 className="mb-2 text-base font-bold leading-tight line-clamp-2">
          Retro Analog Instant Camera
        </h3>
        <div className="mb-4 flex items-center gap-1">
          <div className="flex text-amber-400">
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm">
             <Star size="19"/>
            </span>
          </div>
          <span className="text-xs text-slate-500">
            (56)
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 line-through">
              $120.00
            </span>
            <span className="text-xl font-bold text-red-500">
              $89.00
            </span>
          </div>
          <button className="flex items-center justify-center rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-white/90 transition-colors">
            <span className="material-symbols-outlined !text-xl">
             <ShoppingCart size='19' className="text-black-900"/>
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Card 4 */}
    <div className="bg-gray-900 group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800  transition-all hover:shadow-xl hover:shadow-white/5">
      <div className="aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
        <img alt="Product" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Bright red performance running shoes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAppo8SCRr-X9q4XY9tp86468XB9YpM4hgqkO6MO1qOia38qjAvCi9imESVLKmD01LLzEz6QSCYnq37g9IQ_F4hgIxYzJq1MDbb0i7FbKbkJ30hL7tQbkYMUpayOLqx2ajC7YZD-h6H6mzHq3ZBg-431bEHjD4yHy_oB0tUjAb2K3pD8OIhXHhhMUs-NNqh7Y7Hhu77F9WaWP0mfkJMUmjy2HYDSitIPr2364KRscO9LRjGBxpPhVJfJ859_A2Cwf90deiW1BGXyrVs" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs font-medium text-white">
          Footwear
        </div>
        <h3 className="mb-2 text-base font-bold leading-tight line-clamp-2">
          HyperSpeed Running Sneakers
        </h3>
        <div className="mb-4 flex items-center gap-1">
          <div className="flex text-amber-400">
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm">
             <Star size="19"/>
            </span>
          </div>
          <span className="text-xs text-slate-500">
            (210)
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold">
            $125.00
          </span>
          <button className="flex items-center justify-center rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-white/90 transition-colors">
            <span className="material-symbols-outlined !text-xl">
             <ShoppingCart size='19' className="text-black-900"/>
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Card 5 */}
    <div className="bg-gray-900 group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800  transition-all hover:shadow-xl hover:shadow-white/5">
      <div className="aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
        <img alt="Product" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Stylish dark polarized sunglasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_89kojCCHDv8VwBdB0APhB2hhicSlPfWyhEkfeqD3eKdunw6pGQu7DepXjq5mdIQayW4XYvjwcZ51xncqeZp17q3LeDd64gZMEmrGUwYwdS6G-pSN2yrg4-FFb8qTW58vXjgfQZ1MA7cdOTx_XedSuAvq9RQrazuNA-GV_WrEO_sRqHhxRcloU9I2P_ypIZehQAs6r19atwwb7b1dDGW2jdjebX81KjpZXWVAb4wUyEZpuynXDM4F7nvttETxQUjRbGGogZfwp5bF" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs font-medium text-white">
          Fashion
        </div>
        <h3 className="mb-2 text-base font-bold leading-tight line-clamp-2">
          Polarized UV Protection Sunglasses
        </h3>
        <div className="mb-4 flex items-center gap-1">
          <div className="flex text-amber-400">
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm">
              <StarHalf size="19"/>

            </span>
          </div>
          <span className="text-xs text-slate-500">
            (42)
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold">
            $45.00
          </span>
          <button className="flex items-center justify-center rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-white/90 transition-colors">
            <span className="material-symbols-outlined !text-xl">
             <ShoppingCart size='19' className="text-black-900"/>
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Card 6 */}
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800  transition-all hover:shadow-xl hover:shadow-white/5">
      <div className="aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
        <img alt="Product" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Professional grade digital gaming mouse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKcmSD5Y3CMJBqocjQkK1H6ayt6z_cs1OMdhj62WcBTIgFLEwt4Ksa6Jew0kS-14lbqCOkuW37nP51vo68GYO7Xzs8WvqGOcNaFsz3_sF_TeE49mr81tT_7CAMhbCeBya2GxFjkx2YmT_myv9LVLUsMq4b3qmlkknwt2adM96NSNawKvOofPjsXNn-QRXkm-BrHhuJh3dzUdpJ4sTMPywfYk036Kvu93K4w5GXnHqKJpqvInV83-tbLt1IhY-dwUcuuIxljHLXEy4o" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs font-medium text-white">
          Gaming
        </div>
        <h3 className="mb-2 text-base font-bold leading-tight line-clamp-2">
          RGB Wireless Gaming Mouse
        </h3>
        <div className="mb-4 flex items-center gap-1">
          <div className="flex text-amber-400">
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
          </div>
          <span className="text-xs text-slate-500">
            (312)
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold">
            $79.99
          </span>
          <button className="flex items-center justify-center rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-white/90 transition-colors">
            <span className="material-symbols-outlined !text-xl">
             <ShoppingCart size='19' className="text-black-900"/>
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Card 7 */}
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800  transition-all hover:shadow-xl hover:shadow-white/5">
      <div className="aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
        <img alt="Product" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Classic white leather low top sneakers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJwAttPFcIevXBTKbO7q77FE2wj1OFWQbeJekH5f-ZTb_q8hE7Qk5VYKMmek-TXfOwjOIiiI1DY6tRCOXmt750-aU0O7pLFpTe6O9_CLv4NmkxK1KSYqPHZJmkS5hIrLDmM-KW2Cr1dK5Jfar6xT8ss4k_P9nJ1YWqMHYCp7J0xG1nY6mFgO61K8nk2R2GafqnKq0HIz7IBC6hzbVfR7in1Zt5YwYMoRFbNMqQIC0Fg-fPnsvrfXptdhZq-7PKPcBMokfQPdDTxO5R" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs font-medium text-white">
          Footwear
        </div>
        <h3 className="mb-2 text-base font-bold leading-tight line-clamp-2">
          Classic White Sneakers
        </h3>
        <div className="mb-4 flex items-center gap-1">
          <div className="flex text-amber-400">
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm">
             <Star size="19"/>
            </span>
          </div>
          <span className="text-xs text-slate-500">
            (156)
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold">
            $85.00
          </span>
          <button className="flex items-center justify-center rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-white/90 transition-colors">
            <span className="material-symbols-outlined !text-xl">
             <ShoppingCart size='19' className="text-black-900"/>
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Card 8 */}
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800  transition-all hover:shadow-xl hover:shadow-white/5">
      <div className="aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
        <img alt="Product" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Sleek space grey tablet with stylus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoE0gDqRGqAWNbQvNPz7lAD_JJ6dRZ8X1nH13F0pNwPbiHajjr36X1OOB34_XpnOwylLC5k5Md5F4PjTrLhmLOn-ImoJeKTAG1wjBmiipsTjhtpW69VWcBbAOu2mLQ2BOz8dFT4YefiJPyxCQW7vFtL628W9qV6nFblgvo9lajiZnd7l9Dk7ikOgqrATTw-uf9luL5Gq0_3wT2-EMa54cQORTwlDutZsVnJ64KxmgtaS7s4h1Wc2T4Yb9uuIoBDlKHm_0II53Z-uzE" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs font-medium text-white">
          Electronics
        </div>
        <h3 className="mb-2 text-base font-bold leading-tight line-clamp-2">
          Pro Tablet 11" 256GB
        </h3>
        <div className="mb-4 flex items-center gap-1">
          <div className="flex text-amber-400">
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm">
              <StarHalf size="19"/>

            </span>
          </div>
          <span className="text-xs text-slate-500">
            (98)
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold">
            $799.00
          </span>
          <button className="flex items-center justify-center rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-white/90 transition-colors">
            <span className="material-symbols-outlined !text-xl">
             <ShoppingCart size='19' className="text-black-900"/>
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Card 9 */}
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800  transition-all hover:shadow-xl hover:shadow-white/5">
      <div className="aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
        <img alt="Product" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Ergonomic over-ear gaming headset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbnPPU1UKHhRj4KwV9c8aVK4sia8G6-3L7Ig0ZYby6PoRmdr-N8dhMFf6jlBG1PsdiRUrVW2cY6t38FtA4K35yZb8zSah5Kyy2B9FzOdjRRZgaiBhjf6Y2U_w0pVbsUpH3y0JrYjX59V7Rf-m74OWPBKX_aI4mvUExHJMVM4R6EOw_cydEAHZrBrHi5gfx02RmgBV3nEFKhV5WMFmhi_14MphQaZmEM1WPhFrIWXOlSdcuHMDQw8DoaZktnYJoS9acZ0y423PqcX3T" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs font-medium text-white">
          Electronics
        </div>
        <h3 className="mb-2 text-base font-bold leading-tight line-clamp-2">
          Professional Gaming Headset
        </h3>
        <div className="mb-4 flex items-center gap-1">
          <div className="flex text-amber-400">
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm fill-1">
             <Star size="19"/>
            </span>
            <span className="material-symbols-outlined !text-sm">
           <StarHalf size="19"/>

            </span>
          </div>
          <span className="text-xs text-slate-500">
            (112)
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold">
            $129.99
          </span>
          <button className="flex items-center justify-center rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined !text-xl">
             <ShoppingCart size='19' className="text-black-900 "/>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</main>


    </div>
  )
}

export default Products