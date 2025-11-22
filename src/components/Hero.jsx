import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useWindowSize } from 'react-use'
import { useState } from 'react'
import Confetti from 'react-confetti'
import PixelStar from './PixelStar.jsx'
import ImageWithFallback from './ImageWithFallback.jsx'
import './Hero.css'

export default function Hero() {
    const { width, height } = useWindowSize();
    const [showConfetti, setShowConfetti] = useState(false);
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleClick = () => {
        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false);
        }, 5000);
    }

    const fluffyImgStyle = {
        width: '600px',
        height: '600px',
        objectFit: 'cover',
        imageRendering: 'pixelated',
    };

    return (
        <section className="hero">
            <section className="left">
                {showConfetti && 
                    <div className="confetti">
                        <Confetti
                            tweenDuration={5000}
                        />
                    </div>
                }
                <div className="pixel-star-container">
                    <PixelStar className="text-yellow-400 animate-pulse" />
                    <PixelStar className="text-pink-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <PixelStar className="text-blue-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>

                <h1>HEY, I'M <br />ERIC YUAN 👾</h1>

                <p className="bg-white/90 p-4 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] pixel-corners">
                    A PASSIONATE DEVELOPER WHO LOVES CREATING INTERACTIVE EXPERIENCES AND FUN PROJECTS!
                </p>
                <p className="bg-white/90 p-4 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] pixel-corners">
                    FROM BUILDING GAMES TO WEB APPS, I BUILD THINGS THAT BRING IDEAS TO LIFE!
                </p>

                <nav>
                    <button onClick={() => handleClick()}>
                        <Sparkles className="w-4 h-4 mr-2" />
                        VIEW WORK
                    </button>
                    <button onClick={handleClick}>
                        PRESS ME
                    </button>

                </nav>

                <div className="anchors">
                    <a target="_blank" href="https://github.com/yuaneric06">
                        <Github className="w-5 h-5 text-black" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/eric-yuan06/">
                        <Linkedin className="w-5 h-5 text-black" />
                    </a>
                    <a target="_blank" href="mailto:yuaneric6@gmail.com">
                        <Mail className="w-5 h-5 text-black" />
                    </a>
                </div>
            </section>
            <div className="order-1 md:order-2 animate-float">
                <div className="relative">
                    <div className="absolute -inset-4 bg-yellow-400 border-4 border-black rotate-3 pixel-corners"></div>
                    <ImageWithFallback
                        // src="https://images.unsplash.com/photo-1692306088530-e81ab626753b?w=600&h=600&fit=crop"
                        src="fluffy_pfp.png"
                        alt="Profile picture"
                        className="relative w-full h-auto border-8 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] pixel-corners"
                        style={{ imageRendering: 'pixelated' }}
                        imgStyle={fluffyImgStyle}
                    />
                </div>
            </div>
        </section >
    )
}