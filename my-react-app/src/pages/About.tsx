import React from 'react'
import {ChevronRight,Plus,Minus,Star,StarHalf,CheckCircle} from "lucide-react";

function Aboutpage() {
  return (
    <div>
        <main className="max-w-7xl mx-auto px-4 py-8 bg-[#111537]">
  <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
    <a className="hover:text-[#3c83f6]" href="#">
      Home
    </a>
    <span className="material-symbols-outlined text-xs">
      <ChevronRight size={16}/>
    </span>
    <a className="hover:text-[#3c83f6]" href="#">
      Electronics
    </a>
    <span className="material-symbols-outlined text-xs">
      <ChevronRight size={16}/>
    </span>
    <span className="text-slate-300 dark:text-slate-100 font-medium">
      Headphones
    </span>
  </nav>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
    <div className="flex flex-col gap-4">
      <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img alt="Premium Wireless Headphones Main View" className="w-full h-full object-cover" data-alt="High quality overhead view of premium wireless headphones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpe-gdDoo79i-VDWEAr9ReL5PBfdZHLN6YLEUIEik--ICOpXMHo39ImYTu9VTNNKwTaJ7jwAHmfKfQo2IxjnZHp_dGCFZODe0l-9DkE9QGx0_8dpGQIiFBj1JisxkYFPUpsqkCRE9Jy6d8Fg8GrBcIGuBoFs9QLp0WqICiNp68EYkvFGShcviX2J_9wK1_IyIb8HayjYDbqab2Y39GUfKiViJYiV25WKznjMTDv5fGEnUZyye0Jt_mpI-4EHqW-HoM0uDFl4nDbsI4" />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="aspect-square rounded-xl overflow-hidden ring-2 ring-primary cursor-pointer">
          <img alt="Thumbnail 1" className="w-full h-full object-cover" data-alt="Main perspective of headphones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMDEivXBR4Ckq5TUk7h6s90ZVYt--BzHRBEACv3qrX3kIGGxwuxB3QbR1JVQ2309HL69K9BlCVUc434ySh9u5YEIpODKclKMQ74bxQpobDKzVZvqH2_t0PS03-1IxusJ01b_H4y990hFK0rzN4CeZVgk9_gGWV_n_1IwDRFYbuELBJIPGiXhY1Kl23HFJmFzYvsRv4MGwJbf7in1zEf_EgpMWXRlWCYE4aUICUuRReF6DNi_Uj-0ukSXSN9b1tcycW5HPxjjNY4SU8" />
        </div>
        <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <img alt="Thumbnail 2" className="w-full h-full object-cover" data-alt="Close up of ear cushion detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXGUp33jnl0vo1M_nojVI74V2hE9Jf323CGrtBKnY_CiQVWQvMGVn4uZToaEEIYoY5bHR3mC6O6FqGb_WEmm2iB44bbbZxlSnp54kl789i68vZdqbzv4Iy71b5kQLxRUGH6FOJNr8hGMDaLjgvweprDUbR53L_U7NFFBfBJXVA9ysjGoMbFsB8t7HsMKmZh76SMnL3APAptQScFYsz56_T_Y-FWepvzGTEWytoVVE88kWxN2upFErRvXJpvmycOjk1oY8xtIJL-dpe" />
        </div>
        <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <img alt="Thumbnail 3" className="w-full h-full object-cover" data-alt="Headphones profile side view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5QEqqG_p9K7LNHbNqDf-sKrP5PFtCpfWlMFHmkmzWeNkaz1gMYRsxssO4Sr-8ibsFyrS1q188WntOTL6ns-Bl-M4ZK4AHvX58J7556S1WK79OVpTFwJw1RXXbxVkasWktqbkTPljykdeEWoYTqxS-5QuK84y2TQNO4mKnKVvArSVK7q3kuw3CrLpPNm46XJ2IOfEBg54vwPaBEAJOqiHO4aiNq7ExvaSr0KYSvC3csSajh4it75NdM_X3-H2KstRcHLpf9O_aaGEU" />
        </div>
        <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <img alt="Thumbnail 4" className="w-full h-full object-cover" data-alt="Headphones in charging case" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEA9-c8-RKvxSFqiDhUQ9GX0s7zez_hJQlMJZpd38TrouVUiConQjDMn9XEH_-c0esiItQGNg5vBgqAcjD6oA7WQ0RK0XH9mDsC2g3UJlo-GkayQyd1lJlt13yyr5hXV_rmxQ0AdXUdm9zSjX4DQ1xA0k5Xvi9_aqDeqEK-V1RUyPKd3u71UdB5_QPoRiS0U8nZjRuTciMuOaUAR1IJffBNQ214BkHSTGAixL6pgpArxhcNsHDv7swzkgAl0ksJOfmUCFhPjouuspb" />
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-6">
      <div>
        <span className="text-[#3c83f6] font-semibold text-sm tracking-wider uppercase">
          Premium Audio
        </span>
        <h1 className="text-4xl font-bold text-white mt-2 leading-tight">
          Pro Sound Wireless Headphones Max
        </h1>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-1 text-amber-400">
            <span className="material-symbols-outlined fill-1">
              <Star size="18" className='text-yellow'/>
            </span>
            <span className="material-symbols-outlined fill-1">
              <Star size="18" className='text-yellow'/>
            </span>
            <span className="material-symbols-outlined fill-1">
              <Star size="18" className='text-yellow'/>
            </span>
            <span className="material-symbols-outlined fill-1">
              <Star size="18" className='text-yellow'/>
            </span>
            <span className="material-symbols-outlined">
              <StarHalf size="18" className='text-yellow'/>
            </span>
          </div>
          <span className="text-sm text-slate-600 font-medium">
            4.5/5 (2,490 reviews)
          </span>
        </div>
      </div>
      <div className="flex items-baseline gap-4">
        <span className="text-4xl font-bold text-white">
          $99.99
        </span>
        <span className="text-xl text-slate-400 line-through">
          $149.99
        </span>
        <span className="bg-[#3c83f6]/20 text-[#3c83f6] px-3 py-1 rounded-full text-xs font-bold">
          SAVE 33%
        </span>
      </div>
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-white">
          Key Features
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#3c83f6] text-xl">
              <CheckCircle size="18" className='text-green-400'/>
            </span>
            <span className="text-slate-600 dark:text-slate-300">
              Active Noise Cancellation (ANC) with transparency mode
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-xl">
              <CheckCircle size="18" className='text-green-400'/>
            </span>
            <span className="text-slate-600 dark:text-slate-300">
              Up to 40 hours of battery life with fast charging
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-xl">
             <CheckCircle size="18" className='text-green-400'/>
            </span>
            <span className="text-slate-600 dark:text-slate-300">
              High-fidelity audio with custom-built 40mm drivers
            </span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-6">
          <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-xl p-1 bg-white dark:bg-slate-900/50">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">
               <Minus size="20" />
              </span>
            </button>
            <span className="w-12 text-center font-bold">
              1
            </span>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">
               <Plus size="20"/>
              </span>
            </button>
          </div>
          <p className="text-sm text-slate-500">
            Only
            <span className="text-primary font-bold">
              12 units
            </span>
            left in stock!
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95">
            <span className="material-symbols-outlined">
              shopping_cart
            </span>
            Add to Cart
          </button>
          <button className="px-4 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">
              favorite
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="mb-20">
    <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8">
      <button className="px-8 py-4 border-b-2 border-primary text-primary font-bold text-sm uppercase tracking-wider">
        Description
      </button>
      <button className="px-8 py-4 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 font-bold text-sm uppercase tracking-wider transition-colors">
        Specifications
      </button>
      <button className="px-8 py-4 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 font-bold text-sm uppercase tracking-wider transition-colors">
        Reviews (2.4k)
      </button>
    </div>
    <div className="max-w-3xl prose dark:prose-invert">
      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
        Experience audio like never before with the Pro Sound Wireless Headphones Max. Engineered with advanced computational audio technology, these headphones deliver industry-leading noise cancellation while maintaining crystal-clear high fidelity.
      </p>
      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
        Designed for comfort, the breathable mesh canopy and memory foam ear cushions provide an exceptional fit for extended listening sessions. With integrated Siri/Google Assistant support and a dual-microphone system, your calls will always sound crisp regardless of your environment.
      </p>
    </div>
  </div>
  <section className="mb-12">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold">
        Related Products
      </h2>
      <a className="text-primary font-semibold flex items-center gap-1 hover:underline" href="#">
        View all
        <span className="material-symbols-outlined text-sm">
          arrow_forward
        </span>
      </a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="group cursor-pointer">
        <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4">
          <img alt="Related product 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Minimalist over-ear headphones in black" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS54XLmy3F13Wvtj35sVZMKVhxYOyGv7Jm0aZ0EMYl_8vgnX2WdH1uCS7Ypa3FV43tnyPwLXqQ-mZzgGcxFoONnpL-UMjSLdMwmLh67OdUkB5JROjIXCxvZXB-7eQt3KNQdwbTuFhbH-O6nl5rSegeLSdioRAgu8h0DFsgN1aWtGt6K6n51N1hyBFmk265UkLT5nTZBRx0ZEi-pD5Q7Haz9GMBbFWXRZ8_n_ZVmzOk060-EGgLvAJD8x3ZdiSjo2qu5xiaqKMAklRO" />
        </div>
        <h4 className="font-bold group-hover:text-primary transition-colors">
          Classic Studio Pro
        </h4>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          $79.00
        </p>
      </div>
      <div className="group cursor-pointer">
        <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4">
          <img alt="Related product 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="True wireless earbuds with case" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAngk_CI8S9ZbYgwbmzjK73zIiEtxGq74oV29iNvNDjW_jspEO9FUXiIIk2MNkQ6SqVxfFjD5VlOa50MsgIpfwEr_8R7omFfx-X4A8V9l2XNYvVykKADwmcBXEdY1PUmo4Y1GR7N9T_cszRAhRlCCc24QCjAZWZwuVCfAJ40PxfiPw7UGAADfCj1Y3MpFiw1az9tSJHNV2pCTaJSw8ThmvjwS3PtD5AsCaRjKK9HaoBMY8MOQjh25-uqKEqGJj3xe7ZpBm1s-VOu0fE" />
        </div>
        <h4 className="font-bold group-hover:text-primary transition-colors">
          Elite Pods Gen 2
        </h4>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          $129.00
        </p>
      </div>
      <div className="group cursor-pointer">
        <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4">
          <img alt="Related product 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Sleek silver noise cancelling headphones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMwFYQv_SDD6_KiyhK5O66NRMQkyxbS-pPBThd_4HfgtAuWMxef2lZnrjjneI40wU5SKaJKeQ1FVs4Tc5JC77QlbHAyj66AQIEp-4eyoWchv8eoQm-qV72vk043fFat5ouoYFDjlLFjL2ezVE9a6KqoLJwTxDaJOhRwOMQa36TfctxbjpPuJau7KuSC47c6ADlrxM1hIElJcf8l53tXKW1Ojrc-w3r7erPg0d0ThM-fllSdhMf5UfI99TZ5xebLvC9P9VqakIh8ZlM" />
        </div>
        <h4 className="font-bold group-hover:text-primary transition-colors">
          Silver Echo ANC
        </h4>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          $115.00
        </p>
      </div>
      <div className="group cursor-pointer">
        <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4">
          <img alt="Related product 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Rugged sports wireless headphones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5A5Et69n0TS3bYLBZnGtS6TvGFcn_uvrYxKdzb0vzSHqPuYCyP2PHAj0dhMuS1ZUVo3H-NJYiPO17Z0pbjW8Zsor-9yZVlWhlKXExEMbjWy6DlItgTqRAHnLdhldJdMTUVKVgk4NYL_F7MMzVD6_XVxyvzxUdGqWDZDGWYEBv8343A42FgLhe5D3hupraHWGFfuz1JYfqs4mdS2osd_u51mF8QvMLxA6xeZGULgoER71ebUGiI6qqs401ylBdLTdAum0ZkacdN9ML" />
        </div>
        <h4 className="font-bold group-hover:text-primary transition-colors">
          Rugged Sport Air
        </h4>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          $89.00
        </p>
      </div>
    </div>
  </section>
</main>
    </div>
  )
}

export default Aboutpage;