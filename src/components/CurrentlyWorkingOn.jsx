import { Wrench, Sparkles, Code, Lightbulb } from "lucide-react";
import PixelStar from "./PixelStar.jsx";
import currentProjects from './CurrentProjects.js'
import CurrentProjectElement from './CurrentProjectElement.jsx'
import './CurrentlyWorkingOn.css'

export default function CurrentlyWorkingOn() {
    const currentProjectElements = currentProjects.map((data, idx) => {
        return <CurrentProjectElement key={idx} data={data}/>
    })
    return (
        <section className="currently-working">
            <div className="wrapper">
                <div className="header-wrapper">
                    <div className="icon-wrapper">
                        <Wrench className="w-8 h-8 text-white animate-bounce" />
                        <PixelStar className="text-yellow-400 animate-pulse" />
                        <Sparkles className="w-8 h-8 text-white animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </div>
                    <h2 className="mb-4 text-white drop-shadow-[3px_3px_0_rgba(0,0,0,1)] text-2xl sm:text-3xl">CURRENTLY WORKING ON</h2>
                    <p className="bg-white/90 p-4 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] max-w-2xl mx-auto text-xs sm:text-sm pixel-corners">
                        THESE ARE THE EXCITING THINGS I'M BUILDING RIGHT NOW! 🚧
                    </p>
                </div>

                <div className="currently-working-projects">
                    {currentProjectElements}
                </div>
            </div>
        </section>
    )
}