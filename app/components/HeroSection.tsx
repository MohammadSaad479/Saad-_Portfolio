import { AnimatedTextSlider } from "@/components/animated-text-slider"
import { ScrambleText } from "@/components/scramble-text"
import { Dot } from "lucide-react"

const HeroSection = () => {
  return (
    <div className='text-white mt-15 px-3 md:px-0 lg:px-0 '>
      <div className='flex gap-4 '>
        <img className='size-14 rounded-lg' src="https://i.pinimg.com/1200x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg" alt="" />
        <div>
         <ScrambleText  text="Mohammad Saad " className="text-white text-2xl"/>
          <AnimatedTextSlider texts={["Full-Stack Developer", "UX/UI Designer", "Web Designer","Tech Ethusiast"]} className="text-gray-400  "/>
        </div>
         <div>
  <h1 className="relative hidden sm:inline-flex items-center   text-[11px] 
    border border-neutral-600 bg-neutral-800 px-2 py-0.5 rounded-full 
    text-neutral-200 overflow-hidden">
{/* <Dot className="relative  -ml-2 text-emerald-500 animate-pulse w-6 h-6" /> */}
<span className="size-2 mr-2 bg-emerald-600 rounded-full animate-pulse"></span>
<span className="relative  ">Available for work</span>

  </h1>
</div>


      </div>
    </div>
  )
}

export default HeroSection