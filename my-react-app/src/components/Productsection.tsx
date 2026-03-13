
import {Products} from "@my-workspace/product-lib";
import { Link } from "react-router-dom";
//import { Product } from "../data/Productsdata";
function Productsection() {
  return (
    <>
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-bold tracking-tight text-white dark:text-white">Featured Products</h2>
<Link className="text-sm text-blue-400 font-semibold text-primary hover:underline" to="/products">View all</Link>
</div></div>
<div className="m-7 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"><Products/></div>

</>
  )
}

export default Productsection;