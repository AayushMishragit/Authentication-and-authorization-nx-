import { useNavigate } from "react-router-dom";
import {Button} from "@my-workspace/button";
import {Products} from "@my-workspace/product-lib"
import { ArrowRight } from "lucide-react";
import Featuresection from "../components/features";
import Productsection from "../components/Productsection";
import { Truck, Headphones,Shield,RotateCcw} from "lucide-react";



interface HomePageProps {
  setIsAuthenticated: (value: boolean) => void;
}

function HomePage({setIsAuthenticated}:HomePageProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    setTimeout(() => {
      navigate("/login")}, 1000);
};
const featuresData = [
  {Icon:Truck,text: "Free Delivery",subtext: "On orders over $50",gradient: "from-cyan-500 to-blue-500"},
  {Icon:Headphones,text: "24/7 Support",subtext: "Always here to help",gradient: "from-purple-500 to-pink-500"},
  {Icon:Shield,text: "Secure Payment",subtext: "100% protected",gradient: "from-indigo-500 to-purple-500"},
  {Icon:RotateCcw,text: "Easy Returns",subtext: "30-day guarantee",gradient: "from-pink-500 to-rose-500"}
]
  

  return (
    <>
     <div className="bg-white-500 min-h-screen items-center justify-center">
  <section className="bg-gradient-to-r bg-[#19143c] text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-bold text-white-600 text-6xl md:text-7xl gap-2">
          Welcome to ShopHub
        </h1>
        <p className="text-xl md:text-2xl mb-8 mt-3 text-blue-100">
          Discover amazing products at unbeatable prices
        </p>
        <div className="flex justify-center">
          <Button
            text="Shop Now"
            bgcolor="#4097fa"
            textcolor="#ffffff"
            Icon={ArrowRight}
            onClick={() => navigate("/products")}
          />
           <Button 
         text="Logout"
            bgcolor="#dae1ead4"
            textcolor="#434141"
            Icon={ArrowRight}
            onClick={handleLogout}/>
      </div>
        </div>
       
      
    </div>
    
    <div className="gap-8 pt-8 flex justify-center">
          <div >
            <div className="font-bold gradient-text text-3xl">50k+</div>
            <div className="font-light text-white-300">Happy customers</div>
          </div>
          <div >
            <div className="font-bold gradient-text text-3xl">1000+</div>
            <div className="font-light text-white-300">Products</div>
          </div>
          <div >
            <div className="font-bold gradient-text text-3xl">24/7</div>
            <div className="font-light text-white-300">Support</div>
          </div>
        </div>
  </section>
  

{/*features section*/}
 <div className="bg-[#090d26] py-16">
    <Featuresection features={featuresData} />

    
 {/* featured products */}   
 <section className="py-16  ">
    <Productsection/>
 </section>

 </div>   
       
</div>


    </>
  );
}

export default HomePage;