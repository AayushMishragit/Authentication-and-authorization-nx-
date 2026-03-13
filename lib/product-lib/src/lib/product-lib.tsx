import {ShoppingCart ,Star, StarHalf,Heart} from "lucide-react"

interface productprops{
   src?:string;
   alt?:string;
   review?:number;
   name?:string;
   price?:number;
}


export function Products() {

  return (
  <>

   
      <div className="group flex flex-col overflow-hidden rounded-xl  dark:border-slate-800 bg-[#111537] dark:bg-slate-900 transition-all hover:shadow-xl hover:shadow-primary/5">
      <div className="aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
        <img alt="Product" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Modern high-end wireless studio headphones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDivmBa_0QQYueIEVtLerbzrG5wsQAy8AoTOf2n7MBRXXKjhmuCNcC8FfjD2OuPaWx1urhBT8bRQEV0T8EUr91MzNjASL5mBcwxX3BRQcDNYzKqxo9hfQH14ZGllp2-qKsvrydOjbq79zMSa80zJbJ7QI0HRbgsLUeoOzhWA_RSAjwwrGFIwuErz9u-YJ4yP1dcqG7_wulVEZNv4otS71PoCQqS0FOy2ftlAi50-uCix3mCcU94nN2_uP1O9MtkY_uHDoXBgegk4tgC" />
        <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-900 dark:text-white hover:text-red-500 transition-colors">
          <span className="material-symbols-outlined !text-xl">
            <Heart size="18"/>
          </span>
        </button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs font-medium text-blue-700">
          Electronics
        </div>
        <h3 className="mb-2 text-white font-bold leading-tight line-clamp-2">
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
          <p className="text-xs text-white">
            (128)
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between text-white">
          <span className="text-xl font-bold">
            $299.00
          </span>
          <button className="flex items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-primary/90 transition-colors">
           
              <ShoppingCart size='19' className="text-black-900"/>
           
          </button>
        </div>
      </div>
    </div>


</>

  

    
     
                      
   
  );
}

export default Products;
