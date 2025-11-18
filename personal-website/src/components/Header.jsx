import { Code2, User, Briefcase } from 'lucide-react';
import './Header.css'
import PixelStar from './PixelStar.jsx'

export default function Header() {
    return (
        <header>
            <div className="filler">
                <nav>
                    <div className="logo">
                        <Code2 />
                        <span>MY PORTFOLIO</span>
                        <PixelStar className="text-purple-600 animate-pulse" />
                    </div>

                    <div className="nav-links">
                        <button>
                            <Briefcase />
                            <span>PROJECTS</span>
                        </button>
                        <button>
                            <User />
                            <span>ABOUT</span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}