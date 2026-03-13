 import {LucideIcon} from "lucide-react";
 interface buttonprops{
    text:string;
    textcolor?:string;
    bgcolor?:string;
    Icon?:LucideIcon;
    onClick:()=>void;
}

export function Button({text,textcolor,bgcolor,Icon ,onClick }:buttonprops ) {
 
  return (
    <div>
      <button onClick={onClick} style={{color:textcolor,backgroundColor:bgcolor}} className="btn flex items-center gap-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold px-7 py-2 rounded">{text}{Icon && <Icon size="18"/>}</button>
    </div>
  );
}

export default Button;
//npx nx g @nx/workspace:remove lib/button