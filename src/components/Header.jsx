import { Code2, User, Briefcase } from 'lucide-react';
import './Header.css'
import PixelStar from './PixelStar.jsx'

export default function Header() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="header">
            <div className="filler">
                <nav>
                    <div className="logo">
                        <Code2 />
                        <span>MY PORTFOLIO</span>
                        <PixelStar className="text-purple-600 animate-pulse" />
                    </div>

                    <div className="nav-links">
                        <button onClick={() => scrollToSection("projects")} className="flex items-center gap-2 hover:text-purple-700 transition-all hover:scale-110 text-black">
                            <Briefcase />
                            <span>PROJECTS</span>
                        </button>
                        <button onClick={() => scrollToSection("about")} className="flex items-center gap-2 hover:text-purple-700 transition-all hover:scale-110 text-black">
                            <User />
                            <span>ABOUT</span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}