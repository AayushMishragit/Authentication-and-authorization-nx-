import {FeatureCard,featurecardProps } from '@my-workspace/f_card';

interface featuresectionProps{
    features:featurecardProps [];
}
//npx nx g @nx/react:library my-new-lib --directory=lib/my-new-lib //npx nx run-many --target=serve 

function Featuresection({features}:featuresectionProps ){
  return (
    <>
   
    <div className=" max-w-10xl px-4 sm:px-6 lg:px-8 py-18 border-none shadow-md hover:shadow-lg transition-shadow ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
       {features.map((data,index)=>(
         <FeatureCard key={index}  Icon={data.Icon} text={data.text} subtext={data.subtext } gradient={data.gradient}/>
       ))}
           
      </div>
    </div>
    </>
  )
}

export default Featuresection;