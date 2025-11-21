import { Gamepad2 } from 'lucide-react'
import PixelStar from './PixelStar'
import ProjectList from './Projects.js'
import ProjectElement from './ProjectElement.jsx'
import './Projects.css'

export default function Projects() {

    const projectElements = ProjectList.map((data) => {
        return <ProjectElement data={data} />
    });

    return (
        <section id="projects" className="projects">
            <div className="top-thingie">
                <Gamepad2 className="w-8 h-8 text-white" />
                <div className="pixel-star-wrapper">
                    <PixelStar className="text-yellow-400 animate-bounce" />
                </div>
            </div>
            <h1>MY PROJECTS</h1>

            <p className="bg-white/90 p-4 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] max-w-2xl mx-auto text-xs sm:text-sm pixel-corners">
                HERE ARE SOME THINGS I'VE BUILT. EACH PROJECT IS A UNIQUE CHALLENGE! 🎮
            </p>
            <section className="project-list">
                {projectElements}
            </section>
        </section>
    )
}