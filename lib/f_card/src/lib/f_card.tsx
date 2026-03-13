import {LucideIcon } from "lucide-react";

 export interface featurecardProps{
  text?:string;
  subtext?:string;
  Icon?:LucideIcon;
  gradient?:string;
}


export function FeatureCard({text,subtext,Icon,gradient}:featurecardProps) {
  return (
 <div className="bg-[#090d26] glass-card transition-all duration-300  border
                border-slate-200 shadow-md hover:shadow-[0_0_20px_rgba(0,200,255,0.7)] 
                rounded">
  <div className="p-6 text-center">
    <div
      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${gradient} 
                  rounded-2xl flex items-center justify-center animation-glow`}
    >
      <div className="text-white">
        {Icon && <Icon size={32} />}
      </div>
    </div>
    {text && <h3 className="text-lg font-semibold text-white mb-2">{text}</h3>}
    {subtext && <p className="text-sm text-gray-400">{subtext}</p>}
  </div>
</div>

  );
}

export default FeatureCard;
